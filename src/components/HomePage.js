import React, { Component } from 'react';
import './HomePage.css'
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="HomePage">
        <div className="one">
          <About />
        </div>
        <div className='two'>
          <Portfolio />
        </div>
        <div className='three'>
          <Contact />
        </div>
      </div>
    );
  }
}

export default HomePage;
