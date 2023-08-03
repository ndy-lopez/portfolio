import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Andy</h2>
        <div className="prompt">
          <p>A Full Stack Developer with a passion of learning and creating.</p>
          <a href="https://www.linkedin.com/in/andy-loredo/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
          <a href="https://github.com/ndy-lopez/" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
          <a href="mailto:ndy.loredo@gmail.com" target="_blank" rel="noopener noreferrer"><EmailIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, Sass, NPM, BootStrap, MaterialUI, Yarn, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, Rails, ExpressJS, PostgreSQL, MySQL</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Ruby</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
