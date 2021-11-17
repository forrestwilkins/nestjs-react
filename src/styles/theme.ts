import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();

export const BLACK = defaultTheme.palette.grey[900];
export const WHITE = defaultTheme.palette.grey[100];

const globalTheme = createTheme({
  typography: {
    fontFamily: "Inter",
  },

  palette: {
    background: {},
  },
});

const muiTheme = createTheme({
  ...globalTheme,

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

export default muiTheme;
