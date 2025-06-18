import type TypewriterSource from '@components/Typewriter/index.vue';
// import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';
import Typewriter from './index.vue';
import PrismDemo from './PrismDemo.vue';
// import 'prismjs/components/prism-java';
// import 'prismjs/components/prism-go';
// import 'prismjs/themes/prism.min.css';
import ShikiDemo from './ShikiDemo.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Typewriter',
  component: Typewriter,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
    isMarkdown: { control: 'boolean' },
    typing: { control: 'object' },
    isFog: { control: 'boolean' }
  },
  args: {
    typing: {
      step: 2,
      interval: 100,
      suffix: '|',
      isRequestEnd: true
    },
    isFog: true,
    isMarkdown: true
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  }
} satisfies Meta<typeof TypewriterSource>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const BaseRender: Story = {
  args: {
    isFog: true,
    isMarkdown: true,
    content: `
      # 标题
这是一个 Markdown 示例。
- 列表项 1
- 列表项 2
**粗体文本** 和 *斜体文本*
      `.trim()
  } as Story['args']
};

export const PrismRender: Story = {
  args: {
    content: `
    # javascript
  \`\`\`javascript
    const name = "world";
    console.log('Hello, \$\{name\}\`);
  \`\`\`
  # java
  \`\`\`java
    public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello, world!");
        }
    }
  \`\`\`
  # go
  \`\`\`go
    package main

    import "fmt"

    func main() {
        fmt.Println("Hello, world!")
    }
  \`\`\`
      `.trim()
  } as Story['args'],
  render: args => ({
    components: {
      PrismDemo
    },
    setup() {
      return {
        attrs: args
      };
    },
    template: `<PrismDemo v-bind="attrs" />`
  })
};

export const PieRender: Story = {
  args: {
    content: `
      \`\`\`mermaid
      pie
    "传媒及文化相关" : 35
    "广告与市场营销" : 8
    "游戏开发" : 15
    "影视动画与特效" : 12
    "互联网产品设计" : 10
    "VR/AR开发" : 5
    "其他" : 15
   \`\`\`
      `.trim()
  } as Story['args']
};

export const MathRender: Story = {
  args: {
    content: `
      \`\`\`mermaid
     sequenceDiagram
          autonumber
          participant 1 as $$alpha$$
          participant 2 as $$beta$$
          1->>2: Solve: $$sqrt{2+2}$$
          2-->>1: Answer: $$2$$
          Note right of 2: $$sqrt{2+2}=sqrt{4}=2$$
\`\`\`
    `.trim()
  } as Story['args']
};

export const ShikiRender: Story = {
  args: {
    content: `
    # javascript
  \`\`\`javascript
    const name = "world";
    console.log('Hello, \$\{name\}\`);
  \`\`\`
  # java
  \`\`\`java
    public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello, world!");
        }
    }
  \`\`\`
  # go
  \`\`\`go
    package main

    import "fmt"

    func main() {
        fmt.Println("Hello, world!")
    }
  \`\`\`
      `.trim()
  } as Story['args'],
  render: args => ({
    components: {
      ShikiDemo
    },
    setup() {
      return {
        attrs: {
          ...args,
          typing: false
        }
      };
    },
    template: `
    <p style="color: #f00;">注: 由于shiki是异步加载, 因此当前使用的异步加载, 如果介意的话可以在全局注册markdown-it, 后期可能会提供比较好的方案来解决这个问题。</p>
    <Suspense>
      <ShikiDemo v-bind="attrs" />
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>`
  })
};
