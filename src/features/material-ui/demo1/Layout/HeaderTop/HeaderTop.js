//import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import { useStylesBackMoney } from "./HeaderTopStyles";
import { getBreakPointsWidths } from "features/material-ui/demo1/Utils";

export default function HeaderTop() {
  //const containerClasses = useStylesContainer();
  const backMoneyClasses = useStylesBackMoney();

  return (
    // <Container className={containerClasses.root}>
    <Grid container alignItems="center" justify="center">
      <Grid item {...getBreakPointsWidths(6)} className={backMoneyClasses.root}>
        <Link href="#" variant="body2" className={backMoneyClasses.normalLink}>
          <Typography component="span">Now! Up to</Typography>
          <Typography component="span" className={backMoneyClasses.backAmount}>
            {" "}
            5% back{" "}
          </Typography>
          <Typography component="span">
            both online & in store for Rewards members.{" "}
          </Typography>
          <Typography component="span">
            <Link href="#" variant="body2">
              Learn more
            </Link>
          </Typography>
        </Link>
      </Grid>

      <Divider
        orientation="vertical"
        flexItem
        className={backMoneyClasses.divider}
      />

      <Grid
        item
        {...getBreakPointsWidths(5)}
        className={backMoneyClasses.root}
        justify="center"
      >
        <Link href="#" variant="body2" className={backMoneyClasses.normalLink}>
          <Typography component="span">Up to</Typography>
          <Typography component="span" className={backMoneyClasses.backAmount}>
            {" "}
            40% off{" "}
          </Typography>
          <Typography component="span">
            bselect chairs and furniture.{" "}
          </Typography>
          <Typography component="span">
            <Link href="#" variant="body2">
              Shop now
            </Link>
          </Typography>
        </Link>
      </Grid>
    </Grid>
    // </Container>
  );
}
