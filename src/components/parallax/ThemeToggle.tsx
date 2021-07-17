import * as React from "react"
import { IconButton } from "@material-ui/core"
import { Brightness4, Brightness7 } from "@material-ui/icons"
import { useAppState } from "../store/AppStateProvider"
import { ThemeTypes } from "../themes/Themes"

export function ThemeToggle() {

  const state = useAppState()

  return (
    <IconButton
      onClick={() => {
        if(state.themeType == ThemeTypes.DarkBlue){
          state.setThemeType(ThemeTypes.Light)
        }else{
          state.setThemeType(ThemeTypes.DarkBlue)
        }
      }}>
      {state.themeType == ThemeTypes.DarkBlue ? (
        <Brightness7 color={"primary"} />
      ) : (
        <Brightness4  color={"primary"}/>
      )}
    </IconButton>
  )
}
