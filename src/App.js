import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <NavBar /> */}
        <HomePage />
        {/* <Switch>
          <Route exact path="/contact" render={() => <Contact />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/portfolio" render={() => <Portfolio />} />
          <Route exact path="/" render={() => <HomePage />} />
        </Switch> */}
      </div>
    );
  }
}

export default App;
