import React from "react"

import "./project-card.scss"

export default function ProjectCard(props) {
  return (
    <div className="project card">
      {props.children}

      <div className="right-bottom">
        <div className="links"></div>
        <div className="tags">
          {props.tags.forEach(tagName => (
            <span>{tagName}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProjectCardButton(props) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <button className="button">{props.name}</button>
    </a>
  )
}
