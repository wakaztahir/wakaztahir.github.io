"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var AppStateProvider_1 = require("../store/AppStateProvider");
var react_1 = require("react");
var Themes_1 = require("../themes/Themes");
var core_1 = require("@material-ui/core");
var styled_components_1 = require("styled-components");
function MyApp(props) {
    var _a = react_1.useState(Themes_1.ThemeTypes.DarkBlue), themeType = _a[0], setThemeType = _a[1];
    var appState = {
        themeType: themeType,
        setThemeType: setThemeType
    };
    //todo load saved state
    var theme = core_1.createMuiTheme(Themes_1.darkBlue);
    if (themeType === Themes_1.ThemeTypes.Light) {
        theme = core_1.createMuiTheme(Themes_1.lightTheme);
    }
    return (<AppStateProvider_1.default value={appState}>
      <core_1.MuiThemeProvider theme={theme}>
        <styled_components_1.ThemeProvider theme={theme}>
          <core_1.StylesProvider injectFirst>
            {props.children}
          </core_1.StylesProvider>
        </styled_components_1.ThemeProvider>
      </core_1.MuiThemeProvider>
    </AppStateProvider_1.default>);
}
exports.default = MyApp;
