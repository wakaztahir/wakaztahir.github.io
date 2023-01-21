import * as React from "react";
import { IconButton, Typography } from "@mui/material";
import BaseSidebar from "./base-sidebar";
import styled from "styled-components";
import { SiteMenu } from "../header/main-header";
import FacebookIcon from "../icons/FacebookIcon";
import TwitterIcon from "../icons/TwitterIcon";
import StackoverflowIcon from "../icons/StackoverflowIcon";
import GithubIcon from "../icons/GithubIcon";
const SideNav = styled.nav `
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;

  & > * {
    margin-top: 0.5em;
  }

`;
const SideSeparator = styled.hr `
  width: 80%;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const SideSocial = styled.section `
  margin-top: 2em;
`;
const SideFooter = styled.section `
  margin-top: 1em;
`;
export default function MainSidebar() {
    return (React.createElement(BaseSidebar, null,
        React.createElement(Typography, { variant: "h2", align: "center", color: "textPrimary" }, "Waqas Tahir"),
        React.createElement(SideSeparator, null),
        React.createElement(SideNav, null,
            React.createElement(SiteMenu, { useButtons: true })),
        React.createElement(SideSocial, null,
            React.createElement("a", { href: "https://facebook.com/wakaztahir", target: "_blank", rel: "noreferrer" },
                React.createElement(IconButton, { size: "large" },
                    React.createElement(FacebookIcon, null))),
            React.createElement("a", { href: "https://twitter.com/wakaztahir", target: "_blank", rel: "noreferrer" },
                React.createElement(IconButton, { size: "large" },
                    React.createElement(TwitterIcon, null))),
            React.createElement("a", { href: "https://stackoverflow.com/users/3343503/waqas", rel: "noreferrer", target: "_blank" },
                React.createElement(IconButton, { size: "large" },
                    React.createElement(StackoverflowIcon, null))),
            React.createElement("a", { href: "https://github.com/wakaztahir", target: "_blank", rel: "noreferrer" },
                React.createElement(IconButton, { size: "large" },
                    React.createElement(GithubIcon, null)))),
        React.createElement(SideFooter, null,
            React.createElement(Typography, { variant: "caption", color: "textPrimary" }, "\u00A9 2022 | Built with love"))));
}
