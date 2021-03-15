import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './components/Home/Home';
import Nomatch from './components/NoMatch/Nomatch';
import FriendDetails from './components/FriendDetails/FriendDetails';

function App() {

  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/friend/:FriendId'>
          <FriendDetails/>
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='*'>
          <Nomatch></Nomatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
