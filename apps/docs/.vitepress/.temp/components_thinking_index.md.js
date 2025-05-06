import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Thinking 思考中 🍓","description":"","frontmatter":{},"headers":[],"relativePath":"components/thinking/index.md","filePath":"components/thinking/index.md","lastUpdated":1746503545000}');
const _sfc_main = { name: "components/thinking/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_demo = resolveComponent("demo");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="thinking-思考中-🍓" tabindex="-1">Thinking 思考中 🍓 <a class="header-anchor" href="#thinking-思考中-🍓" aria-label="Permalink to &quot;Thinking 思考中 🍓&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p><code>Thinking</code> 是一个用于展示思考中状态的组件，支持 <strong>状态管理</strong> 、<strong>内容展开/收起</strong> 和 <strong>自定义样式</strong>。通过不同状态（开始/思考中/完成/错误）的视觉反馈，帮助用户直观理解AI的思考流程。组件内置过渡动画，提供灵活的扩展插槽，适合在智能对话、数据分析等场景中使用。</p><div class="info custom-block"><p class="custom-block-title">💌 消息</p><p>此组件可以和 <code>BubbleList</code> 等组件一起使用，以实现更丰富的交互体验。</p></div><h2 id="代码演示" tabindex="-1">代码演示 <a class="header-anchor" href="#代码演示" aria-label="Permalink to &quot;代码演示&quot;">​</a></h2><h3 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_demo, { src: "components/thinking/demos/base.vue" }, null, _parent));
  _push(`<h3 id="内容展开-收起" tabindex="-1">内容展开/收起 <a class="header-anchor" href="#内容展开-收起" aria-label="Permalink to &quot;内容展开/收起&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_demo, { src: "components/thinking/demos/content.vue" }, null, _parent));
  _push(`<h3 id="状态管理" tabindex="-1">状态管理 <a class="header-anchor" href="#状态管理" aria-label="Permalink to &quot;状态管理&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_demo, { src: "components/thinking/demos/v-model.vue" }, null, _parent));
  _push(`<h3 id="状态样式" tabindex="-1">状态样式 <a class="header-anchor" href="#状态样式" aria-label="Permalink to &quot;状态样式&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_demo, { src: "components/thinking/demos/status.vue" }, null, _parent));
  _push(`<h3 id="自动收起" tabindex="-1">自动收起 <a class="header-anchor" href="#自动收起" aria-label="Permalink to &quot;自动收起&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_demo, { src: "components/thinking/demos/autoCollapse.vue" }, null, _parent));
  _push(`<h3 id="禁用状态" tabindex="-1">禁用状态 <a class="header-anchor" href="#禁用状态" aria-label="Permalink to &quot;禁用状态&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_demo, { src: "components/thinking/demos/disabled.vue" }, null, _parent));
  _push(`<h3 id="宽度定制" tabindex="-1">宽度定制 <a class="header-anchor" href="#宽度定制" aria-label="Permalink to &quot;宽度定制&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_demo, { src: "components/thinking/demos/width.vue" }, null, _parent));
  _push(`<h3 id="内容颜色样式定制" tabindex="-1">内容颜色样式定制 <a class="header-anchor" href="#内容颜色样式定制" aria-label="Permalink to &quot;内容颜色样式定制&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_demo, { src: "components/thinking/demos/color.vue" }, null, _parent));
  _push(`<h3 id="插槽定制" tabindex="-1">插槽定制 <a class="header-anchor" href="#插槽定制" aria-label="Permalink to &quot;插槽定制&quot;">​</a></h3>`);
  _push(ssrRenderComponent(_component_demo, { src: "components/thinking/demos/solt.vue" }, null, _parent));
  _push(`<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>是否必填</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>content</code></td><td>String</td><td>否</td><td><code>&#39;&#39;</code></td><td>显示的主要内容文本 无打字效果，由接口返回决定</td></tr><tr><td><code>modelValue</code></td><td>Boolean</td><td>否</td><td><code>true</code></td><td>通过 v-model 绑定展开状态，默认为展开状</td></tr><tr><td><code>status</code></td><td>ThinkingStatus</td><td>否</td><td><code>&#39;start&#39;</code></td><td>组件状态：<code>start</code>（开始）/<code>thinking</code>（思考中）/<code>end</code>（完成）/<code>error</code>（错误）</td></tr><tr><td><code>autoCollapse</code></td><td>Boolean</td><td>否</td><td><code>false</code></td><td>是否在组件状态变为 <code>end</code> 时自动收起内容区域</td></tr><tr><td><code>disabled</code></td><td>Boolean</td><td>否</td><td><code>false</code></td><td>是否禁用组件交互</td></tr><tr><td><code>buttonWidth</code></td><td>String</td><td>否</td><td><code>&#39;160px&#39;</code></td><td>触发按钮宽度</td></tr><tr><td><code>duration</code></td><td>String</td><td>否</td><td><code>&#39;0.2s&#39;</code></td><td>过渡动画时长</td></tr><tr><td><code>maxWidth</code></td><td>String</td><td>否</td><td><code>&#39;500px&#39;</code></td><td>内容区域最大宽度</td></tr><tr><td><code>backgroundColor</code></td><td>String</td><td>否</td><td><code>&#39;#fcfcfc&#39;</code></td><td>内容区域背景色</td></tr><tr><td><code>color</code></td><td>String</td><td>否</td><td><code>&#39;var(--el-color-info)&#39;</code></td><td>内容文字颜色</td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>事件名</th><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td><code>@change</code></td><td>{value:boolean,status:ThinkingStatus}</td><td>Function</td><td>展开状态或状态变化时触发</td></tr></tbody></table><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><table tabindex="0"><thead><tr><th>插槽名</th><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td><code>#status-icon</code></td><td>{ status }</td><td>Slot</td><td>自定义状态图标</td></tr><tr><td><code>#label</code></td><td>{ status }</td><td>Slot</td><td>自定义按钮文字</td></tr><tr><td><code>#arrow</code></td><td>-</td><td>Slot</td><td>自定义箭头图标</td></tr><tr><td><code>#content</code></td><td>{ content }</td><td>Slot</td><td>自定义内容区域（非错误状态）</td></tr><tr><td><code>#error</code></td><td>-</td><td>Slot</td><td>自定义错误信息内容展示</td></tr></tbody></table><h2 id="功能特性" tabindex="-1">功能特性 <a class="header-anchor" href="#功能特性" aria-label="Permalink to &quot;功能特性&quot;">​</a></h2><ol><li><p><strong>多状态管理</strong></p><ul><li>支持<code>start</code>/<code>thinking</code>/<code>end</code>/<code>error</code>四种状态，自动切换对应图标和文案</li><li>错误状态时强制显示固定错误提示</li></ul></li><li><p><strong>交互反馈</strong></p><ul><li>展开/收起内容区域时带有平滑滑动动画</li><li>按钮点击反馈支持自定义过渡效果</li></ul></li><li><p><strong>样式定制</strong></p><ul><li>通过CSS变量控制尺寸、颜色等视觉属性</li><li>提供完整的插槽扩展能力，支持自定义图标和内容</li></ul></li><li><p><strong>智能行为</strong></p><ul><li>状态切换时自动调整展开状态</li><li>禁用状态时保持视觉反馈但阻断交互</li></ul></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/thinking/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
