import { FC } from 'react';
import { makeStyles, Theme, Grid, Typography, Button } from '@material-ui/core';
import { ArrowForwardRounded } from '@material-ui/icons';
import Link from 'next/link';
import SuperText from './SuperText';

const useStyles = makeStyles((theme: Theme) => ({
  countryTitle: {
    marginBottom: theme.spacing(2),
  },
}));

const CountryList: FC = () => {
  const classes = useStyles({});
  return (
    <Grid container alignItems="stretch">
      <Grid item xs={12} md={4}>
        <Typography variant="h4" component="h3" className={classes.countryTitle}>
          Netherlands
        </Typography>
        <Typography gutterBottom>
          A little text
        </Typography>
        <Link href="/nl" passHref>
          <Button color="secondary" variant="contained" endIcon={<ArrowForwardRounded />}>
            View blog
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h4" component="h3" className={classes.countryTitle}>
          Denmark
          <SuperText>(Coming soon)</SuperText>
        </Typography>
        <Typography>
          A little text
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h4" component="h3" className={classes.countryTitle}>
          Japan
          <SuperText>(Coming soon)</SuperText>
        </Typography>
        <Typography>
          A little text
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CountryList;