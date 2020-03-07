import React from 'react';
import ArtPhotos from './components/ArtPhotos';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Home from './components/Home';
import DigitalArts from './components/DigitalArts';
import Photography from './components/Photography';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Router>
          <nav className="navbar">
            {/* <Link to="/aboutme" className="left-nav-link nav-link"> */}
              {/* About Me */}
              {/* <img src={'./home.png'} alt="homelogo" /> */}
            {/* </Link> */}
            <div className="right-nav-link">
              {/* Below url should be /aboutme/digital-arts */}
                <Link to="/aboutme/digital-arts" className="nav-link">Sketches</Link>
              {/* <Link to="/aboutme/photography" className="nav-link">Photography</Link> */}
            </div>
          </nav>
          {/* <Route exact path="/aboutme" component={Home} /> */}
          <Route exact path="/" render={() => {
            return (
              <Redirect to='/aboutme/digital-arts' />
            )
          }} />
          <Route exact path="/aboutme" render={() => {
            return (
              <Redirect to='/aboutme/digital-arts' />
            )
          }}/>
          {/* <Route exact path="/aboutme" component={DigitalArts} /> <- Bug */}
          
          {/* <- Reloading url /aboutme/digital-arts causing 404 on github due to server side rendering, so introduced above bug intentionally */}
          <Route exact path="/aboutme/digital-arts" component={DigitalArts} />
          <Route exact path="/aboutme/photography" component={Photography} />
        </Router>
      </div>
    );
  }
}

export default App;
