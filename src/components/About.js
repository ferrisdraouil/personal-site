import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="About">
        <h1
          className="display-1"
          style={{
            fontSize: '50px',
            color: 'yellow',
            fontFamily: 'Arimo',
            font: 'sans-serif'
          }}
        >
          Hi, I'm Ferris!
        </h1>
        <p
          className="display-4"
          style={{
            fontSize: '32px',
            color: 'yellow',
            fontFamily: 'Arimo',
            font: 'sans-serif'
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          eaque ut rem natus veniam amet neque magnam ducimus? Nisi cum
          perferendis soluta inventore deserunt voluptates officia repellendus,
          autem voluptatibus nemo.
        </p>
      </div>
    );
  }
}

export default About;
