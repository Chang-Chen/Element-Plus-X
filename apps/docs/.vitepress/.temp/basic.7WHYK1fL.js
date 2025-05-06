import "./useSend.GCLvJHLh.js";
import { useSSRContext } from "vue";
import { S as Sender } from "./index.Be7-eJ27.js";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Sender = Sender;
  _push(ssrRenderComponent(_component_Sender, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sender/demos/basic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const basic = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  basic as default
};
