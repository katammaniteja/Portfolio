import React from 'react'
import MyPic from './../assets/images/MyPic.jpeg'
import './sidebar.css'
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import {GoLocation} from "react-icons/go"
import { IconContext } from "react-icons";
import Resume from './../assets/Resume.pdf'

export default function Sidebar() {
    const handleEmail = ()=>{
        window.open('mailto:katammaniteja@gmail.com');
    }

  return (
    <div>
      <img src={MyPic} alt="avatar" className='sidebar-avatar'/>
      <div className="sidebar-name">Maniteja <span>Katam</span></div>
      <div className="sidebar-item sidebar-title">Web Developer</div>
      <a href={Resume} download="Resume.pdf">
        <div className="sidebar-item sidebar-resume">Download Resume</div>
      </a>
      <div className="sidebar-social-icons my-2">
        <a href="https://www.facebook.com/maniteja.katam/" target='__blank' className='me-3'>
            <IconContext.Provider value={{ className: "sidebar-icon" }}>
                <BsFacebook/>
            </IconContext.Provider>
        </a>
        <a href="https://www.instagram.com/___maniteja_/" target='__blank'>
            <IconContext.Provider value={{ className: "sidebar-icon" }}>
                <BsInstagram/>
            </IconContext.Provider>
        </a>
      </div>
      <div className="sidebar-contact">
        <div className="sidebar-item sidebar-github" target='__blank'>
            <a href="https://github.com/katammaniteja">
                <IconContext.Provider value={{ className: "sidebar-icon me-2" }}>
                    <BsGithub/>
                </IconContext.Provider> Github
            </a>
        </div>
        <div className="sidebar-location">
            <IconContext.Provider value={{ className: "sidebar-icon me-2" }}>
                <GoLocation/>
            </IconContext.Provider>Rajahmundry, India
        </div>
        <div className="sidebar-item">katammaniteja@gmail.com</div>
        <div className="sidebar-item">+916300438935</div>
      </div>
      <div className="sidebar-item sidebar-email" onClick={handleEmail}>Email Me</div>
    </div>
  )
}