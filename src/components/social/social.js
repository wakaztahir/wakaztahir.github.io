import * as React from "react";
import { IconButton } from "@mui/material";
import FacebookIcon from "../icons/FacebookIcon";
import TwitterIcon from "../icons/TwitterIcon";
import StackoverflowIcon from "../icons/StackoverflowIcon";
import GithubIcon from "../icons/GithubIcon";
import styled from "styled-components";
const Section = styled.section `
  display: block;
  margin-top: 6rem;
  @media screen and (min-width: 720px) {
    display: none;
  }
`;
const SocialLink = styled.a `
  margin: 0 1em;
`;
export default function Social() {
    return (React.createElement(Section, null,
        React.createElement(SocialLink, { href: "https://facebook.com/wakaztahir", target: "_blank", rel: "noreferrer" },
            React.createElement(IconButton, { size: "large" },
                React.createElement(FacebookIcon, null))),
        React.createElement(SocialLink, { href: "https://twitter.com/wakaztahir", target: "_blank", rel: "noreferrer" },
            React.createElement(TwitterIcon, null)),
        React.createElement("a", { href: "https://stackoverflow.com/users/3343503/waqas", target: "_blank", rel: "noreferrer" },
            React.createElement(StackoverflowIcon, null)),
        React.createElement(SocialLink, { href: "https://github.com/wakaztahir", target: "_blank", rel: "noreferrer" },
            React.createElement(GithubIcon, null))));
}
