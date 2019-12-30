import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(6, 0, 3)
    }
  })
);

export default function Page4() {
  const classes = useStyles();
  return (
    <div className={classes.root} >
    <Typography variant="h4" component="h1" gutterBottom>
      Page 4!!!
    </Typography>
    </div>
  );
}