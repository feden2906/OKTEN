import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/navigation/nav.component";
import Characters from "./components/characters/characters.component";

export default function App() {


  return (
    <Router>
      <div>
        <Nav/>
          <Switch>
              <Route path={'/characters'} exact={true} render={() => <Characters/>} />
          </Switch>
      </div>
    </Router>
  );
}
