import * as React from "react"

import * as css from "./project-card.module.scss"

export default function ProjectCard(props) {
  return (
    <div className={`${css.project} ${css.card}`}>
      {props.children}

      <div className={`${css.rightBottom}`}>
        <div className={`${css.links}`}></div>
        <div className={`${css.tags}`}>
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
      <button>{props.name}</button>
    </a>
  )
}
