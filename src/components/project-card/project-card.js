import * as React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import MyButton from "../commons/MyButton";
const CardContainer = styled.div `
  width: calc(100% - 2rem);
  margin: 1rem auto 0;
  transition: width 0.4s ease-out, height 0.4s ease-out;
  box-sizing: border-box;
  
  background: ${props => props.theme.palette.background.translucent};
  padding: 1rem 1rem 1rem;
  border-radius: 0.5em;
  position: relative;

  ${props => props.theme.breakpoints.up("sm")} {
    width: 16rem;
    margin: 1rem;
  }
`;
const CardFooter = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1em;
`;
export const ProjectCardTitle = styled((props) => (React.createElement(Typography, { variant: "h4", color: "textPrimary", ...props }))) `
  margin-top: 0.5em;
`;
export const ProjectCardDescription = styled((props) => (React.createElement(Typography, { variant: "body1", color: "textPrimary", ...props }))) `
  margin-top: 1em;
`;
const PLink = styled.a `
  display: block;
  margin-top: 1em;
  
  &:hover > svg {
    color : #fff !important;
  }
`;
export const ProjectCardLink = styled((props) => (React.createElement(PLink, { href: props.href, target: "_blank" },
    React.createElement(MyButton, null, props.children)))) `
`;
const CardLinkCenteredRow = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  & span {
    font-size : 0.75rem;
  }
  
`;
export const ProjectCardLinkWithIcon = ({ path, icon, text }) => {
    return (React.createElement(ProjectCardLink, { href: path },
        React.createElement(CardLinkCenteredRow, null, icon)));
};
const TagsContainer = styled.div `

`;
function ProjectCard(props) {
    return (React.createElement(CardContainer, null,
        props.children,
        React.createElement(CardFooter, null,
            React.createElement(TagsContainer, null, props.tags.map(tagName => (React.createElement(Typography, { key: tagName, variant: "caption", color: "textSecondary" }, tagName)))))));
}
ProjectCard.defaultProps = {
    tags: []
};
export default ProjectCard;
