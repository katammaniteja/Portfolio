import React from 'react'
import Skillbar from './Skillbar'
import './../styles/resume.css'
import { DiPython,DiJavascript,DiReact,DiVisualstudio,DiMysql } from "react-icons/di";
import {SiDjango,SiPostman} from "react-icons/si"
import {FaGitAlt} from "react-icons/fa"

const languages = [
  {
    icon:<DiPython/>,
    name:'Python',
    level:'80'
  },
  {
    icon:<DiJavascript/>,
    name:'Javascript',
    level:'70'
  },
  {
    icon:<SiDjango/>,
    name:'Django',
    level:'45'
  },
  {
    icon:<DiReact/>,
    name:'Reactjs',
    level:'65'
  },
  {
    icon:<DiMysql/>,
    name:'MySQL',
    level:'40'
  }
]

const tools = [
  {
    icon:<DiVisualstudio/>,
    name:'Visual Studio',
    level:'44'
  },
  {
    icon:<SiPostman/>,
    name:'Postman',
    level:'67'
  },
  {
    icon:<FaGitAlt/>,
    name:'Git',
    level:'59'
  }
]

export default function Resume() {
  return (
    <div className="container resume">
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
                return <Skillbar value={language} />;
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
                return <Skillbar value={tool} />;
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
