import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './../styles/navbar.css'

export default function Navbar() {
    const [active, setactive] = useState('About');

    useEffect(()=>{
        const currUrl = window.location.href;
        if(currUrl.endsWith('/')) setactive('About');
        else if(currUrl.endsWith('/resume')) setactive('Resume');
        else if(currUrl.endsWith('/projects')) setactive('Projects');
    },[active])

  return (
    <div className='navbar'>
      <div className="navbar-active">
        {active}
      </div>
      <div className="navbar-items">
        { active !== 'About' && <Link to="/"><div className="navbar-item" onClick={()=>setactive('About')}>About</div></Link> }
        { active !== 'Resume' && <Link to="/resume"><div className="navbar-item" onClick={()=>setactive('Resume')}>Resume</div></Link> }
        { active !== 'Projects' && <Link to="/projects"><div className="navbar-item" onClick={()=>setactive('Projects')}>Projects</div></Link> }
      </div>
    </div>
  )
}
