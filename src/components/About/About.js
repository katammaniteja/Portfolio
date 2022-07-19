import React from 'react'
import Skillcard from './Skillcard'
import './about.css'
import { motion } from 'framer-motion';
import skills from './../Data/about_data'

export default function About() {
  const about_variant = {
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
    <motion.div className='about'
      variants={about_variant}
      initial='hidden'
      animate='visible'
    >
      <h6 className="about-intro">
        I'm currently pursuing B.Tech in Computer Science and Engineering(3rd year) from National Institute of Technology, Agartala. I'm currently working as a backend developer intern in Shiksha Sopan.
      </h6>
      <div className="container about-container">
        <h6 className="about-heading">What I offer</h6>
        <div className="row">
          {
            skills.map((skill)=>{
              return <Skillcard key={skill.id} skill={skill} />
            })
          }
        </div>
      </div>
    </motion.div>
  )
}