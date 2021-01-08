import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    // primary: {
    //   // light: will be calculated from palette.primary.main,
    //   // dark: will be calculated from palette.primary.main,
    //   // contrastText: will be calculated to contrast with palette.primary.main
    // },
    background: {
      headerTop: "#f3f3f3",
      light: "#fff",
      main: "#c00",
    },
    text: {
      light: "#fff",
    },
  },

  shape: {
    searchBoxBorderRadius: 10,
  },
});
