import React from 'react';
import ArtPhotos from './components/ArtPhotos';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
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
            <Link to="/" className="left-nav-link nav-link">Home</Link>
            <div className="right-nav-link">
              <Link to="/digital-arts" className="nav-link">Digital Art Works</Link>
              <Link to="/photography" className="nav-link">Photography</Link>
            </div>
          </nav>
          <Route exact path="/" component={Home} />
          <Route exact path="/digital-arts" component={DigitalArts} />
          <Route exact path="/photography" component={Photography} />
        </Router>
      </div>
    );
  }
}

export default App;
