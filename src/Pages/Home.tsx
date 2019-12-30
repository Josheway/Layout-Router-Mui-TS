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

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Typography variant="h4" component="h1" gutterBottom>
            Home!!!
        </Typography>
    <h2>HELLO</h2>
    <p>Cras facilisis urna ornare ex volutpat, et
    convallis erat elementum. Ut aliquam, ipsum vitae
    gravida suscipit, metus dui bibendum est, eget rhoncus nibh
    metus nec massa. Maecenas hendrerit laoreet augue
    nec molestie. Cum sociis natoque penatibus et magnis
    dis parturient montes, nascetur ridiculus mus.
    </p>

    <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
</div>
    
  );
}