import { ThemeTypes } from "../themes/Themes";
import * as React from "react";
const defaultAppState = {
    themeType: ThemeTypes.DarkBlue,
    setThemeType: (type) => {
    }
};
const AppState = React.createContext(defaultAppState);
export default function AppStateProvider(props) {
    return (React.createElement(AppState.Provider, { value: props.value }, props.children));
}
export function useAppState() {
    const used = React.useContext(AppState);
    if (used != null) {
        return used;
    }
    else {
        throw "App State outside of provider";
    }
}
