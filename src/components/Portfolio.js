import React, { Component } from 'react';
import './Portfolio.css';
import jobly from '.././screenshots/jobly.png';
import microblog from '.././screenshots/microblog.png';
import Project from './Project';

class Portfolio extends Component {
  render() {
    const { theRelish, jobly, microblog } = this.props;
    return (
      <div className="Portfolio">
        <header className="header">
          <h1>Projects and Experience</h1>
        </header>
        <div className="project">
          <Project
            title={theRelish.title}
            link={theRelish.link}
            img={theRelish.img}
            stack={theRelish.stack}
            description={theRelish.description}
          />
          <hr />
        </div>
        <div className="project">
          <Project
            title={jobly.title}
            link={jobly.link}
            img={jobly.img}
            stack={jobly.stack}
            description={jobly.description}
          />
          <hr />
        </div>
        <div className="project">
          <Project
            title={microblog.title}
            link={microblog.link}
            img={microblog.img}
            stack={microblog.stack}
            description={microblog.description}
          />
        </div>
      </div>
    );
  }
}

Portfolio.defaultProps = {
  theRelish: {
    title: 'The Relish',
    link: 'https://www.therelish.com/',
    img:
      'https://pbs.twimg.com/profile_images/1057718747157262336/yOQeQVzs_400x400.jpg',
    stack: 'React.js, Redux.js, D3, Firebase, HTML5, CSS3',
    description:
      'Engineered the internal Google Firebase connected Conent Management System of a burgeoning Sports Media startup. Queried, parsed, and analyzed company data to generate usable KPIs related to userbase engagement and growth, with accompanying data visualizations.'
  },
  jobly: {
    title: 'Jobly',
    link: 'https://github.com/ferrisdraouil/react-jobly',
    img: jobly,
    stack: 'React.js, Redux.js, PostgreSQL, HTML5, CSS3',
    description:
      'A job board clone that allows companies to post jobs and job seekers to create an account, view jobs, and apply.'
  },
  microblog: {
    title: 'Microblog',
    link: 'https://github.com/ferrisdraouil/microblog',
    img: microblog,
    stack: 'React.js, Redux.js, Node.js, Express.js, PostgreSQL',
    description:
      'A Full-Stack blog clone.  Users have full CRUD on articles, comments, and votes.'
  }
};

export default Portfolio;
