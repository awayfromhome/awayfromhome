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
        padding: '14px 30px'
      },
      inputAdornedEnd: {
        padding: '17px 30px'
      }
    }
  },
  palette: {
    primary: {
      main: '#18191B'
    },
    secondary: {
      main: '#015B98'
    },
    tertiary: {
      main: '#EFF2F4'
    },
    accent: {
      main: '#243ff2'
    }
  },

  typography: {
    useNextVariants: true,
    fontFamily: ['Questrial', 'Mukta', 'Cairo', 'sans-serif']
  }
});

export default theme;
