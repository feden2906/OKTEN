import './App.css';
import Home from "./home/Home";
import Nav from "./navigation/Nav";
import Counter from "./manager_component/Counter";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
      <Router>
          <div className={'page-wrapper'}>
              <div>
                  <Nav/>
              </div>
              <Switch>
                  <Route exact path={'/home'} component={Home}/>
                  <Route exact={true} path={'/counter'} render={() => <Counter/>}/>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
