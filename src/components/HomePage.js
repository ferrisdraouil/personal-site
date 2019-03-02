import React, { Component } from 'react';
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
      <div
        className="HomePage"
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between'
        }}
      >
        <div
          style={{
            marginLeft: '20%',
            marginRight: '20%',
            marginTop: '10%',
            marginBottom: '10%'
          }}
        >
          <About />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '10%',
            marginBottom: '10%'
          }}
        >
          <Portfolio />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '10%',
            marginBottom: '10%'
          }}
        >
          <Contact />
        </div>

        {/* <div>
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div> */}
      </div>
    );
  }
}

export default HomePage;
