import MyButton from "../commons/MyButton"
import { styled } from "@qinetik/emotion"
import { Anique } from "@qinetik/anique"
import { JSX } from "solid-js"

const CardContainer = styled.div`
  width: calc(100% - 2rem);
  margin: 1rem auto 0;
  transition: width 0.4s ease-out, height 0.4s ease-out;
  box-sizing: border-box;
  
  background: rgba(0,0,0,.7);
  padding: 1rem 1rem 1rem;
  border-radius: 0.5em;
  position: relative;

  ${Anique.breakpoints.up("sm")} {
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

export const ProjectCardTitle = styled((props) => (<h4 color={"textPrimary"} {...props} />))`
  margin-top: 0.5em;
`
export const ProjectCardDescription = styled((props) => (
  <p color={"textPrimary"} {...props} />))`
  margin-top: 1em;
`

const PLink = styled.a`
  display: block;
  margin-top: 1em;
  
  &:hover > svg {
    color : #fff !important;
  }
`

export const ProjectCardLink = styled((props: { href: string, children: any }) => (
  <PLink href={props.href} target={"_blank"}><MyButton>{props.children}</MyButton></PLink>))`
`

const CardLinkCenteredRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  & span {
    font-size : 0.75rem;
  }
  
`

export const ProjectCardLinkWithIcon = ({ path , icon ,text } : { path : string,icon : JSX.Element,text : string }) => {
  return (
    <ProjectCardLink href={path}>
      <CardLinkCenteredRow>{icon}</CardLinkCenteredRow>
    </ProjectCardLink>
  )
}

const TagsContainer = styled.div`

`

function ProjectCard(props : ProjectCardProps){
  return (
    <CardContainer>
      {props.children}
      <CardFooter>
        <TagsContainer>
          {props.tags.map(tagName => (
            <p color={"textSecondary"}>{tagName}</p>
          ))}
        </TagsContainer>
      </CardFooter>
    </CardContainer>
  )
}

interface ProjectCardProps {
  tags: string[],
  children ?: JSX.Element
}

ProjectCard.defaultProps = {
  tags: []
}

export default ProjectCard
