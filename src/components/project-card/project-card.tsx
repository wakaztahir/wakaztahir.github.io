import * as React from "react"
import { FunctionComponent } from "react"

import styled from "styled-components"
import { Typography } from "@material-ui/core"
import MyButton from "../commons/MyButton"

const CardContainer = styled.div`
  width: calc(100% - 2rem);
  margin: 1rem auto 0;
  transition: width 0.4s ease-out, height 0.4s ease-out;
  box-sizing: border-box;


  background: ${props => props.theme.palette.type === "dark" ? `rgba(0, 0, 0, .6)` : `rgba(255, 255, 255, .6)`};
  padding: 1rem 1rem 1rem;
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
  align-items: flex-start;
  margin-top: 1em;
`

export const ProjectCardTitle = styled((props) => (<Typography variant={"h4"} color={"textPrimary"} {...props} />))`
  margin-top: 0.5em;
`
export const ProjectCardDescription = styled((props) => (
  <Typography variant={"body1"} color={"textPrimary"} {...props} />))`
  margin-top: 1em;
`

const PLink = styled.a`
  display: block;
  margin-top: 1em;
`

export const ProjectCardLink = styled((props: { href: string, children: any }) => (
  <PLink href={props.href} target={"_blank"}><MyButton>{props.children}</MyButton></PLink>))`
`

export const ProjectIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 1em;
`

const TagsContainer = styled.div`

`

const ProjectCard: FunctionComponent<ProjectCardProps> = (props) => {
  return (
    <CardContainer>
      {props.children}
      <CardFooter>
        <TagsContainer>
          {props.tags.map(tagName => (
            <Typography key={tagName} variant={"caption"} color={"textSecondary"}>{tagName}</Typography>
          ))}
        </TagsContainer>
      </CardFooter>
    </CardContainer>
  )
}

interface ProjectCardProps {
  tags: string[]
}

ProjectCard.defaultProps = {
  tags: []
}

export default ProjectCard
