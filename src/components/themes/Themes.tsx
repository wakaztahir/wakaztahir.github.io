import { ThemeOptions } from "@mui/material"

type CustomThemeOptions = ThemeOptions & {
  palette : {
    background : {
      translucent : string
    }
  }
}

export enum ThemeTypes {
  Light = "light",
  DarkBlue = "darkblue"
}

const Raleway = "'Raleway', sans-serif"
const Hind = "Hind', sans-serif"
const Montserrat = "'Montserrat', sans-serif"

const commonTheme: ThemeOptions = {
  typography: {
    h1: {
      fontFamily: Raleway
    },
    h2: {
      fontFamily: Raleway
    },
    h3: {
      fontFamily: Raleway
    },
    h4: {
      fontFamily: Raleway
    },
    h5: {
      fontFamily: Hind
    },
    h6: {
      fontFamily: Hind
    },
    body1: {
      fontFamily: Montserrat
    },
    body2: {
      fontFamily: Hind
    }
  }
}

export const lightTheme: CustomThemeOptions = {
  ...commonTheme,
  palette: {
    mode: "light",
    background: {
      default: "#e7e4e4",
      translucent : "rgba(231,228,228,0.8)",
    }
  }
}

export const darkBlue: CustomThemeOptions = {
  ...commonTheme,
  palette: {
    mode: "dark",
    background: {
      default: "#2b3a42",
      translucent : "rgba(43,58,66,0.9)",
    }
  }
}
