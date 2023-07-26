import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/andy-loredo/">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/ndy-lopez/">
          <GitHubIcon />
        </a>
      </div>
      <p> &copy; 2023 aloredotech.com </p>
    </div>
  );
}

export default Footer;
