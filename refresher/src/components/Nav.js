import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    background: orange[800]
  },
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));


const Nav = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Amber Jones
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/home" className={classes.link}>
              Home
            </Link>
            <Link to="/form" className={classes.link}>
              Form
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
