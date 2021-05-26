import * as React from "react"
import AppStateProvider from "../store/AppStateProvider"
import { useState } from "react"
import { darkBlue, lightTheme, ThemeTypes } from "../themes/Themes"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"

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
        {props.children}
      </MuiThemeProvider>
    </AppStateProvider>
  )
}
