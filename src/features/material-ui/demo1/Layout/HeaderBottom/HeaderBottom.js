//import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { useStylesContainer } from "./HeaderBottomStyles";
import { getBreakPointsWidths } from "features/material-ui/demo1/Utils";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Sms from "@material-ui/icons/Sms";
import Room from "@material-ui/icons/Room";

export default function HeaderTop() {
  const classes = useStylesContainer();

  return (
    // <Container className={classes.root}>
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.root}
    >
      <Grid item {...getBreakPointsWidths(6)} className={classes.freeDelivery}>
        <Link href="#" variant="body2">
          <Typography component="span" variant="body2">
            Free delivery, no minimum
          </Typography>
        </Link>
      </Grid>

      <Grid item {...getBreakPointsWidths(6)} className={classes.menus}>
        <Link href="#" variant="body2">
          Rewards
          <ExpandMore />
        </Link>
        <Link href="#" variant="body2">
          WorkLife
          <ExpandMore />
        </Link>
        <Link href="#" variant="body2">
          Lists
          <ExpandMore />
        </Link>
        <Link href="#" variant="body2">
          For Businesses
        </Link>
        <Link href="#" variant="body2">
          <Sms />
          Chat
        </Link>
        <Link href="#" variant="body2">
          <Room />
          Set Your Store
        </Link>
      </Grid>
    </Grid>
    // </Container>
  );
}
