import React from 'react'
import { IconContext } from "react-icons";

export default function Skillbar({ value:{icon, name, level}}) {
    const bar_width = `${level}%`;
  return (
    <div className='bar'>
      <div className="bar-wrapper" style={{'width':bar_width}}>
        <span className="bar-name">
            <IconContext.Provider value={{ className: "bar-icon" }}>
                {icon}
            </IconContext.Provider>{name}
        </span>
      </div>
    </div>
  )
}
