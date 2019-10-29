import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Button, Input, InputLabel } from '@material-ui/core';
import { get, merge } from 'lodash';
import axios from "axios";
const blank = {
  lastName: "",
  coordinateLong: "",
  pictureLarge: "",
  address: "",
  email: "",
  gender: "",
  firstName: "",
  coordinateLat: "",
  state: "",
  city: "",
  pictureThumb: "",
  timezone: "",
  uuid: "",
  phone: "",
  title: ""
};
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
}));
export const Edit = (employee) => {
  const state = get(employee, 'location.state');
  const employeeDetail = state || employee.data || blank;
  const classes = useStyles();
  const [employeeInfo, setEmployeeInfo] = useState(employeeDetail);

  const handleValueChange = (obj) => {
    setEmployeeInfo(merge({}, employeeInfo, obj));
  }

  const handleUpdatePicture = () => {
    axios.get('https://randomuser.me/api/')
      .then((res) => {
        setEmployeeInfo(merge({}, employeeInfo,
          {
            pictureLarge: get(res, 'data.results.0.picture.large'),
            pictureThumb: get(res, 'data.results.0.picture.thumbnail')
          }));
      })
  }

  const handleSave = () => {
    axios.post('https://rlyke4qgza.execute-api.us-east-1.amazonaws.com/dev',
      {table: 'employee-directory', data: employeeInfo})
      .then( (response) => {
        axios.get('https://rlyke4qgza.execute-api.us-east-1.amazonaws.com/dev')
          .then((res) => {
            window.sessionStorage.clear()
            window.sessionStorage.setItem('cache', JSON.stringify(res.data))
          })
      })
      .catch( (error) => {
        console.log(error);
      });

  }
  return (
    <div className={classes.root}>
      <Grid container
        spacing={3}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <Button
            onClick={handleUpdatePicture}
          >
            Generate a new picture
          </Button>
          <Paper className={classes.img}>
            <img width='75%' src={employeeInfo.pictureLarge} />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Grid container
              spacing={2}
              direction="row"
              alignItems="center"
              justify="center"
              style={{ minHeight: '100vh' }}
            >
              <Grid item xs={5}>
                <InputLabel>Title</InputLabel>
                <Input
                  fullwidth="true"
                  value={employeeInfo.title || ''}
                  onChange={(e) => handleValueChange({ title: e.target.value })}
                />
                <InputLabel>First Name</InputLabel>
                <Input
                  fullwidth="true"
                  value={employeeInfo.firstName || ''}
                  onChange={(e) => handleValueChange({ firstName: e.target.value })}
                />
                <InputLabel>Last Name</InputLabel>
                <Input
                  fullwidth="true"
                  value={employeeInfo.lastName || ''}
                  onChange={(e) => handleValueChange({ lastName: e.target.value })}
                />
                <InputLabel>Email</InputLabel>
                <Input
                  fullwidth="true"
                  value={employeeInfo.email || ''}
                  onChange={(e) => handleValueChange({ email: e.target.value })}
                />
              </Grid>
              <Grid item xs={5}>
                <InputLabel>Address</InputLabel>
                <Input
                  fullwidth="true"
                  value={employeeInfo.address || ''}
                  onChange={(e) => handleValueChange({ address: e.target.value })}
                />
                <InputLabel>City</InputLabel>
                <Input
                  fullwidth="true"
                  value={employeeInfo.city || ''}
                  onChange={(e) => handleValueChange({ city: e.target.value })}
                />
                <InputLabel>State</InputLabel>
                <Input
                  fullwidth="true"
                  value={employeeInfo.state || ''}
                  onChange={(e) => handleValueChange({ state: e.target.value })}
                />
                <InputLabel>Phone</InputLabel>
                <Input
                  fullwidth="true"
                  value={employeeInfo.phone || ''}
                  onChange={(e) => handleValueChange({ phone: e.target.value })}
                />
              </Grid>
              <Button
                color="primary"
                onClick={handleSave}
              >
                Save
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}