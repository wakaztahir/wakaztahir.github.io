import * as React from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useAppState } from "../store/AppStateProvider";
import { ThemeTypes } from "../themes/Themes";
export function ThemeToggle() {
    const state = useAppState();
    return (React.createElement(IconButton, { onClick: () => {
            if (state.themeType == ThemeTypes.DarkBlue) {
                state.setThemeType(ThemeTypes.Light);
            }
            else {
                state.setThemeType(ThemeTypes.DarkBlue);
            }
        }, size: "large" }, state.themeType == ThemeTypes.DarkBlue ? (React.createElement(Brightness7, { color: "primary" })) : (React.createElement(Brightness4, { color: "primary" }))));
}
