import React, { Component } from 'react';
import './Project.css'

class Project extends Component {
  render() {
    return (
      <div className="Project">
        <div className="project-photo">
          <h2 className="project-title">{this.props.title}</h2>
          <a href={this.props.projectLink}>
            <img
              src={this.props.img}
              alt="#"
              style={{ width: '15rem' }}
            />
          </a>
        </div>
        <ul className="project-details">
          <li id='project-stack'>
            <b>Stack:</b> {this.props.stack}
          </li>
          <li id='project-description'>
            <b>Description:</b> {this.props.description}
          </li>
        </ul>
      </div>
    );
  }
}

export default Project;
