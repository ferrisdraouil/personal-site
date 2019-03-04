import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1 className="title">Hi, I'm Ferris!</h1>
        <p className="body">
          <p>I am a Full-Stack Web Developer.</p>
          <p>Take a look at some of my work, or reach out and say hello!</p>
        </p>
        <hr/>
      </div>
    );
  }
}

export default About;
