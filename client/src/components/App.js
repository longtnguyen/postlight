import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';
import { Browse } from './Browse';
import Location from './Location';
import { Employee } from './shared/Employee';
import { Edit } from './shared/Edit';
import { Random } from './Random';
export const App = () => {
  return (
    <Router>
      <div>
        <header className="App-header">
          <Route
            path="/"
            render={({ location }) => (
              <>
                <Tabs value={location.pathname}>
                  <Tab label="Browse" value="/" component={Link} to="/" />
                  <Tab label="Location" value="/location" component={Link} to="/location" />
                  <Tab label="Random" value="/random" component={Link} to="/random" />
                  <Tab label="Employee Detail" value="/employee" component={Link} to="/employee" />
                  <Tab label="Create/Edit" value="/edit" component={Link} to="/edit" />
                </Tabs>
                <Switch>
                  <Route exact path="/" component={Browse} />
                  <Route exact path="/location" component={Location} />
                  <Route exact path="/random" component={Random} />
                  <Route exact path="/employee" component={Employee} />
                  <Route exact path="/edit" component={Edit} />
                  <Redirect from="*" to="/" />
                </Switch>
              </>
            )}
          />
        </header>
      </div>
    </Router>
  )
};