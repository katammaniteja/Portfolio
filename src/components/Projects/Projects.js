import React from 'react'
import data_projects from './../data/projects_data'
import ProjectCard from './ProjectCard';
import './projects.css'
import { motion } from 'framer-motion';

export default function Projects() {
  const projects_variant = {
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        delay:0.1,duration:0.9
      }
    }
  }

  return (
    <motion.div className="container projects"
      variants={projects_variant}
      initial='hidden'
      animate='visible'
    >
      <div className="row">
        {
          data_projects.map((project)=>{
            return <ProjectCard key={project.name} project={project}/>;
          })
        }
      </div>
    </motion.div>
  )
}
