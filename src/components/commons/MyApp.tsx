import * as React from "react"
import { useState } from "react"
import AppStateProvider from "../store/AppStateProvider"
import { darkBlue, lightTheme, ThemeTypes } from "../themes/Themes"
import { createTheme, StyledEngineProvider, ThemeProvider } from "@mui/material"
import { createGlobalStyle, ThemeProvider as StyledComponentsThemeProvider } from "styled-components"


const AppCss = createGlobalStyle`
  html, body {
    margin: 0;
  }

  a {
    color: ${props =>
            //@ts-ignore}
            props.theme.palette.secondary.main
    }
`

const DarkCss = createGlobalStyle`
  :root {
    color-scheme: dark;
  }
`

export default function MyApp(props: { children: any }) {

  const [themeType, setThemeType] = useState(ThemeTypes.Light)

  let appState = {
    themeType,
    setThemeType
  }

  //todo load saved state
  let theme = createTheme(darkBlue)
  if (themeType === ThemeTypes.Light) {
    theme = createTheme(lightTheme)
  }

  return (
    <AppStateProvider value={appState}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <StyledComponentsThemeProvider theme={theme}>
            <AppCss />
            {theme.palette.mode === "dark" ? <DarkCss /> : null}
            {props.children}
          </StyledComponentsThemeProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </AppStateProvider>
  )
}
