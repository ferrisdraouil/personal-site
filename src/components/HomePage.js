import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="HomePage"
        style={{ color: 'yellow', width: '30px', alignItems: 'center' }}
      >
        <div>
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
