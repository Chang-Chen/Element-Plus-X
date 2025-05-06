import { _ as _export_sfc, E as ElInput, a as ElPopover, b as ElButton, c as ElIcon, t as top_default, m as microphone_default, d as brush_default } from "./useSend.nLhTyqQI.js";
import { defineComponent, useSlots, getCurrentInstance, computed, ref, watch, createElementBlock, openBlock, normalizeStyle, createElementVNode, createVNode, normalizeClass, Transition, withCtx, createCommentVNode, unref, renderSlot, withModifiers, isRef, createBlock, createTextVNode, toDisplayString, Fragment, renderList } from "vue";
const _hoisted_1$7 = { class: "el-send-button" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "index",
  emits: ["clear"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _cache) => {
      const _component_el_icon = ElIcon;
      const _component_el_button = ElButton;
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createVNode(_component_el_button, {
          circle: "",
          onClick: _cache[0] || (_cache[0] = ($event) => emit("clear"))
        }, {
          default: withCtx(() => [
            createVNode(_component_el_icon, null, {
              default: withCtx(() => [
                createVNode(unref(brush_default))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
const ClearButton = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-dc3b4d1b"]]);
const _sfc_main$6 = {};
const _hoisted_1$6 = {
  viewBox: "0 0 1000 1000",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _cache[0] || (_cache[0] = [
    createElementVNode("title", null, "Loading", -1),
    createElementVNode("rect", {
      fill: "currentColor",
      height: "250",
      rx: "24",
      ry: "24",
      width: "250",
      x: "375",
      y: "375"
    }, null, -1),
    createElementVNode("circle", {
      cx: "500",
      cy: "500",
      fill: "none",
      r: "450",
      stroke: "currentColor",
      "stroke-width": "100",
      opacity: "0.45"
    }, null, -1),
    createElementVNode("circle", {
      cx: "500",
      cy: "500",
      fill: "none",
      r: "450",
      stroke: "currentColor",
      "stroke-width": "100",
      "stroke-dasharray": "600 9999999"
    }, [
      createElementVNode("animateTransform", {
        attributeName: "transform",
        dur: "1s",
        from: "0 500 500",
        repeatCount: "indefinite",
        to: "360 500 500",
        type: "rotate"
      })
    ], -1)
  ]));
}
const loading$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render]]);
const _hoisted_1$5 = { class: "el-send-button" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "index",
  emits: ["cancel"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    return (_ctx, _cache) => {
      const _component_el_button = ElButton;
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createVNode(_component_el_button, {
          circle: "",
          onClick: _cache[0] || (_cache[0] = ($event) => emits("cancel"))
        }, {
          default: withCtx(() => [
            createVNode(loading$1, { class: "loading-svg" })
          ]),
          _: 1
        })
      ]);
    };
  }
});
const LoadingButton = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-e680f41e"]]);
const _hoisted_1$4 = { class: "el-send-button" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["submit"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    return (_ctx, _cache) => {
      const _component_el_icon = ElIcon;
      const _component_el_button = ElButton;
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createVNode(_component_el_button, {
          circle: "",
          disabled: props.disabled,
          onClick: _cache[0] || (_cache[0] = ($event) => emits("submit"))
        }, {
          default: withCtx(() => [
            createVNode(_component_el_icon, null, {
              default: withCtx(() => [
                createVNode(unref(top_default))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ]);
    };
  }
});
const _hoisted_1$3 = { class: "el-send-button" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_icon = ElIcon;
      const _component_el_button = ElButton;
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createVNode(_component_el_button, { circle: "" }, {
          default: withCtx(() => [
            createVNode(_component_el_icon, null, {
              default: withCtx(() => [
                createVNode(unref(microphone_default))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
const _hoisted_1$2 = ["viewBox"];
const _hoisted_2$1 = ["x", "y"];
const _hoisted_3$1 = ["values", "dur", "begin"];
const _hoisted_4$1 = ["values", "dur", "begin"];
const SIZE = 1e3;
const COUNT = 4;
const RECT_WIDTH = 140;
const RECT_HEIGHT_MIN = 250;
const RECT_HEIGHT_MAX = 500;
const DURATION = 0.8;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "loading",
  props: {
    className: { default: "" }
  },
  setup(__props) {
    const RECT_RADIUS = RECT_WIDTH / 2;
    const rects = computed(() => {
      const dest = (SIZE - RECT_WIDTH * COUNT) / (COUNT - 1);
      return Array.from({ length: COUNT }).map((_, index) => {
        const x = index * (dest + RECT_WIDTH);
        const yMin = SIZE / 2 - RECT_HEIGHT_MIN / 2;
        const yMax = SIZE / 2 - RECT_HEIGHT_MAX / 2;
        return { x, yMin, yMax };
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        class: normalizeClass(_ctx.className),
        color: "currentColor",
        viewBox: `0 0 ${SIZE} ${SIZE}`,
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink"
      }, [
        _cache[0] || (_cache[0] = createElementVNode("title", null, "Speech Recording", -1)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(rects.value, (item, index) => {
          return openBlock(), createElementBlock("rect", {
            key: index,
            fill: "currentColor",
            rx: RECT_RADIUS,
            ry: RECT_RADIUS,
            height: RECT_HEIGHT_MIN,
            width: RECT_WIDTH,
            x: item.x,
            y: item.yMin
          }, [
            createElementVNode("animate", {
              attributeName: "height",
              values: `${RECT_HEIGHT_MIN}; ${RECT_HEIGHT_MAX}; ${RECT_HEIGHT_MIN}`,
              keyTimes: "0; 0.5; 1",
              dur: `${DURATION}s`,
              begin: `${DURATION / COUNT * index}s`,
              repeatCount: "indefinite"
            }, null, 8, _hoisted_3$1),
            createElementVNode("animate", {
              attributeName: "y",
              values: `${item.yMin}; ${item.yMax}; ${item.yMin}`,
              keyTimes: "0; 0.5; 1",
              dur: `${DURATION}s`,
              begin: `${DURATION / COUNT * index}s`,
              repeatCount: "indefinite"
            }, null, 8, _hoisted_4$1)
          ], 8, _hoisted_2$1);
        }), 128))
      ], 10, _hoisted_1$2);
    };
  }
});
const loading = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-398e1fe0"]]);
const _hoisted_1$1 = { class: "el-send-button" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_button = ElButton;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_component_el_button, { circle: "" }, {
          default: withCtx(() => [
            createVNode(loading, { class: "loading-svg" })
          ]),
          _: 1
        })
      ]);
    };
  }
});
const SpeechLoadingButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-746f123c"]]);
const _hoisted_1 = {
  key: 0,
  class: "el-sender-header-wrap"
};
const _hoisted_2 = {
  key: 0,
  class: "el-sender-header"
};
const _hoisted_3 = {
  key: 0,
  class: "el-sender-prefix"
};
const _hoisted_4 = {
  key: 1,
  class: "el-sender-action-list"
};
const _hoisted_5 = { class: "el-sender-action-list-presets" };
const _hoisted_6 = {
  key: 2,
  class: "el-sender-updown-wrap"
};
const _hoisted_7 = {
  key: 0,
  class: "el-sender-prefix"
};
const _hoisted_8 = { class: "el-sender-action-list" };
const _hoisted_9 = { class: "el-sender-action-list-presets" };
const _hoisted_10 = {
  key: 0,
  class: "el-sender-footer"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    modelValue: { default: "" },
    placeholder: { default: "请输入内容" },
    autoSize: { default: () => ({
      minRows: 1,
      maxRows: 6
    }) },
    readOnly: { type: Boolean },
    disabled: { type: Boolean },
    loading: { type: Boolean },
    clearable: { type: Boolean },
    allowSpeech: { type: Boolean },
    submitType: { default: "enter" },
    headerAnimationTimer: { default: 300 },
    inputWidth: { default: "100%" },
    variant: { default: "default" },
    showUpdown: { type: Boolean, default: true },
    submitBtnDisabled: { type: Boolean, default: void 0 },
    inputStyle: { default: () => {
    } },
    triggerStrings: { default: () => [] },
    triggerPopoverVisible: { type: Boolean, default: false },
    triggerPopoverWidth: { default: "fit-content" },
    triggerPopoverLeft: { default: "0px" },
    triggerPopoverOffset: { default: 8 },
    triggerPopoverPlacement: { default: "top-start" }
  },
  emits: [
    "update:modelValue",
    "update:triggerPopoverVisible",
    "submit",
    "cancel",
    "recordingChange",
    "trigger"
  ],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const instance = getCurrentInstance();
    const hasOnRecordingChangeListener = computed(() => {
      var _a;
      return !!((_a = instance == null ? void 0 : instance.vnode.props) == null ? void 0 : _a.onRecordingChange);
    });
    const senderRef = ref();
    const inputRef = ref();
    const internalValue = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        if (props.readOnly || props.disabled)
          return;
        emits("update:modelValue", val);
      }
    });
    const isComposing = ref(false);
    const popoverRef = ref();
    const hasOnTriggerListener = computed(() => {
      var _a;
      return !!((_a = instance == null ? void 0 : instance.vnode.props) == null ? void 0 : _a.onTrigger);
    });
    const isSubmitDisabled = computed(() => {
      if (typeof props.submitBtnDisabled === "boolean") {
        return props.submitBtnDisabled;
      }
      return !internalValue.value;
    });
    const popoverVisible = computed({
      get() {
        return props.triggerPopoverVisible;
      },
      set(value) {
        if (props.readOnly || props.disabled)
          return;
        emits("update:triggerPopoverVisible", value);
      }
    });
    const triggerString = ref("");
    watch(
      () => internalValue.value,
      (newVal, oldVal) => {
        if (isComposing.value)
          return;
        const triggerStrings = props.triggerStrings || [];
        const validOldVal = typeof oldVal === "string" ? oldVal : "";
        const wasOldValTrigger = triggerStrings.includes(validOldVal);
        const isNewValTrigger = triggerStrings.includes(newVal);
        if (oldVal === "" && isNewValTrigger) {
          triggerString.value = newVal;
          if (hasOnTriggerListener.value) {
            emits("trigger", {
              oldValue: oldVal,
              // 关闭时返回之前触发的字符
              newValue: newVal,
              triggerString: newVal,
              isOpen: true
            });
            popoverVisible.value = true;
          } else {
            popoverVisible.value = true;
          }
        } else if (!isNewValTrigger && wasOldValTrigger) {
          if (hasOnTriggerListener.value) {
            emits("trigger", {
              oldValue: oldVal,
              // 关闭时返回之前触发的字符
              newValue: newVal,
              triggerString: void 0,
              isOpen: false
            });
            popoverVisible.value = false;
          } else {
            popoverVisible.value = false;
          }
        } else if (oldVal !== "" && isNewValTrigger && !wasOldValTrigger) {
          triggerString.value = newVal;
          if (hasOnTriggerListener.value) {
            emits("trigger", {
              oldValue: oldVal,
              // 关闭时返回之前触发的字符
              newValue: newVal,
              triggerString: newVal,
              isOpen: true
            });
            popoverVisible.value = true;
          } else {
            popoverVisible.value = true;
          }
        }
      },
      { deep: true, immediate: true }
    );
    function onContentMouseDown(e) {
      if (e.target !== senderRef.value.querySelector(`.el-textarea__inner`)) {
        e.preventDefault();
      }
      inputRef.value.focus();
    }
    const visiableHeader = ref(false);
    function openHeader() {
      if (!slots.header)
        return false;
      if (props.readOnly)
        return false;
      visiableHeader.value = true;
    }
    function closeHeader() {
      if (!slots.header)
        return;
      if (props.readOnly)
        return;
      visiableHeader.value = false;
    }
    const recognition = ref(null);
    const speechLoading = ref(false);
    function startRecognition() {
      if (props.readOnly)
        return;
      if (hasOnRecordingChangeListener.value) {
        speechLoading.value = true;
        emits("recordingChange", true);
        return;
      }
      if ("webkitSpeechRecognition" in window) {
        recognition.value = new webkitSpeechRecognition();
        recognition.value.continuous = true;
        recognition.value.interimResults = true;
        recognition.value.lang = "zh-CN";
        recognition.value.onresult = (event) => {
          let results = "";
          for (let i = 0; i <= event.resultIndex; i++) {
            results += event.results[i][0].transcript;
          }
          if (!props.readOnly) {
            internalValue.value = results;
          }
        };
        recognition.value.onstart = () => {
          speechLoading.value = true;
        };
        recognition.value.onend = () => {
          speechLoading.value = false;
        };
        recognition.value.onerror = (event) => {
          speechLoading.value = false;
        };
        recognition.value.start();
      }
    }
    function stopRecognition() {
      if (hasOnRecordingChangeListener.value) {
        speechLoading.value = false;
        emits("recordingChange", false);
        return;
      }
      if (recognition.value) {
        recognition.value.stop();
        speechLoading.value = false;
      }
    }
    function submit() {
      if (props.readOnly || props.loading || props.disabled || isSubmitDisabled.value)
        return;
      emits("submit", internalValue.value);
    }
    function cancel() {
      if (props.readOnly)
        return;
      emits("cancel", internalValue.value);
    }
    function clear() {
      if (props.readOnly)
        return;
      inputRef.value.clear();
      internalValue.value = "";
    }
    function handleKeyDown(e) {
      if (props.readOnly)
        return;
      if (props.submitType === "enter") {
        if (e.shiftKey && e.keyCode === 13) {
          e.preventDefault();
          const cursorPosition = e.target.selectionStart;
          const textBeforeCursor = internalValue.value.slice(0, cursorPosition);
          const textAfterCursor = internalValue.value.slice(cursorPosition);
          internalValue.value = `${textBeforeCursor}
${textAfterCursor}`;
          e.target.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
        } else if (e.keyCode === 13 && !e.shiftKey) {
          e.preventDefault();
          submit();
        }
      } else if (props.submitType === "shiftEnter") {
        if (e.shiftKey && e.keyCode === 13) {
          e.preventDefault();
          submit();
        } else if (e.keyCode === 13 && !e.shiftKey) {
          e.preventDefault();
          const cursorPosition = e.target.selectionStart;
          const textBeforeCursor = internalValue.value.slice(0, cursorPosition);
          const textAfterCursor = internalValue.value.slice(cursorPosition);
          internalValue.value = `${textBeforeCursor}
${textAfterCursor}`;
          e.target.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
        }
      }
    }
    function blur() {
      if (props.readOnly) {
        return false;
      }
      inputRef.value.blur();
    }
    function focus(type = "all") {
      if (props.readOnly) {
        return false;
      }
      if (type === "all") {
        inputRef.value.select();
      } else if (type === "start") {
        focusToStart();
      } else if (type === "end") {
        focusToEnd();
      }
    }
    function focusToStart() {
      if (inputRef.value) {
        const textarea = inputRef.value.$el.querySelector("textarea");
        if (textarea) {
          textarea.focus();
          textarea.setSelectionRange(0, 0);
        }
      }
    }
    function focusToEnd() {
      if (inputRef.value) {
        const textarea = inputRef.value.$el.querySelector("textarea");
        if (textarea) {
          textarea.focus();
          textarea.setSelectionRange(internalValue.value.length, internalValue.value.length);
        }
      }
    }
    function handleCompositionStart() {
      isComposing.value = true;
    }
    function handleCompositionEnd() {
      isComposing.value = false;
    }
    __expose({
      openHeader,
      // 打开头部
      closeHeader,
      // 关闭头部
      clear,
      // 清空输入框
      blur,
      // 失去焦点
      focus,
      // 获取焦点
      // 按钮操作
      submit,
      cancel,
      startRecognition,
      stopRecognition
    });
    return (_ctx, _cache) => {
      const _component_el_input = ElInput;
      const _component_el_popover = ElPopover;
      return openBlock(), createElementBlock("div", {
        class: "el-sender-wrap",
        style: normalizeStyle({
          "cursor": _ctx.disabled ? "not-allowed" : "default",
          "--el-sender-trigger-popover-width": props.triggerPopoverWidth,
          "--el-sender-trigger-popover-left": props.triggerPopoverLeft
        })
      }, [
        createElementVNode("div", {
          ref_key: "senderRef",
          ref: senderRef,
          class: normalizeClass(["el-sender", {
            "el-sender-disabled": _ctx.disabled
          }]),
          style: normalizeStyle({
            "--el-box-shadow-tertiary": "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)",
            "--el-sender-input-input-font-size": "14px",
            "--el-sender-header-animation-duration": `${_ctx.headerAnimationTimer}ms`
          })
        }, [
          createVNode(Transition, { name: "slide" }, {
            default: withCtx(() => [
              unref(visiableHeader) ? (openBlock(), createElementBlock("div", _hoisted_1, [
                _ctx.$slots.header ? (openBlock(), createElementBlock("div", _hoisted_2, [
                  renderSlot(_ctx.$slots, "header", {}, void 0, true)
                ])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ]),
            _: 3
          }),
          createElementVNode("div", {
            class: normalizeClass(["el-sender-content", { "content-variant-updown": props.variant === "updown" }]),
            onMousedown: onContentMouseDown
          }, [
            _ctx.$slots.prefix && props.variant === "default" ? (openBlock(), createElementBlock("div", _hoisted_3, [
              renderSlot(_ctx.$slots, "prefix", {}, void 0, true)
            ])) : createCommentVNode("", true),
            createVNode(_component_el_input, {
              ref_key: "inputRef",
              ref: inputRef,
              modelValue: unref(internalValue),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(internalValue) ? internalValue.value = $event : null),
              class: "el-sender-input",
              "input-style": props.inputStyle || {
                "resize": "none",
                "max-height": "176px",
                "max-width": _ctx.inputWidth
              },
              rows: 1,
              autosize: _ctx.autoSize,
              type: "textarea",
              "validate-event": false,
              placeholder: _ctx.placeholder,
              "read-only": _ctx.readOnly || _ctx.disabled,
              disabled: _ctx.disabled,
              onKeydown: withModifiers(handleKeyDown, ["stop"]),
              onCompositionstart: handleCompositionStart,
              onCompositionend: handleCompositionEnd
            }, null, 8, ["modelValue", "input-style", "autosize", "placeholder", "read-only", "disabled"]),
            props.variant === "default" ? (openBlock(), createElementBlock("div", _hoisted_4, [
              renderSlot(_ctx.$slots, "action-list", {}, () => [
                createElementVNode("div", _hoisted_5, [
                  !_ctx.loading ? (openBlock(), createBlock(unref(_sfc_main$4), {
                    key: 0,
                    disabled: unref(isSubmitDisabled),
                    onSubmit: submit
                  }, null, 8, ["disabled"])) : createCommentVNode("", true),
                  _ctx.loading ? (openBlock(), createBlock(unref(LoadingButton), {
                    key: 1,
                    onCancel: cancel
                  })) : createCommentVNode("", true),
                  !unref(speechLoading) && _ctx.allowSpeech ? (openBlock(), createBlock(unref(_sfc_main$3), {
                    key: 2,
                    onClick: startRecognition
                  })) : createCommentVNode("", true),
                  unref(speechLoading) && _ctx.allowSpeech ? (openBlock(), createBlock(unref(SpeechLoadingButton), {
                    key: 3,
                    onClick: stopRecognition
                  })) : createCommentVNode("", true),
                  _ctx.clearable ? (openBlock(), createBlock(unref(ClearButton), {
                    key: 4,
                    onClear: clear
                  })) : createCommentVNode("", true)
                ])
              ], true)
            ])) : createCommentVNode("", true),
            props.variant === "updown" && props.showUpdown ? (openBlock(), createElementBlock("div", _hoisted_6, [
              _ctx.$slots.prefix ? (openBlock(), createElementBlock("div", _hoisted_7, [
                renderSlot(_ctx.$slots, "prefix", {}, void 0, true)
              ])) : createCommentVNode("", true),
              createElementVNode("div", _hoisted_8, [
                renderSlot(_ctx.$slots, "action-list", {}, () => [
                  createElementVNode("div", _hoisted_9, [
                    !_ctx.loading ? (openBlock(), createBlock(unref(_sfc_main$4), {
                      key: 0,
                      disabled: unref(isSubmitDisabled),
                      onSubmit: submit
                    }, null, 8, ["disabled"])) : createCommentVNode("", true),
                    _ctx.loading ? (openBlock(), createBlock(unref(LoadingButton), {
                      key: 1,
                      onCancel: cancel
                    })) : createCommentVNode("", true),
                    !unref(speechLoading) && _ctx.allowSpeech ? (openBlock(), createBlock(unref(_sfc_main$3), {
                      key: 2,
                      onClick: startRecognition
                    })) : createCommentVNode("", true),
                    unref(speechLoading) && _ctx.allowSpeech ? (openBlock(), createBlock(unref(SpeechLoadingButton), {
                      key: 3,
                      onClick: stopRecognition
                    })) : createCommentVNode("", true),
                    _ctx.clearable ? (openBlock(), createBlock(unref(ClearButton), {
                      key: 4,
                      onClear: clear
                    })) : createCommentVNode("", true)
                  ])
                ], true)
              ])
            ])) : createCommentVNode("", true)
          ], 34),
          createVNode(Transition, { name: "slide" }, {
            default: withCtx(() => [
              _ctx.$slots.footer ? (openBlock(), createElementBlock("div", _hoisted_10, [
                renderSlot(_ctx.$slots, "footer", {}, void 0, true)
              ])) : createCommentVNode("", true)
            ]),
            _: 3
          })
        ], 6),
        createVNode(_component_el_popover, {
          ref_key: "popoverRef",
          ref: popoverRef,
          "virtual-ref": unref(senderRef),
          "virtual-triggering": "",
          visible: unref(popoverVisible),
          disabled: props.disabled,
          "show-arrow": false,
          placement: props.triggerPopoverPlacement,
          offset: props.triggerPopoverOffset,
          "popper-class": "el-sender-trigger-popover",
          teleported: false
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "trigger-popover", {
              triggerString: unref(triggerString),
              readonly: props.readOnly
            }, () => [
              createTextVNode(" 当前触发的字符为：" + toDisplayString(`${unref(triggerString)}`) + " 在这里定义的内容，但注意这里的回车事件将会被 输入框 覆盖 ", 1)
            ], true)
          ]),
          _: 3
        }, 8, ["virtual-ref", "visible", "disabled", "placement", "offset"])
      ], 4);
    };
  }
});
const Sender = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d5c0b736"]]);
export {
  Sender as S
};
