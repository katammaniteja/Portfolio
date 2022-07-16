import React from 'react'
import Skillbar from './Skillbar'
import './../styles/resume.css'
import { motion } from 'framer-motion';
import { languages,tools } from './data/ResumeData';


export default function Resume() {
  const resume_variant = {
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        delay:0.2,duration:0.6
      }
    }
  }

  return (
    <motion.div className="container resume"
      variants={resume_variant}
      initial='hidden'
      animate='visible'
    >
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card-heading">Education</h4>
          <div className="resume-card-body">
            <h5 className="resume-card-title">Computer Science Engineering</h5>
            <p className="resume-card-name">Lorem ipsum dolor sit.</p>
            <p className="resume-card-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nesciunt.</p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card-heading">Experience</h4>
          <div className="resume-card-body">
            <h5 className="resume-card-title">Backend Developer</h5>
            <p className="resume-card-name">Lorem ipsum dolor sit.</p>
            <p className="resume-card-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nesciunt.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language-heading">
            Languages and Frameworks
          </h5>
          <div className="resume-language-body">
            {
              languages.map((language)=>{
                return <Skillbar key={language.id} value={language} />;
              })
            }
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language-heading">
            Tools and Softwares
          </h5>
          <div className="resume-language-body">
            {
              tools.map((tool)=>{
                return <Skillbar key={tool.id} value={tool} />;
              })
            }
          </div>
        </div>
      </div>
    </motion.div>
  )
}
