import MyButton from "../commons/MyButton"
import { styled } from "@qinetik/emotion"
import { Anique } from "@qinetik/anique"
import { JSX } from "solid-js"

const CardContainer = styled.div`

    width: calc(100% - 2em);
    margin: 1em auto 0;
    transition: width 0.4s ease-out, height 0.4s ease-out;
    box-sizing: border-box;

    padding: 1.5em;
    border-radius: 0.5em;
    position: relative;

    .dark & {
        background-color: rgba(43, 58, 66, 0.9);
    }

    .light & {
        background-color: rgba(255, 255, 255, .6);
    }

    ${Anique.breakpoints.up("sm")} {
        width: 16em;
        margin: 1em;
    }

`

const CardFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const ProjectCardTitle = styled.h4`
    margin-top: 0;
    margin-bottom: 0.5em;
    font-family: Raleway, sans-serif;
    font-size: 2rem;
`
export const ProjectCardDescription = styled.p`
    margin: 1em 0 0;
`

const PLink = styled.a`
    display: block;

    &:hover > svg {
        color: #fff !important;
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
        font-size: 0.75rem;
    }
`

export const ProjectCardLinkWithIcon = ({ path, icon, text }: { path: string, icon: JSX.Element, text: string }) => {
    return (
        <ProjectCardLink href={path}>
            <CardLinkCenteredRow>{icon}</CardLinkCenteredRow>
        </ProjectCardLink>
    )
}

const TagsContainer = styled.div`
    & p {
        margin: 0.5em 0 0;
    }
`

function ProjectCard(props: ProjectCardProps) {
    return (
        <CardContainer>
            {props.children}
            <CardFooter>
                <TagsContainer>
                    {props.tags.map(tagName => (
                        <p>{tagName}</p>
                    ))}
                </TagsContainer>
            </CardFooter>
        </CardContainer>
    )
}

interface ProjectCardProps {
    tags: string[],
    children?: JSX.Element
}

ProjectCard.defaultProps = {
    tags: []
}

export default ProjectCard
