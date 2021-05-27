"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Button = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 0.6em 1.2em;\n  background: ", ";\n  color: ", ";\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  border-radius: 1.4em;\n  box-sizing: border-box;\n  transition: color 0.3s ease-out, background 0.3s ease-out;\n\n  &:hover {\n    color: ", ";\n    background: ", ";\n  }\n"], ["\n  padding: 0.6em 1.2em;\n  background: ", ";\n  color: ", ";\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  border-radius: 1.4em;\n  box-sizing: border-box;\n  transition: color 0.3s ease-out, background 0.3s ease-out;\n\n  &:hover {\n    color: ", ";\n    background: ", ";\n  }\n"])), function (props) { return props.theme.palette.background.default; }, function (props) { return props.theme.palette.text.primary; }, function (props) { return props.theme.palette.background.default; }, function (props) { return props.theme.palette.text.primary; });
var MyButton = function (props) {
    return (<Button {...props}>
      {props.children}
    </Button>);
};
exports.default = MyButton;
var templateObject_1;
