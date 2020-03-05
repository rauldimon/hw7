import React from 'react';
import './App.css';
import {Router,Link,Switch,Redirect,Route} from 'react-router-dom'
import history from "./history";
import Profile from './Profile';
import Tor from "./Img/tor.png";
import Sasha from "./Img/sasha.png";
import Yoda from "./Img/yoda.png";


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <header className="App-header">
            <Link to="/profile1">Yoda</Link>
            <Link to="/profile2">Sasha</Link>
            <Link to="/profile3">Tor</Link>
        </header>
        <Switch>
					<Redirect exact from='/' to='/profile1' />
					<Route exact path="/profile1" component={() => <Profile name="Yoda" photo={Yoda} />} />
					<Route exact path="/profile2" component={() => <Profile name="Sasha" photo={Sasha} />} />
					<Route exact path="/profile3" component={() => <Profile name="Tor" photo={Tor} />} />
				</Switch>
      </Router>
    </div>
 );
}

export default App;
