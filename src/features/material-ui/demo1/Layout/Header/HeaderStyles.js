import { makeStyles } from "@material-ui/core/styles";

export const useStylesContainer = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: 0,
  },
  paper: {
    backgroundColor: theme.palette.background.main,
    color: theme.palette.text.light,
  },
}));

export const useStylesLogo = makeStyles((theme) => ({
  logo: {
    padding: `${theme.spacing(2)}px 0`,
    "& img": {
      marginLeft: theme.spacing(2),
      height: "24px",
      width: "134px",
      minWidth: "134px",
      backgroundRepeat: "no-repeat",
    },
  },
}));

export const useStylesMegaMenus = makeStyles((theme) => ({
  container: {
    ...theme.typography.subtitle2,
    "& div": {
      padding: `0 ${theme.spacing(2)}px `,
    },
    "& a": {
      color: theme.palette.text.light,
      display: "flex",
    },
  },
}));

export const useStylesSearch = makeStyles((theme) => ({
  container: {
    //paddingLeft: theme.spacing(5),
  },

  paper: {
    borderRadius: `${theme.shape.searchBoxBorderRadius}px`,
    "& input": {
      //paddingLeft: theme.spacing(1.25),
      padding: `${theme.spacing(1.25)}px ${theme.spacing(
        1.25
      )}px ${theme.spacing(1.25)}px `,
    },
    "& div": {
      marginRight: theme.spacing(1.25),
    },
  },
  searchIcon: {
    color: theme.palette.primary.main,
  },
}));

export const useStylesMenus = makeStyles((theme) => ({
  container: {
    display: "flex",
    "& a": {
      color: theme.palette.text.light,
      margin: `0 ${theme.spacing(2)}px`,
    },
  },
}));
