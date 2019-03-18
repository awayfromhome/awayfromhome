import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      input: {
        textAlign: "left"
      }
    }
  },
  palette: {
    primary: {
      main: "#474056"
    },
    secondary: {
      main: "#96BBBB"
    },
    tertiary: {
      main: "#656D79"
    },
    accent: {
      main: "#9BA2FF"
    }
  },
  typography: { useNextVariants: true }
});

export default theme;
