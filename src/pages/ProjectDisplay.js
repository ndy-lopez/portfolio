import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <div className="title"><h1>{project.name}</h1></div>
      <img src={project.image} alt="Project ScreenShot"></img>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <p style={{ fontSize: '30px' }}>{project.description}</p>
      <a href={project.gh} target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
    </div>
  );
}

export default ProjectDisplay;
