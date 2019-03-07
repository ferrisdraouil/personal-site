import React, { Component } from 'react';
import './HomePage.css';
import axios from 'axios'
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

class HomePage extends Component {
  componentDidMount() {
    axios.get('https://microblog-ferris-frontend.herokuapp.com/')
    axios.get('https://jobly-frontend.herokuapp.com/')
  }
  render() {
    return (
      <div id="HomePage">
        <div className="one">
          <About />
        </div>
        <div className="two">
          <Portfolio />
        </div>
        <div className="three">
          <Contact />
        </div>
      </div>
    );
  }
}

export default HomePage;
