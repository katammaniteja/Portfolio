import React from "react";
import { BsGithub } from "react-icons/bs";

export default function ProjectCard({
  project: { name, image, deployed_url, github_url },
}) {
  return (
    <div className="project-card col-md-6 col-lg-4 mb-3">
      <div className="project-card-wrapper">
        <a href={deployed_url} target="_blank" rel="noreferrer">
          <img src={image} alt={name} className="project-card-image" />
        </a>
        <div className="project-card-title">
          <a href={github_url} target="_blank" rel="noreferrer">
            <BsGithub className="project-card-icon" />
          </a>
          {name}
        </div>
      </div>
    </div>
  );
}
