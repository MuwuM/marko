const _marko_template = _t(__filename);

export default _marko_template;
import _customTagData from "./custom-tag-data-tag.js";
import _marko_tag from "marko/src/runtime/helpers/render-tag";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "packages/translator-default/test/fixtures/custom-tag-data/template.marko",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  _marko_tag(_customTagData, {
    "name": "Frank".toUpperCase(),
    "age": 32
  }, out, _component, "0");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);