import { ref, shallowRef } from "vue";
const DEFAULT_STREAM_SEPARATOR = "\n\n";
const DEFAULT_PART_SEPARATOR = "\n";
const DEFAULT_KV_SEPARATOR = ":";
const isValidString = (str) => (str ?? "").trim() !== "";
function splitStream() {
  let buffer = "";
  return new TransformStream({
    transform(chunk, controller) {
      buffer += chunk;
      const parts = buffer.split(DEFAULT_STREAM_SEPARATOR);
      parts.slice(0, -1).forEach((part) => {
        if (isValidString(part))
          controller.enqueue(part);
      });
      buffer = parts[parts.length - 1];
    },
    flush(controller) {
      if (isValidString(buffer))
        controller.enqueue(buffer);
    }
  });
}
function splitPart() {
  return new TransformStream({
    transform(partChunk, controller) {
      const lines = partChunk.split(DEFAULT_PART_SEPARATOR);
      const sseEvent = lines.reduce((acc, line) => {
        const sepIndex = line.indexOf(DEFAULT_KV_SEPARATOR);
        if (sepIndex === -1)
          return acc;
        const key = line.slice(0, sepIndex);
        if (!isValidString(key))
          return acc;
        const value = line.slice(sepIndex + 1);
        return { ...acc, [key]: value };
      }, {});
      if (Object.keys(sseEvent).length > 0)
        controller.enqueue(sseEvent);
    }
  });
}
function XStream(options, signal) {
  const { readableStream, transformStream } = options;
  if (!(readableStream instanceof ReadableStream)) {
    throw new TypeError("options.readableStream 必须是 ReadableStream 的实例。");
  }
  const decoderStream = new TextDecoderStream();
  const processedStream = transformStream ? readableStream.pipeThrough(decoderStream).pipeThrough(transformStream) : readableStream.pipeThrough(decoderStream).pipeThrough(splitStream()).pipeThrough(splitPart());
  processedStream[Symbol.asyncIterator] = async function* () {
    const reader = this.getReader();
    this.reader = reader;
    try {
      while (true) {
        if (signal == null ? void 0 : signal.aborted) {
          await reader.cancel();
          break;
        }
        const { done, value } = await reader.read();
        if (done)
          break;
        if (value)
          yield value;
      }
    } finally {
      reader.releaseLock();
    }
  };
  return processedStream;
}
function useXStream() {
  const data = ref([]);
  const error = ref(null);
  const isLoading = ref(false);
  const abortController = shallowRef(null);
  const currentStream = shallowRef(null);
  const startStream = async (options) => {
    isLoading.value = true;
    error.value = null;
    data.value = [];
    abortController.value = new AbortController();
    currentStream.value = XStream(options, abortController.value.signal);
    try {
      for await (const item of currentStream.value) {
        data.value.push(item);
      }
    } catch (err) {
      if (err instanceof Error) {
        error.value = err;
      }
    } finally {
      isLoading.value = false;
      currentStream.value = null;
      abortController.value = null;
    }
  };
  const cancel = () => {
    if (abortController.value) {
      abortController.value.abort();
    }
  };
  return {
    startStream,
    cancel,
    // 新增中断方法
    data,
    error,
    isLoading
  };
}
export {
  useXStream as u
};
