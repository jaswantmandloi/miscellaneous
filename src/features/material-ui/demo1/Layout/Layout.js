import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "./Theme";
import Header from "./Header/Header";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
//import "./Theme.module.css";

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderTop />
      <Header />
      <HeaderBottom />
      {children}
    </ThemeProvider>
  );
}
