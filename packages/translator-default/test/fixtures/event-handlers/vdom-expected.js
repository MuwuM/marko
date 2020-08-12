const _marko_template = _t(__filename);

export default _marko_template;
import _customTag from "./components/custom-tag.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/dom";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("packages/translator-default/test/fixtures/event-handlers/template.marko", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.e("div", null, "0", component, 0, 0, {
    "onclick": _component.d("click", "handleClick", false, [a, b, ...d])
  });
  out.e("div", null, "1", component, 0, 0, {
    "onDashed-cased-Event": _component.d("Dashed-cased-Event", "handle", false)
  });
  out.e("div", {
    "onmouseout": "someStringHandler"
  }, "2", component, 0, 0, {
    "oncamelcasedevent": _component.d("camelcasedevent", "handle", false)
  });

  _marko_tag(_customTag, {}, out, _component, "3", [["thing", "handleThing", false, [a, b, ...d]]]);

  _marko_tag(_customTag, {}, out, _component, "4", [["Dashed-cased-Event", "handle", false]]);

  _marko_tag(_customTag, {}, out, _component, "5", [["camelcasedEvent", "handle", false]]);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);