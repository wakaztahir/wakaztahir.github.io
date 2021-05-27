import * as React from "react"
import { useState } from "react"
import AppStateProvider from "../store/AppStateProvider"
import { darkBlue, lightTheme, ThemeTypes } from "../themes/Themes"
import { createMuiTheme, MuiThemeProvider, StylesProvider } from "@material-ui/core"
import { createGlobalStyle, ThemeProvider } from "styled-components"


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

  const [themeType, setThemeType] = useState(ThemeTypes.DarkBlue)

  let appState = {
    themeType,
    setThemeType
  }

  //todo load saved state
  let theme = createMuiTheme(darkBlue)
  if (themeType === ThemeTypes.Light) {
    theme = createMuiTheme(lightTheme)
  }

  return (
    <AppStateProvider value={appState}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <StylesProvider injectFirst>
            <AppCss />
            {theme.palette.type === "dark" ? <DarkCss /> : null}
            {props.children}
          </StylesProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </AppStateProvider>
  )
}
