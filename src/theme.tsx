import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightGreen[900],
    },
    secondary: {
      main: lightGreen[400],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: lightGreen[100],
    },
  },
});

export default theme;
