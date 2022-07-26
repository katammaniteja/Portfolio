import React from 'react'
import MyPic from './../../assets/images/MyPic.jpeg'
import './sidebar.css'
import { BsFacebook, BsInstagram, BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

export default function Sidebar() {
    const handleEmail = ()=>{
        window.open('mailto:katammaniteja@gmail.com');
    }

  return (
    <div>
      <img src={MyPic} alt="avatar" className='sidebar-avatar'/>
      <div className="sidebar-name">Maniteja <span>Katam</span></div>
      <div className="sidebar-item sidebar-title">Web Developer</div>
      <a href="https://drive.google.com/file/d/11iLxB2i00wkhZHh70h8V3Tm6CXxtrrfr/view?usp=sharing" target='_blank' rel="noreferrer" download="Resume.pdf">
        <div className="sidebar-item sidebar-resume">Download Resume</div>
      </a>
      <div className="sidebar-social-icons my-3">
        <a href="https://www.facebook.com/maniteja.katam/" target='_blank' rel="noreferrer"><BsFacebook className="sidebar-icon me-3"/></a>
        <a href="https://www.instagram.com/___maniteja_/" target='_blank' rel="noreferrer"><BsInstagram className="sidebar-icon me-3"/></a>
        <a href="https://twitter.com/Manitej45367298" target='_blank' rel="noreferrer"><BsTwitter className="sidebar-icon me-3"/></a>
        <a href="https://www.linkedin.com/in/mani-teja-aaa04721a/" target='_blank' rel="noreferrer"><BsLinkedin className="sidebar-icon me-3"/></a>
        <a href="https://github.com/katammaniteja" target='_blank' rel="noreferrer"><BsGithub className="sidebar-icon"/></a>
      </div>
      <div className="sidebar-contact">
        <div className="sidebar-location">
            Rajahmundry(AP), India
        </div>
        <div className=''>katammaniteja@gmail.com</div>
        <div className=''>+916300438935</div>
      </div>
      <div className="sidebar-item sidebar-email" onClick={handleEmail}>Email Me</div>
    </div>
  )
}