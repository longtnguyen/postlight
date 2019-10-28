import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';
import { Search } from './Search';
import { Browse } from './Browse';
import Location from './Location';
import { Employee } from './shared/Employee';
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
                  <Tab label="Search" value="/" component={Link} to="/" />
                  <Tab label="Browse" value="/browse" component={Link} to="/browse" />
                  <Tab label="Location" value="/location" component={Link} to="/location" />
                  <Tab label="Random" value="/random" component={Link} to="/random" />
                  <Tab label="Employee Detail" value="/employee" component={Link} to="/employee" />
                </Tabs>
                <Switch>
                  <Route exact path="/" component={Search} />
                  <Route exact path="/browse" component={Browse} />
                  <Route exact path="/location" component={Location} />
                  <Route exact path="/random" component={Random} />
                  <Route exact path="/employee" component={Employee} />
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