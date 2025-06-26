import { defineComponent, h } from 'vue';
import {
  MarkdownProvider,
  useMarkdownContext
} from '../components/MarkdownProvider';
import { VueMarkdown, VueMarkdownAsync } from '../core';
import { useComponents } from '../hooks';
import { MarkdownProps } from '../shared';

const InnerRenderer = defineComponent({
  name: 'InnerMarkdownRenderer',
  setup(_, { slots }) {
    const context = useMarkdownContext();
    const components = useComponents(slots);
    return () =>
      h(VueMarkdown, context.value as any, {
        ...components,
        ...slots
      });
  }
});

const InnerRendererAsync = defineComponent({
  name: 'InnerMarkdownRendererAsync',
  setup(_, { slots }) {
    const context: any = useMarkdownContext();
    const components = useComponents(slots);

    return () =>
      h(VueMarkdownAsync, context.value, {
        ...components,
        ...slots
      });
  }
});

const MarkdownRenderer = defineComponent({
  name: 'MarkdownRenderer',
  props: MarkdownProps,
  setup(props, { slots }) {
    return () =>
      h(MarkdownProvider, props, {
        default: () => h(InnerRenderer, {}, slots)
      });
  }
});

const MarkdownRendererAsync = defineComponent({
  name: 'MarkdownRendererAsync',
  props: MarkdownProps,
  setup(props, { slots }) {
    return () =>
      h(MarkdownProvider, props, {
        default: () => h(InnerRendererAsync, {}, slots)
      });
  }
});

export { MarkdownRenderer, MarkdownRendererAsync };
