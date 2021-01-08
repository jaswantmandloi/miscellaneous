import { makeStyles } from "@material-ui/core/styles";

export const useStylesContainer = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[1],
  },
  freeDelivery: {
    padding: `${theme.spacing(0.5)}px 0 ${theme.spacing(0.5)}px ${theme.spacing(
      2
    )}px`,
  },
  menus: {
    display: "flex",
    justifyContent: "flex-end",
    "& a": {
      display: "flex",
      marginRight: theme.spacing(1.5),
    },
    "& a:nth-last-child(2)": {
      "& svg": {
        marginRight: theme.spacing(1),
      },
    },
    "& a:last-child": {
      "& svg": {
        marginRight: theme.spacing(1),
        color: theme.palette.common.black,
      },
    },
  },
}));
