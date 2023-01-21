import * as React from "react";
import { useState } from "react";
import About from "../components/dialogs/About";
import MainHeader from "../components/header/main-header";
import Parallax from "../components/parallax/parallax";
import ProjectCard, { ProjectCardDescription, ProjectCardLinkWithIcon, ProjectCardTitle } from "../components/project-card/project-card";
import MainSidebar from "../components/sidebar/main-sidebar";
import MyApp from "../components/commons/MyApp";
import { Hidden, Typography, useTheme } from "@mui/material";
import MyButton from "../components/commons/MyButton";
import styled from "styled-components";
import SEO from "../components/commons/SEO";
import { Language } from "@mui/icons-material";
import PlayStoreIcon from "../components/icons/PlaystoreIcon";
import GithubIcon from "../components/icons/GithubIcon";
const Container = styled.main `
  display: flex;
  flex-direction: column;

  ${props => props.theme.breakpoints.up("md")} {
    flex-direction: row;
  }
`;
const ContentSection = styled.section `
  width: 100%;
  padding: 5rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HomeSection = styled(ContentSection) `
  min-height: 100vh;
  padding: 0;
`;
const ProjectsSection = styled(ContentSection) `
  min-height: 60vh;
  padding-top: 0;

  ${props => props.theme.breakpoints.up("md")} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
const MainTitle = styled(Typography) `
  color: white;
`;
const MainDescription = styled(Typography) `
  color: white;
  margin-top: 0.5em;
`;
const MainButton = styled(MyButton) `
  margin-top: 1em;
`;
export default function Home() {
    const [aboutDialogOpen, setAboutDialog] = useState(false);
    return (React.createElement(MyApp, null,
        React.createElement(SEO, { title: "Trying My Best" }),
        React.createElement(Container, null,
            React.createElement(Hidden, { mdUp: true },
                React.createElement(MainHeader, null)),
            React.createElement(Hidden, { mdDown: true },
                React.createElement(MainSidebar, null)),
            React.createElement(About, { open: aboutDialogOpen, onClose: () => {
                    setAboutDialog(false);
                } }),
            React.createElement(Parallax, null,
                React.createElement(HomeSection, { id: "home" },
                    React.createElement(MainTitle, { variant: "h3" }, "Hi , I am Waqas."),
                    React.createElement(MainDescription, null, "a lazy software developer"),
                    React.createElement(MainButton, { onClick: () => {
                            setAboutDialog(true);
                        } }, "About Me"),
                    React.createElement("a", { href: "/WaqasTahirCV.pdf", download: "waqas-tahir-cv.pdf" },
                        React.createElement(MainButton, null, "Download CV"))),
                React.createElement(ProjectsSection, { id: "projects" },
                    React.createElement(TimelineCard, null),
                    React.createElement(ReactStaggeredGridCard, null),
                    React.createElement(AcadtableCard, null),
                    React.createElement(ComposeDraggableListCard, null),
                    React.createElement(MusicLandingPageCard, null))))));
}
function ComposeDraggableListCard() {
    const theme = useTheme();
    return (React.createElement(ProjectCard, { tags: ["August 2021"] },
        React.createElement(ProjectCardTitle, null, "Compose Draggable List"),
        React.createElement(ProjectCardDescription, null, "Its a Jetpack Compose library for android that creates a draggable list"),
        React.createElement(ProjectCardLinkWithIcon, { path: "https://github.com/wakaztahir/compose-draggable-list", icon: React.createElement(GithubIcon, null), text: "Github" })));
}
function ReactStaggeredGridCard() {
    const theme = useTheme();
    return (React.createElement(ProjectCard, { tags: ["June 2021"] },
        React.createElement(ProjectCardTitle, null, "React Staggered Grid"),
        React.createElement(ProjectCardDescription, null, "This is a npm package that creates a staggered grid in React"),
        React.createElement(ProjectCardLinkWithIcon, { path: "https://wakaztahir.github.io/react-staggered-grid/", icon: React.createElement(Language, { ...useIconColorProps() }), text: "Live Demo" }),
        React.createElement(ProjectCardLinkWithIcon, { path: "https://github.com/wakaztahir/react-staggered-grid", icon: React.createElement(GithubIcon, null), text: "Github" })));
}
function useIconColorProps() {
    const theme = useTheme();
    return {
        style: {
            color: theme.palette.mode === "dark" ? "rgba(255,255,255,.7)" : "rgba(0,0,0,.7)"
        }
    };
}
function TimelineCard() {
    return (React.createElement(ProjectCard, { tags: ["March 2021"] },
        React.createElement(ProjectCardTitle, null, "Timeline"),
        React.createElement(ProjectCardDescription, null, "A Material Designed Web & Android App inspired by Google Keep to make notes and organize your information."),
        React.createElement(ProjectCardLinkWithIcon, { path: "https://qawaz.github.io/timeline", icon: React.createElement(Language, { ...useIconColorProps() }), text: "Website" }),
        React.createElement(ProjectCardLinkWithIcon, { path: "https://play.google.com/store/apps/details?id=com.wakaztahir.timeline", icon: React.createElement(PlayStoreIcon, null), text: "PlayStore" })));
}
function AcadtableCard() {
    return (React.createElement(ProjectCard, { tags: ["August 2020"] },
        React.createElement(ProjectCardTitle, null, "Acadtable"),
        React.createElement(ProjectCardDescription, null,
            "Online ",
            React.createElement("strong", null, "react"),
            " application that allows the users to make academic time tables.",
            React.createElement("br", null)),
        React.createElement(ProjectCardLinkWithIcon, { path: "https://wakaztahir.github.io/acadtable/", icon: React.createElement(Language, { ...useIconColorProps() }), text: "Live Demo" }),
        React.createElement(ProjectCardLinkWithIcon, { path: "https://github.com/wakaztahir/acadtable", icon: React.createElement(GithubIcon, null), text: "Github" })));
}
function MusicLandingPageCard() {
    return (React.createElement(ProjectCard, { tags: ["August 2019"] },
        React.createElement(ProjectCardTitle, null, "Music Landing Page"),
        React.createElement(ProjectCardDescription, null, "A Wordpress Plugin I built in PHP that helps creates a landing page for songs linking to different stores its available in"),
        React.createElement(ProjectCardLinkWithIcon, { path: "https://github.com/wakaztahir/musiclandingpage", icon: React.createElement(GithubIcon, null), text: "Github" })));
}
