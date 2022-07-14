import React from 'react'
import { useState } from 'react'
import './navbar.css'

export default function Navbar() {
    const [active, setactive] = useState('About');

  return (
    <div className='navbar'>
      <div className="navbar-active">
        {active}
      </div>
      <div className="navbar-items">
        { active !== 'About' && <div className="navbar-item" onClick={()=>setactive('About')}>About</div> }
        { active !== 'Resume' && <div className="navbar-item" onClick={()=>setactive('Resume')}>Resume</div> }
        { active !== 'Projects' && <div className="navbar-item" onClick={()=>setactive('Projects')}>Projects</div> }
      </div>
    </div>
  )
}
