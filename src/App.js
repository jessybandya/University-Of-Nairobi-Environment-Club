import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Events from './pages/Events';
import Home from './pages/Home';
import Memberships from './pages/Membership';
import Test from './Test';

function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/test' component={Test}/>
            <Route exact path="/events" component={Events} />
            <Route exact path="/memberships" component={Memberships} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
