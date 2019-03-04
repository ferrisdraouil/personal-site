import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1 className="title">Hi, I'm Ferris!</h1>
        <div className="body">
          <p className='blurb'>
            I'm a Full-Stack Web Developer who loves solving complex problems,
            creating amazing projects, and&nbsp;Burritos.
          </p>
          <p className='blurb'>Take a look at some of my work, or reach out and say&nbsp;hello!</p>
        </div>
        <hr />
      </div>
    );
  }
}

export default About;
