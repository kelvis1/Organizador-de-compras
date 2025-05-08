import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#001449', // cor principal mais escura
    },
    secondary: {
      main: '#00b4fc', // cor mais clara
    },
    background: {
      default: '#001449', // fundo escuro
      paper: '#012677',   // fundo de elementos como cards
    },
    info: {
      main: '#005bc5',   // cor intermediária
    },
    success: {
      main: '#17f9ff',   // cor bem clara
    },
  },
});

export default theme;
