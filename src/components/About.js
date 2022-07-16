import React from 'react'
import Skillcard from './Skillcard'
import './../styles/about.css'
import algo from './../assets/images/algo.svg'
import api from './../assets/images/api.svg'
import backend from './../assets/images/backend.svg'
import frontend from './../assets/images/frontend.svg'

const skills = [
  {
    icon:frontend,
    title: "Frontend Development" ,
    about: "I can build beautiful and scalable single page applications using HTML, CSS and Reactjs"
  },
  {
    icon:backend,
    title: "Backend Development" ,
    about: "I can build server-side appications using django and can handle relational databases like MySQL etc."
  },
  {
    icon:api,
    title: "API Development" ,
    about: "I can develop robust REST APIs using Django REST Framework(DRF)."
  },
  {
    icon:algo,
    title: "Competitive Coder" ,
    about: "A quite regular problem solver in Leetcode and GeeksforGeeks."
  }
]

export default function About() {
  return (
    <div className='about'>
      <h6 className="about-intro">
        I'm currently pursuing B.Tech in Computer Science and Engineering(3rd year) from National Institute of Technology, Agartala. I'm currently working as a backend developer intern in Shiksha Sopan.
      </h6>
      <div className="container about-container">
        <h6 className="about-heading">What I offer</h6>
        <div className="row">
          {
            skills.map((skill)=>{
              return <Skillcard skill={skill} />
            })
          }
        </div>
      </div>
    </div>
  )
}