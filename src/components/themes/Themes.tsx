import { ThemeOptions } from "@material-ui/core"

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

export const lightTheme: ThemeOptions = {
  ...commonTheme,
  palette: {
    type: "light",
    background: {
      default: "#e7e4e4"
    }
  }
}

export const darkBlue: ThemeOptions = {
  ...commonTheme,
  palette: {
    type: "dark",
    background: {
      default: "#2b3a42"
    }
  }
}
