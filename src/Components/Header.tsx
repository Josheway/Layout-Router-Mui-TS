import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },

    title: {
      flexGrow: 1
    }
  })
);

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Our Page!!
          </Typography>
          <Button component={Link} to={"/"} color="inherit">
            Home
          </Button>
          <Button component={Link} to={"/Page2"} color="inherit">
            Page 2
          </Button>
          <Button component={Link} to={"/Page3"} color="inherit">
            Page 3
          </Button>
          <Button component={Link} to={"/Page4"} color="inherit">
            Page 4
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
