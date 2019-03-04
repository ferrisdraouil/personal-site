import React, { Component } from 'react';
import './Portfolio.css';
import jobly from '.././screenshots/jobly.png';

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <header className="header">
          <h1>Projects and Experience</h1>
        </header>
        <div className="jobly-photo">
          <h2 className='jobly-title'>Jobly</h2>
          <a href="https://github.com/ferrisdraouil/react-jobly">
            <img src={jobly} alt="#" style={{ width: '15rem' }} />
          </a>
        </div>
        <ul className='jobly-details'>
          <li>Stack: React.js, Redux.js, PostgresQL</li>
          <li>A</li>
          <li>A</li>
        </ul>
      </div>
    );
  }
}

export default Portfolio;
