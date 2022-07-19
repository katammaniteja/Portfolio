import React from 'react'

export default function ResumeCard({data:{title,name,details}}) {
  return (
    <div className="resume-card-body">
        <h5 className="resume-card-title">{title}</h5>
        <p className="resume-card-name">{name}</p>
        <p className="resume-card-details">{details}</p>
    </div>
  )
}
