import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      input: {
        textAlign: "left"
      }
    }
  }
});

export default theme;
