"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppState = void 0;
var Themes_1 = require("../themes/Themes");
var React = require("react");
var defaultAppState = {
    themeType: Themes_1.ThemeTypes.DarkBlue,
    setThemeType: function (type) {
    }
};
var AppState = React.createContext(defaultAppState);
function AppStateProvider(props) {
    return (<AppState.Provider value={props.value}>
      {props.children}
    </AppState.Provider>);
}
exports.default = AppStateProvider;
function useAppState() {
    var used = React.useContext(AppState);
    if (used != null) {
        return used;
    }
    else {
        throw "App State outside of provider";
    }
}
exports.useAppState = useAppState;
