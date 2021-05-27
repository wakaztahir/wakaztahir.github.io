"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Aside = styled_components_1.default.aside(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 22rem;\n  height: 100vh;\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  float: left;\n  overflow-y:hidden;\n"], ["\n  width: 22rem;\n  height: 100vh;\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  float: left;\n  overflow-y:hidden;\n"])), function (props) { return props.theme.palette.background.default; });
var BaseSidebar = function (props) {
    return (<Aside>
      {props.children}
    </Aside>);
};
BaseSidebar.defaultProps = {};
exports.default = BaseSidebar;
var templateObject_1;
