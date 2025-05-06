import { _ as _export_sfc, c as ElIcon, l as loading_default, o as opportunity_default, s as success_filled_default, e as circle_close_filled_default, f as arrow_up_bold_default } from "./useSend.nLhTyqQI.js";
import { defineComponent, ref, watch, computed, createElementBlock, openBlock, normalizeStyle, createElementVNode, createVNode, normalizeClass, renderSlot, createBlock, createCommentVNode, withCtx, unref, createTextVNode, toDisplayString, Transition, withDirectives, vShow } from "vue";
const _hoisted_1 = ["disabled"];
const _hoisted_2 = { class: "status-icon" };
const _hoisted_3 = { class: "label" };
const _hoisted_4 = { class: "content" };
const _hoisted_5 = { class: "error-message" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    modelValue: { type: Boolean, default: true },
    content: { default: "" },
    status: { default: "start" },
    disabled: { type: Boolean, default: false },
    autoCollapse: { type: Boolean, default: false },
    duration: { default: "0.2s" },
    buttonWidth: { default: "160px" },
    maxWidth: { default: "500px" },
    backgroundColor: { default: "#fcfcfc" },
    color: { default: "var(--el-color-info)" }
  },
  emits: ["change", "update:expanded"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isExpanded = ref(props.modelValue);
    watch(() => props.modelValue, (newVal) => {
      isExpanded.value = newVal;
    });
    function changeExpand() {
      if (props.disabled)
        return;
      isExpanded.value = !isExpanded.value;
      emit("change", { value: isExpanded.value, status: props.status });
      emit("update:expanded", isExpanded.value);
    }
    const displayedContent = computed(() => {
      return props.status === "error" ? "思考过程中出现错误" : props.content;
    });
    watch(() => props.status, (newVal) => {
      if (newVal === "end" && props.autoCollapse) {
        isExpanded.value = false;
      }
    });
    return (_ctx, _cache) => {
      const _component_el_icon = ElIcon;
      return openBlock(), createElementBlock("div", {
        class: "el-thinking",
        style: normalizeStyle({
          "--el-thinking-button-width": props.buttonWidth,
          "--el-thinking-animation-duration": props.duration,
          "--el-thinking-content-wrapper-width": props.maxWidth,
          "--el-thinking-content-wrapper-background-color": props.backgroundColor,
          "--el-thinking-content-wrapper-color": props.color
        })
      }, [
        createElementVNode("button", {
          class: normalizeClass(["trigger", [_ctx.status, { disabled: !props.disabled }]]),
          disabled: props.disabled,
          onClick: changeExpand
        }, [
          createElementVNode("span", _hoisted_2, [
            renderSlot(_ctx.$slots, "status-icon", {
              status: props.status
            }, () => [
              _ctx.status === "thinking" ? (openBlock(), createBlock(_component_el_icon, {
                key: 0,
                class: "is-loading el-icon-center"
              }, {
                default: withCtx(() => [
                  createVNode(unref(loading_default))
                ]),
                _: 1
              })) : createCommentVNode("", true),
              _ctx.status === "start" ? (openBlock(), createBlock(_component_el_icon, {
                key: 1,
                class: "el-icon-center start-color"
              }, {
                default: withCtx(() => [
                  createVNode(unref(opportunity_default))
                ]),
                _: 1
              })) : createCommentVNode("", true),
              _ctx.status === "end" ? (openBlock(), createBlock(_component_el_icon, {
                key: 2,
                class: "el-icon-center end-color"
              }, {
                default: withCtx(() => [
                  createVNode(unref(success_filled_default))
                ]),
                _: 1
              })) : createCommentVNode("", true),
              _ctx.status === "error" ? (openBlock(), createBlock(_component_el_icon, {
                key: 3,
                class: "el-icon-center error-color"
              }, {
                default: withCtx(() => [
                  createVNode(unref(circle_close_filled_default))
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ], true)
          ]),
          createElementVNode("span", _hoisted_3, [
            renderSlot(_ctx.$slots, "label", {
              status: props.status
            }, () => [
              createTextVNode(toDisplayString(_ctx.status === "thinking" ? "思考中..." : _ctx.status === "error" ? "思考遇到问题" : _ctx.status === "end" ? "思考完成" : "开始思考"), 1)
            ], true)
          ]),
          createVNode(Transition, { name: "rotate" }, {
            default: withCtx(() => [
              !props.disabled ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(["arrow el-icon-center", { expanded: unref(isExpanded) }])
              }, [
                renderSlot(_ctx.$slots, "arrow", {}, () => [
                  createVNode(_component_el_icon, { class: "el-icon-center" }, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_up_bold_default))
                    ]),
                    _: 1
                  })
                ], true)
              ], 2)) : createCommentVNode("", true)
            ]),
            _: 3
          })
        ], 10, _hoisted_1),
        createVNode(Transition, { name: "slide" }, {
          default: withCtx(() => [
            unref(displayedContent) ? withDirectives((openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(["content-wrapper", { "error-state": _ctx.status === "error" }])
            }, [
              createElementVNode("div", _hoisted_4, [
                _ctx.status !== "error" ? renderSlot(_ctx.$slots, "content", {
                  key: 0,
                  content: unref(displayedContent)
                }, () => [
                  createElementVNode("pre", null, toDisplayString(unref(displayedContent)), 1)
                ], true) : renderSlot(_ctx.$slots, "error", {
                  key: 1,
                  errorContent: unref(displayedContent)
                }, () => [
                  createElementVNode("div", _hoisted_5, toDisplayString(unref(displayedContent)), 1)
                ], true)
              ])
            ], 2)), [
              [vShow, unref(isExpanded)]
            ]) : createCommentVNode("", true)
          ]),
          _: 3
        })
      ], 4);
    };
  }
});
const Thinking = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-52a744d6"]]);
export {
  Thinking as T
};
