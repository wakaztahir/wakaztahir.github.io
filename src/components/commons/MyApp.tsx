import * as React from "react"
import AppStateProvider from "../store/AppStateProvider"
import { useState } from "react"
import { darkBlue, lightTheme, ThemeTypes } from "../themes/Themes"
import { createMuiTheme, MuiThemeProvider, StylesProvider } from "@material-ui/core"
import { createGlobalStyle, ThemeProvider } from "styled-components"

export default function MyApp(props: { children: any }) {

  const [themeType, setThemeType] = useState(ThemeTypes.Light)

  let appState = {
    themeType,
    setThemeType
  }

  //todo load saved state
  let theme = createMuiTheme(darkBlue)
  if (themeType === ThemeTypes.Light) {
    theme = createMuiTheme(lightTheme)
  }

  const DarkCss = createGlobalStyle`
    :root {
      color-scheme: dark;
    }
  `

  return (
    <AppStateProvider value={appState}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          {theme.palette.type === "dark" ? <DarkCss /> : null}
          <StylesProvider injectFirst>
            {props.children}
          </StylesProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </AppStateProvider>
  )
}
