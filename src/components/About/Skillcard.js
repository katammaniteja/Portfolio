import React from 'react'

export default function Skillcard({skill}) {
    return(
        <div className="col-lg-6">
            <div className="skill-card">
                <img src={skill.icon} alt="" className='skill-card-icon my-auto'/>
                <div className="skill-card-body">
                    <h6 className="skill-card-title">
                    {skill.title}
                    </h6>
                    <p className='skill-card-content'>{skill.about}</p>
                </div>
            </div>
        </div>
    )
}
