import React from 'react'
import Skillbar from './Skillbar'
import './resume.css'
import { motion } from 'framer-motion';
import { languages,tools,education,experience } from './../Data/resume_data';
import ResumeCard from './ResumeCard';


export default function Resume() {
  const resume_variant = {
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
    <motion.div className="container resume"
      variants={resume_variant}
      initial='hidden'
      animate='visible'
    >
      <div className="row">
        <div className="col-lg-6 resume-card mb-3">
          <h4 className="resume-card-heading">Education</h4>
          {
            education.map((data)=>{
              return <ResumeCard key={data.id} data={data}/>
            })
          }
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card-heading">Experience</h4>
          {
            experience.map((data)=>{
              return <ResumeCard key={data.id} data={data}/>
            })
          }
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
