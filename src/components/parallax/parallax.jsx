"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var ThemeToggle_1 = require("./ThemeToggle");
var ParallaxContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  flex-basis: 100%;\n  flex-shrink: 2.5;\n  height: 100vh;\n  overflow-x: hidden;\n\n  //Applying Background\n  background: url(\"/images/me-cover-small.jpg\");\n  background-size: cover;\n  background-attachment: fixed;\n\n  ", " {\n    background: url(\"/images/me-cover-medium.jpg\");\n  }\n\n  ", " {\n    background: url(\"/images/me-cover-large.jpg\");\n    background-size: 100% 150%;\n    background-position: 8% 8%;\n  }\n"], ["\n  position: relative;\n  flex-basis: 100%;\n  flex-shrink: 2.5;\n  height: 100vh;\n  overflow-x: hidden;\n\n  //Applying Background\n  background: url(\"/images/me-cover-small.jpg\");\n  background-size: cover;\n  background-attachment: fixed;\n\n  ", " {\n    background: url(\"/images/me-cover-medium.jpg\");\n  }\n\n  ", " {\n    background: url(\"/images/me-cover-large.jpg\");\n    background-size: 100% 150%;\n    background-position: 8% 8%;\n  }\n"])), function (props) { return props.theme.breakpoints.up("md"); }, function (props) { return props.theme.breakpoints.up("lg"); });
var ParrallaxGradient = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  min-height: 100%;\n\n  box-sizing: border-box;\n  text-align: center;\n  background: linear-gradient(rgba(16, 105, 98, 0.8),\n  rgba(16, 105, 98, 0.8),\n  rgba(40, 59, 110, 0.8),\n  rgba(40, 59, 110, 0.8),\n  rgba(24, 24, 26, 0.8));\n"], ["\n  width: 100%;\n  min-height: 100%;\n\n  box-sizing: border-box;\n  text-align: center;\n  background: linear-gradient(rgba(16, 105, 98, 0.8),\n  rgba(16, 105, 98, 0.8),\n  rgba(40, 59, 110, 0.8),\n  rgba(40, 59, 110, 0.8),\n  rgba(24, 24, 26, 0.8));\n"])));
var ToggleContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: fixed;\n  bottom :1em;\n  right: 2em;\n"], ["\n  position: fixed;\n  bottom :1em;\n  right: 2em;\n"])));
function Parallax(props) {
    return (<ParallaxContainer>
      <ToggleContainer>
        <ThemeToggle_1.ThemeToggle />
      </ToggleContainer>
      <ParrallaxGradient>{props.children}</ParrallaxGradient>
    </ParallaxContainer>);
}
exports.default = Parallax;
var templateObject_1, templateObject_2, templateObject_3;
