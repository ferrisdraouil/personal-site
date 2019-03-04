import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
  render() {
    return (
      <div className="Project media my-5">
        <a href={this.props.link} className='image-link'>
          <img
            className="align-self-start"
            src={this.props.img}
            alt="#"
            style={{ width: '15rem' }}
          />
        </a>
        <div className="media-body">
          <h2 className="project-title mt-0 mb-4">{this.props.title}</h2>
          <p className='project-details'>
            <b>Stack:</b> {this.props.stack}
          </p>
          <p className='project-details'>
            <b>Description:</b> {this.props.description}
          </p>
        </div>
      </div>
    );
  }
}

export default Project;
