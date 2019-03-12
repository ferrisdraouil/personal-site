import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="contactLink github" id="github">
          <a href="https://www.github.com/ferrisdraouil">
            <i className="fab fa-github fa-4x contactIcon" />
          </a>
        </div>
        <div className="contactLink angellist">
          <a href="https://angel.co/ferris-draouil">
            <i className="fab fa-angellist fa-4x contactIcon" />
          </a>
        </div>
        <div className="contactLink linkedin">
          <a href="https://www.linkedin.com/in/fdraouil">
            <i className="fab fa-linkedin-in fa-4x contactIcon" />
          </a>
        </div>
        <div className="contactLink resume">
          <a href="https://docs.google.com/document/d/1-PJd_vohRpTBhZPoub2EPzkVHy7aYV9AOhrSPvwZTm4/edit?usp=sharing">
            <i className="far fa-file fa-4x contactIcon" />{' '}
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
