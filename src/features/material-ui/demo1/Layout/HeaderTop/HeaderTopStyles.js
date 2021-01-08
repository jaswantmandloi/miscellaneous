import { makeStyles } from "@material-ui/core/styles";

export const useStylesContainer = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.headerTop,
  },
}));

export const useStylesBackMoney = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(0.5)}px 0`,
    display: "flex",
  },
  backAmount: {
    fontWeight: theme.typography.fontWeightBold,
  },
  normalLink: {
    color: theme.palette.text.primary,
  },
  divider: {
    margin: `${theme.spacing(0.5)}px 0`,
  },
}));
