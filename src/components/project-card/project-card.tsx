import * as React from "react"

import styled from "styled-components"

const CardContainer = styled.div`
  width: calc(100% - 2rem);
  margin: 1rem auto 0;
  transition: width 0.4s ease-out, height 0.4s ease-out;
  box-sizing: border-box;


  background: rgba(0, 0, 0, .6);
  padding: 1rem 1rem 5rem;
  border-radius: 5px;
  position: relative;

  ${props => props.theme.breakpoints.up("sm")} {
    width: 16rem;
    margin: 1rem;
  }
`

const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 1em;
  margin-bottom: 1em;
`

export default function ProjectCard(props) {
  return (
    <CardContainer>
      {props.children}

      <CardFooter>
        <div>
          {props.tags.forEach(tagName => (
            <span>{tagName}</span>
          ))}
        </div>
      </CardFooter>
    </CardContainer>
  )
}

export function ProjectCardButton(props) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <button>{props.name}</button>
    </a>
  )
}
