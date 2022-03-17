"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeToggle = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var icons_1 = require("@material-ui/icons");
var AppStateProvider_1 = require("../store/AppStateProvider");
var Themes_1 = require("../themes/Themes");
function ThemeToggle() {
    var state = (0, AppStateProvider_1.useAppState)();
    return (<core_1.IconButton onClick={function () {
            if (state.themeType == Themes_1.ThemeTypes.DarkBlue) {
                state.setThemeType(Themes_1.ThemeTypes.Light);
            }
            else {
                state.setThemeType(Themes_1.ThemeTypes.DarkBlue);
            }
        }}>
      {state.themeType == Themes_1.ThemeTypes.DarkBlue ? (<icons_1.Brightness7 color={"primary"}/>) : (<icons_1.Brightness4 color={"primary"}/>)}
    </core_1.IconButton>);
}
exports.ThemeToggle = ThemeToggle;
