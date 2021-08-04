import { createTheme, Theme } from '@material-ui/core';

export const theme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#77faca',
    },
    secondary: {
      main: '#da9ffc',
    },
    background: {
      default: '#091224',
      paper: '#091224',
    },
  },
});
