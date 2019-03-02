import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <Grid>
          <Row className="show-grid" style={{ height: '100%' }}>
            <Col md={4} className="contactLink">
              <a href="https://www.github.com/ferrisdraouil">
                <i class="fab fa-github fa-5x contactIcon" />
              </a>
            </Col>
            <Col md={4} className="contactLink">
              <a href="https://angel.co/ferris-draouil">
                <i class="fab fa-angellist fa-5x contactIcon" />
              </a>
            </Col>
            <Col md={4} className="contactLink">
              <a href="https://www.linkedin.com/in/fdraouil">
                <i class="fab fa-linkedin-in fa-5x contactIcon" />
              </a>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Contact;
