import * as React from "react";
import { useState } from "react";
import AppStateProvider from "../store/AppStateProvider";
import { darkBlue, lightTheme, ThemeTypes } from "../themes/Themes";
import { createTheme, StyledEngineProvider, ThemeProvider } from "@mui/material";
import { createGlobalStyle, ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
const AppCss = createGlobalStyle `
  html, body {
    margin: 0;
  }

  a {
    color: ${props => 
//@ts-ignore}
props.theme.palette.secondary.main}
`;
const DarkCss = createGlobalStyle `
  :root {
    color-scheme: dark;
  }
`;
export default function MyApp(props) {
    let systemThemeType;
    if (typeof window != "undefined") {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            systemThemeType = ThemeTypes.DarkBlue;
        }
        else {
            systemThemeType = ThemeTypes.Light;
        }
    }
    else {
        systemThemeType = ThemeTypes.DarkBlue;
    }
    const [themeType, setThemeType] = useState(systemThemeType);
    let appState = {
        themeType,
        setThemeType
    };
    let theme;
    switch (themeType) {
        case ThemeTypes.DarkBlue:
        default:
            theme = createTheme(darkBlue);
            break;
        case ThemeTypes.Light:
            theme = createTheme(lightTheme);
            break;
    }
    return (React.createElement(AppStateProvider, { value: appState },
        React.createElement(StyledEngineProvider, { injectFirst: true },
            React.createElement(ThemeProvider, { theme: theme },
                React.createElement(StyledComponentsThemeProvider, { theme: theme },
                    React.createElement(AppCss, null),
                    theme.palette.mode === "dark" ? React.createElement(DarkCss, null) : null,
                    props.children)))));
}
