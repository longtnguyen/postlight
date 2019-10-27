import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Search } from './Search';
import { Location } from './Location';
import { Department } from './Department';
import { Random } from './Random';
import { MainMenu } from './MainMenu';
export const App = () => {
  return (
    <Router>
      <div>
        <header className="App-header">
          <h1 className="App-title">Employee Directory</h1>
            <MainMenu/>
        </header>
        <div>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/location" component={Location} />
          <Route exact path="/department" component={Department} />
          <Route exact path="/random" component={Random} />
        </div>
      </div>
    </Router>
  )
};