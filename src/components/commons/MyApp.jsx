"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var AppStateProvider_1 = require("../store/AppStateProvider");
var Themes_1 = require("../themes/Themes");
var material_1 = require("@mui/material");
var styled_components_1 = require("styled-components");
var AppCss = (0, styled_components_1.createGlobalStyle)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  html, body {\n    margin: 0;\n  }\n\n  a {\n    color: ", "\n"], ["\n  html, body {\n    margin: 0;\n  }\n\n  a {\n    color: ", "\n"])), function (props) {
    //@ts-ignore}
    return props.theme.palette.secondary.main;
});
var DarkCss = (0, styled_components_1.createGlobalStyle)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  :root {\n    color-scheme: dark;\n  }\n"], ["\n  :root {\n    color-scheme: dark;\n  }\n"])));
function MyApp(props) {
    var systemThemeType;
    if (typeof window != "undefined") {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            systemThemeType = Themes_1.ThemeTypes.DarkBlue;
        }
        else {
            systemThemeType = Themes_1.ThemeTypes.Light;
        }
    }
    else {
        systemThemeType = Themes_1.ThemeTypes.DarkBlue;
    }
    var _a = (0, react_1.useState)(systemThemeType), themeType = _a[0], setThemeType = _a[1];
    var appState = {
        themeType: themeType,
        setThemeType: setThemeType
    };
    var theme;
    switch (themeType) {
        case Themes_1.ThemeTypes.DarkBlue:
        default:
            theme = (0, material_1.createTheme)(Themes_1.darkBlue);
            break;
        case Themes_1.ThemeTypes.Light:
            theme = (0, material_1.createTheme)(Themes_1.lightTheme);
            break;
    }
    return (<AppStateProvider_1.default value={appState}>
      <material_1.StyledEngineProvider injectFirst>
        <material_1.ThemeProvider theme={theme}>
          <styled_components_1.ThemeProvider theme={theme}>
            <AppCss />
            {theme.palette.mode === "dark" ? <DarkCss /> : null}
            {props.children}
          </styled_components_1.ThemeProvider>
        </material_1.ThemeProvider>
      </material_1.StyledEngineProvider>
    </AppStateProvider_1.default>);
}
exports.default = MyApp;
var templateObject_1, templateObject_2;
