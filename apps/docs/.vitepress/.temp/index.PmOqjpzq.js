import { _ as _export_sfc, c as ElIcon } from "./useSend.nLhTyqQI.js";
import { defineComponent, ref, resolveComponent, createElementBlock, openBlock, normalizeStyle, renderSlot, createCommentVNode, createElementVNode, toDisplayString, normalizeClass, Fragment, renderList, withModifiers, createVNode, withCtx, createBlock, resolveDynamicComponent } from "vue";
const _hoisted_1 = { class: "el-prompts-title" };
const _hoisted_2 = ["onClick", "onMouseenter", "onMouseleave", "onMousedown", "onMouseup"];
const _hoisted_3 = { class: "item-content-container" };
const _hoisted_4 = { class: "el-prompts-item-content" };
const _hoisted_5 = { class: "el-prompts-item-label" };
const _hoisted_6 = { class: "el-prompts-item-description" };
const _hoisted_7 = {
  key: 1,
  class: "el-prompts-children"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    title: { default: "" },
    items: { default: () => [] },
    wrap: { type: Boolean, default: false },
    vertical: { type: Boolean, default: false },
    style: { default: () => ({}) }
  },
  emits: ["itemClick"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const hoveredKeys = ref(/* @__PURE__ */ new Set());
    const activeKeys = ref(/* @__PURE__ */ new Set());
    function handleItemClick(item) {
      if (item.disabled)
        return;
      if (item.children && item.children.length > 0)
        return;
      emits("itemClick", item);
    }
    function handleMouseEnter(key) {
      hoveredKeys.value.add(key);
    }
    function handleMouseLeave(key) {
      hoveredKeys.value.delete(key);
    }
    function handleMouseDown(key) {
      activeKeys.value.add(key);
    }
    function handleMouseUp(key) {
      activeKeys.value.delete(key);
    }
    function isHovered(key) {
      return hoveredKeys.value.has(key);
    }
    function isActive(key) {
      return activeKeys.value.has(key);
    }
    return (_ctx, _cache) => {
      const _component_el_icon = ElIcon;
      const _component_index = resolveComponent("index", true);
      return openBlock(), createElementBlock("div", {
        class: "el-prompts",
        style: normalizeStyle(props.style)
      }, [
        _ctx.$slots.title || props.title ? renderSlot(_ctx.$slots, "title", { key: 0 }, () => [
          createElementVNode("div", _hoisted_1, toDisplayString(_ctx.title), 1)
        ], true) : createCommentVNode("", true),
        createElementVNode("div", {
          class: normalizeClass(["el-prompts-items", {
            "el-prompts-items-wrap": props.wrap,
            "el-prompts-items-vertical": props.vertical
          }])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
            return openBlock(), createElementBlock("div", {
              key: item.key,
              class: normalizeClass(["el-prompts-item", {
                "el-prompts-item-disabled": item.disabled,
                "el-prompts-item-gap": item.icon || _ctx.$slots.icon,
                "hovered": isHovered(item.key),
                "actived": isActive(item.key)
              }]),
              style: normalizeStyle({
                ...item.itemStyle,
                ...isHovered(item.key) ? item.itemHoverStyle ? item.itemHoverStyle : {} : {},
                ...isActive(item.key) ? item.itemActiveStyle ? item.itemActiveStyle : {} : {}
              }),
              onClick: withModifiers(($event) => handleItemClick(item), ["stop"]),
              onMouseenter: withModifiers(($event) => handleMouseEnter(item.key), ["stop"]),
              onMouseleave: withModifiers(($event) => handleMouseLeave(item.key), ["stop"]),
              onMousedown: withModifiers(($event) => handleMouseDown(item.key), ["stop"]),
              onMouseup: withModifiers(($event) => handleMouseUp(item.key), ["stop"])
            }, [
              createElementVNode("div", _hoisted_3, [
                _ctx.$slots.icon || item.icon ? renderSlot(_ctx.$slots, "icon", {
                  key: 0,
                  item
                }, () => [
                  createVNode(_component_el_icon, { class: "el-prompts-item-icon" }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(item.icon)))
                    ]),
                    _: 2
                  }, 1024)
                ], true) : createCommentVNode("", true),
                createElementVNode("div", _hoisted_4, [
                  _ctx.$slots.label || item.label ? renderSlot(_ctx.$slots, "label", {
                    key: 0,
                    item
                  }, () => [
                    createElementVNode("h6", _hoisted_5, toDisplayString(item.label), 1)
                  ], true) : createCommentVNode("", true),
                  _ctx.$slots.description || item.description ? renderSlot(_ctx.$slots, "description", {
                    key: 1,
                    item
                  }, () => [
                    createElementVNode("p", _hoisted_6, toDisplayString(item.description), 1)
                  ], true) : createCommentVNode("", true)
                ]),
                item.children && item.children.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_7, [
                  createVNode(_component_index, {
                    items: item.children,
                    vertical: "",
                    style: normalizeStyle(props.style),
                    onItemClick: handleItemClick
                  }, null, 8, ["items", "style"])
                ])) : createCommentVNode("", true)
              ])
            ], 46, _hoisted_2);
          }), 128))
        ], 2)
      ], 4);
    };
  }
});
const Prompts = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-36b0f65b"]]);
export {
  Prompts as P
};
