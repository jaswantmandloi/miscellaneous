//import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutline from "@material-ui/icons/HelpOutline";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import ExpandMore from "@material-ui/icons/ExpandMore";

import {
  useStylesContainer,
  useStylesLogo,
  useStylesMegaMenus,
  useStylesSearch,
  useStylesMenus,
} from "./HeaderStyles";
import { getBreakPointsWidths } from "features/material-ui/demo1/Utils";

export default function Header() {
  const containerClasses = useStylesContainer();
  const logoClasses = useStylesLogo();
  const megaMenuClasses = useStylesMegaMenus();
  const searchClasses = useStylesSearch();
  const menusClasses = useStylesMenus();
  return (
    // <Container className={containerClasses.root}>
    <Paper className={containerClasses.paper}>
      <Grid container alignItems="center">
        <Grid item {...getBreakPointsWidths(2)} className={logoClasses.logo}>
          {/* <img src="/demo1/images/logo.svg" /> */}
          <img src="/demo1/images/white_logo.svg" />
        </Grid>
        <Grid item {...getBreakPointsWidths(4)}>
          <Grid container className={megaMenuClasses.container}>
            <Grid item>
              <Link href="#">
                Products
                <ExpandMore />
              </Link>
            </Grid>
            <Grid item>
              <Link href="#">
                Deals <ExpandMore />
              </Link>
            </Grid>
            <Grid item>
              <Link href="#">
                Services <ExpandMore />
              </Link>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          {...getBreakPointsWidths(4)}
          className={searchClasses.container}
        >
          <Paper className={searchClasses.paper}>
            <Input
              fullWidth
              disableUnderline={true}
              type="search"
              placeholder="Search"
              inputProps={{ "aria-label": "description" }}
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon className={searchClasses.searchIcon} />
                </InputAdornment>
              }
            />
          </Paper>
        </Grid>

        <Grid
          item
          {...getBreakPointsWidths(2)}
          className={menusClasses.container}
          justify="flex-end"
        >
          <Box display="flex" justifyContent="space-around">
            <Link href="#">
              <Typography variant="subtitle2">Sign In</Typography>
            </Link>
            <Link href="#">
              <HelpOutline />
            </Link>
            <Link href="#">
              <ShoppingCart />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
    // </Container>
  );
}
