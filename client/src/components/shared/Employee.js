import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { get, isEmpty } from 'lodash';
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
  },
  p: {
    fontSize: 25,
  }
}));
export const Employee = (employee) => {
  const classes = useStyles();
  let history = useHistory();
  const handleClick = () => {
    history.goBack()
  }
  const state = get(employee, 'location.state')
  // Different way to use this module requires this
  const employeeDetail = state || employee.data || {};
  if(!employeeDetail || isEmpty(employeeDetail)) {
    // For now, clickon on employeeDetail will just redirect
    history.push('/')
  }

  return (
    <div className={classes.root}>
      {state && <Button onClick={handleClick}>Go Back</Button>}
      <Grid container
        spacing={3}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
        >
        <Grid item xs={3}>
          <Paper className={classes.img}>
            <img width='75%' src={employeeDetail.pictureLarge} />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <p className={classes.p}>{`${employeeDetail.title} ${employeeDetail.firstName} ${employeeDetail.lastName}`}</p>
            <p className={classes.p}>{`${employeeDetail.address}, ${employeeDetail.city} ${employeeDetail.state}`}</p>
            <p className={classes.p}>{`${employeeDetail.email}`}</p>
            <p className={classes.p}>{`${employeeDetail.phone}`}</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}