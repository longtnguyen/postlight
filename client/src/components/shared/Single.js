import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Card, CardMedia } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: '100%',
    justify: 'center'
  },
  img: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
    justify: 'center'
  }
}));
export const Single = (employee) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container
        spacing={3}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={6}>
          <Paper className={classes.img}>
            <img width='75%' src='https://randomuser.me/api/portraits/women/33.jpg' />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <p>title: title</p>
            <p>first name: first name</p>
            <p>last name: title</p>
            <p>email: first name</p>
            <p>title: title</p>
            <p>first name: first name</p>
            <p>title: title</p>
            <p>first name: first name</p>
            <p>title: title</p>
            <p>first name: first name</p>
            <p>title: title</p>
            <p>first name: first name</p>
            <p>title: title</p>
            <p>first name: first name</p>
            <p>title: title</p>
            <p>first name: first name</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}