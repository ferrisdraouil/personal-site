import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1 className="title">Hi, I'm Ferris!</h1>
        <div className="body">
          <p>
            I'm a Full-Stack Web Developer who loves solving complex problems,
            creating amazing projects, and Burritos.
          </p>
          <p>Take a look at some of my work, or reach out and say hello!</p>
        </div>
        <hr />
      </div>
    );
  }
}

export default About;
