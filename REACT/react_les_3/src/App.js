import React from "react";
import "./App.css";
import Users from "./components/users/users";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from "./components/posts/posts";

export default function App() {

  return (
      <Router>
          <div className={'app-container'}>
              <div><Link to={'users'}>to users</Link></div>
              <div><Link to={'posts'}>to posts</Link></div>
              <Switch>
                  <Route path={'/users'} render={() => <div><Users/></div>}/>
                  <Route path={'/posts'} render={() => <div><Posts/></div>}/>
              </Switch>
          </div>
      </Router>

  );
}
