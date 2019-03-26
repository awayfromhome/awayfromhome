import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      input: {
        textAlign: 'left'
      }
    },
    MuiOutlinedInput: {
      input: {
        margin: '1%',
        padding: '15px 30px'
      },
      inputAdornedEnd: {
        margin: '4%'
      }
    }
  },
  palette: {
    primary: {
      main: '#474056',
      second: '#F2E3BC'
    },
    secondary: {
      main: '#96BBBB'
    },
    tertiary: {
      main: '#656D79'
    },
    accent: {
      main: '#9BA2FF'
    }
  },

  typography: {
    useNextVariants: true,
    fontFamily: ['Questrial', 'Mukta', 'Cairo', 'sans-serif']
  }
});

export default theme;
