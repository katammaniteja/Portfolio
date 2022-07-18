import React from 'react'
import { BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function ProjectCard({project:{name,image,deployed_url,github_url}}) {
  return (
    <div className='project-card col-md-6 col-lg-4 mb-3'>
      <div className="project-card-wrapper">
        <a href={deployed_url} target='_blank'>
            <img src={image} alt={name} className='project-card-image'/>
        </a>
        <div className="project-card-title" target='_blank'>
            <a href={github_url}>
                <IconContext.Provider value={{ className: "project-card-icon" }}>
                    <BsGithub/>
                </IconContext.Provider>
            </a>
            {name}
        </div>
      </div>
    </div>
  )
}
