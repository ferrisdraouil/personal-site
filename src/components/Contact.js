import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="contactLink github" id='github'>
          <a href="https://www.github.com/ferrisdraouil">
            <i className="fab fa-github fa-5x contactIcon" />
          </a>
        </div>
        <div className="contactLink angellist">
          <a href="https://angel.co/ferris-draouil">
            <i className="fab fa-angellist fa-5x contactIcon" />
          </a>
        </div>
        <div className="contactLink linkedin">
          <a href="https://www.linkedin.com/in/fdraouil">
            <i className="fab fa-linkedin-in fa-5x contactIcon" />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
