import React, { Component } from 'react';
import jobly from '.././screenshots/jobly.png';

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <a href="https://github.com/ferrisdraouil/react-jobly">
          <img src={jobly} alt="#" style={{ width: '15rem' }} />
        </a>
      </div>
    );
  }
}

export default Portfolio;
