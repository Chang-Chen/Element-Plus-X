import "./useSend.GCLvJHLh.js";
import { mergeProps, useSSRContext } from "vue";
import { T as Thinking } from "./index.C4Hfdfla.js";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Thinking = Thinking;
  _push(ssrRenderComponent(_component_Thinking, mergeProps({
    duration: "0.8s",
    content: "欢迎使用 Element-Plus-X"
  }, _attrs), null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/thinking/demos/duration.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const duration = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  duration as default
};
