import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <Grid>
          <Row className="show-grid" style={{ height: '100%' }}>
            <Col md={4} lgOffset={3}>
              <a href="https://www.github.com/ferrisdraouil">
                <i
                  class="fab fa-github fa-3x"
                  style={{ color: 'yellow', width: '30px' }}
                />
              </a>
            </Col>
            <Col md={4}>
              <a href="https://www.angel.co">
                <i
                  class="fab fa-angellist fa-3x"
                  style={{ color: 'yellow', width: '30px' }}
                />
              </a>
            </Col>
            <Col md={4}>
              <a href="https://www.linkedin.com">
                <i
                  class="fab fa-linkedin-in fa-3x"
                  style={{ color: 'yellow', width: '30px' }}
                />
              </a>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Contact;
