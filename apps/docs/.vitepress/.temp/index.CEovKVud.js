import { _ as _export_sfc, g as ElImage } from "./useSend.GCLvJHLh.js";
import { defineComponent, useSlots, toRefs, computed, createElementBlock, openBlock, normalizeStyle, normalizeClass, unref, renderSlot, createElementVNode, createCommentVNode, createVNode, toDisplayString, createTextVNode } from "vue";
const _hoisted_1 = { class: "content-wrapper" };
const _hoisted_2 = {
  key: 0,
  class: "title-wrapper"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    prefixCls: {},
    rootClassName: {},
    className: {},
    style: {},
    variant: { default: "filled" },
    classNames: {},
    styles: {},
    icon: {},
    title: {},
    description: {},
    extra: {},
    direction: { default: "ltr" }
  },
  setup(__props) {
    const props = __props;
    const solts = useSlots();
    const { prefixCls, className, rootClassName, variant, direction, classNames, icon, title, extra, description, style, styles } = toRefs(props);
    function getContainerClass() {
      return [
        prefixCls.value || "welcome",
        className.value,
        rootClassName.value,
        `welcome-${variant.value}`,
        {
          "welcome-rtl": direction.value === "rtl"
        }
      ];
    }
    const getIconClass = () => {
      var _a;
      return (_a = classNames.value) == null ? void 0 : _a.icon;
    };
    const getTitleClass = () => {
      var _a;
      return (_a = classNames.value) == null ? void 0 : _a.title;
    };
    const getExtraClass = () => {
      var _a;
      return (_a = classNames.value) == null ? void 0 : _a.extra;
    };
    const getDescriptionClass = () => {
      var _a;
      return (_a = classNames.value) == null ? void 0 : _a.description;
    };
    const hasIcon = computed(() => !!icon.value);
    const hasTitleOrExtra = computed(() => !!title.value || !!extra.value);
    const hasExtraOrSlot = computed(() => !!extra.value || !!solts.extra);
    const hasDescription = computed(() => !!description.value);
    const containerClass = computed(getContainerClass);
    const iconClass = computed(getIconClass);
    const titleClass = computed(getTitleClass);
    const extraClass = computed(getExtraClass);
    const descriptionClass = computed(getDescriptionClass);
    return (_ctx, _cache) => {
      var _a, _b, _c;
      const _component_el_image = ElImage;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(containerClass), "welcome-container"]),
        style: normalizeStyle(unref(style))
      }, [
        renderSlot(_ctx.$slots, "image", {}, () => {
          var _a2;
          return [
            unref(hasIcon) ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass([unref(iconClass), "welcome-icon"]),
              style: normalizeStyle((_a2 = unref(styles)) == null ? void 0 : _a2.icon)
            }, [
              createVNode(_component_el_image, {
                src: unref(icon),
                class: "icon-image"
              }, null, 8, ["src"])
            ], 6)) : createCommentVNode("", true)
          ];
        }, true),
        createElementVNode("div", _hoisted_1, [
          unref(hasTitleOrExtra) ? (openBlock(), createElementBlock("div", _hoisted_2, [
            unref(title) ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass([unref(titleClass), "welcome-title"]),
              style: normalizeStyle((_a = unref(styles)) == null ? void 0 : _a.title)
            }, toDisplayString(unref(title)), 7)) : createCommentVNode("", true),
            unref(hasExtraOrSlot) ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass([unref(extraClass), "welcome-extra"]),
              style: normalizeStyle((_b = unref(styles)) == null ? void 0 : _b.extra)
            }, [
              renderSlot(_ctx.$slots, "extra", {}, () => [
                createTextVNode(toDisplayString(unref(extra)), 1)
              ], true)
            ], 6)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          unref(hasDescription) ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass([unref(descriptionClass), "welcome-description"]),
            style: normalizeStyle((_c = unref(styles)) == null ? void 0 : _c.description)
          }, toDisplayString(unref(description)), 7)) : createCommentVNode("", true)
        ])
      ], 6);
    };
  }
});
const Welcome = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e9cf1972"]]);
export {
  Welcome as W
};
