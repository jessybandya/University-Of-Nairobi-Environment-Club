import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ContactUs from './pages/ContactUs';
import Events from './pages/Events';
import Home from './pages/Home';
import Memberships from './pages/Membership';
import Test from './Test';
import { ToastContainer, toast } from 'react-toastify';
import SignIn from './components/HomeHeader/SignIn';
import Admin from './pages/Admin';

function App() {
  return (
    <div>
        <Router>
        <ToastContainer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/test' component={Test}/>
            <Route exact path="/events" component={Events} />
            <Route exact path="/memberships" component={Memberships} />
            <Route exact path="/contact-us" component={ContactUs} />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/admin" component={Admin} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
