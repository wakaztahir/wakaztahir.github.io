import * as React from "react"
import { useState } from "react"
import About from "../components/dialogs/About"
import MainHeader from "../components/header/main-header"
import Parallax from "../components/parallax/parallax"
import ProjectCard, {
  ProjectCardDescription,
  ProjectCardLinkWithIcon,
  ProjectCardTitle
} from "../components/project-card/project-card"
import MainSidebar, { SocialIcons } from "../components/sidebar/main-sidebar"
import MyApp from "../components/commons/MyApp"
import { Hidden, Typography, useTheme } from "@mui/material"
import MyButton from "../components/commons/MyButton"
import styled from "styled-components"
import SEO from "../components/commons/SEO"
import { DesktopWindowsOutlined, Language } from "@mui/icons-material"
import PlayStoreIcon from "../components/icons/PlaystoreIcon"
import GithubIcon from "../components/icons/GithubIcon"

import "../components/parallax/coalesce.js"

const Container = styled.main`
  display: flex;
  flex-direction: column;

  ${props => props.theme.breakpoints.up("md")} {
    flex-direction: row;
  }
`

const IconRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
`

const ContentSection = styled.section`
  width: 100%;
  padding: 5rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HomeSection = styled(ContentSection)`
  min-height: 100vh;
  padding: 0;
`

const ProjectsSection = styled(ContentSection)`
  min-height: 60vh;
  padding-top: 0;

  ${props => props.theme.breakpoints.up("md")} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const MainTitle = styled(Typography)`
  color: white;
`
const MainDescription = styled(Typography)`
  color: white;
  margin-top: 0.5em;
`

const MainButton = styled(MyButton)`
  margin-top: 1em;
`

export default function Home() {

  const [aboutDialogOpen, setAboutDialog] = useState(false)

  return (
    <MyApp>
      <SEO
        title={"Trying My Best"}
      />
      <Container>
        {/*TODO MainHeader is not needed anywhere*/}
        {/*<Hidden smUp={true}>*/}
        {/*  <MainHeader />*/}
        {/*</Hidden>*/}
        <Hidden mdDown={true}>
          <MainSidebar onAboutDialog={() => setAboutDialog(true)} />
        </Hidden>
        <Parallax className={"content--canvas"}>
          <Hidden mdUp={true}>
            <HomeSection id="home">
              <MainTitle variant={"h3"}>Hi , I am Waqas.</MainTitle>
              <MainDescription>android developer</MainDescription>
              <MainButton onClick={() => setAboutDialog(true)}>About Me</MainButton>
              <a href={"/WaqasTahirCV.pdf"} download={"waqas-tahir-cv.pdf"}>
                <MainButton>Download CV</MainButton>
              </a>
              <Hidden mdUp={true}>
                <IconRowContainer style={{ marginTop: "1em" }}>
                  <SocialIcons />
                </IconRowContainer>
              </Hidden>
            </HomeSection>
          </Hidden>
          <About
            open={aboutDialogOpen}
            onClose={() => setAboutDialog(false)}
          />
          <ProjectsSection id="projects">
            <MindMapCard />
            <SketchableCard />
            <PDFEditorCard />
            <PhotoEditorApp />
            <SimpleScannerCard />
            <EasyToDoCard />
            <TimelineCard />
            <ReactStaggeredGridCard />
            <AcadtableCard />
            <ComposeDraggableListCard />
            <MusicLandingPageCard />
          </ProjectsSection>
        </Parallax>
      </Container>
    </MyApp>
  )
}

function MindMapCard() {
  return (
    <ProjectCard tags={["July 2022"]}>
      <ProjectCardTitle>123Mind</ProjectCardTitle>
      <ProjectCardDescription>
        A Mind Mapping App that that exports high quality PNG,JPG and PDFs , very customizable supporting many features
      </ProjectCardDescription>
      <IconRowContainer>
        <ProjectCardLinkWithIcon path="https://qawaz.github.io/mindnode-web"
                                 icon={<Language />}
                                 text={"Web App"} />
        <ProjectCardLinkWithIcon path={"https://qawaz.github.io/mindnode-web/latest-windows.html"}
                                 icon={<DesktopWindowsOutlined />} text={"Windows"} />
        <ProjectCardLinkWithIcon path={"https://play.google.com/store/apps/details?id=com.wakaztahir.mindnode"}
                                 icon={<PlayStoreIcon />} text={"PlayStore"} />
      </IconRowContainer>
    </ProjectCard>
  )
}

function SketchableCard() {
  return (
    <ProjectCard tags={["July 2022"]}>
      <ProjectCardTitle>Sketchable</ProjectCardTitle>
      <ProjectCardDescription>
        A Simple Drawing or Sketching App
      </ProjectCardDescription>
      <IconRowContainer>
        <ProjectCardLinkWithIcon path="https://qawaz.github.io/sketchable-web"
                                 icon={<Language />}
                                 text={"Web App"} />
        <ProjectCardLinkWithIcon path={"https://qawaz.github.io/sketchable-web/latest-windows.html"}
                                 icon={<DesktopWindowsOutlined />} text={"Windows"} />
        <ProjectCardLinkWithIcon path={"https://play.google.com/store/apps/details?id=com.wakaztahir.sketchapp"}
                                 icon={<PlayStoreIcon />} text={"PlayStore"} />
      </IconRowContainer>
    </ProjectCard>
  )
}

function SimpleScannerCard() {
  return (
    <ProjectCard tags={["July 2022"]}>
      <ProjectCardTitle>Simple Scanner</ProjectCardTitle>
      <ProjectCardDescription>
        A document scanner app built with OpenCV, Detects cropping and crops it
      </ProjectCardDescription>
      <IconRowContainer>
        <ProjectCardLinkWithIcon path={"https://play.google.com/store/apps/details?id=com.wakaztahir.docscanner"}
                                 icon={<PlayStoreIcon />} text={"PlayStore"} />
      </IconRowContainer>
    </ProjectCard>
  )
}

function PhotoEditorApp() {
  return (
    <ProjectCard tags={["July 2022"]}>
      <ProjectCardTitle>Photo Editor</ProjectCardTitle>
      <ProjectCardDescription>
        A photo editor app that allows editing photos
      </ProjectCardDescription>
      <IconRowContainer>
        <ProjectCardLinkWithIcon path={"https://play.google.com/store/apps/details?id=com.wakaztahir.photoeditor"}
                                 icon={<PlayStoreIcon />} text={"PlayStore"} />
      </IconRowContainer>
    </ProjectCard>
  )
}

function EasyToDoCard() {
  return (
    <ProjectCard tags={["July 2022"]}>
      <ProjectCardTitle>Easy To Do</ProjectCardTitle>
      <ProjectCardDescription>
        A Task Management app that allows managing tasks and creating reminders
      </ProjectCardDescription>
      <IconRowContainer>
        <ProjectCardLinkWithIcon path={"https://play.google.com/store/apps/details?id=com.wakaztahir.easytodo"}
                                 icon={<PlayStoreIcon />} text={"PlayStore"} />
      </IconRowContainer>
    </ProjectCard>
  )
}

function PDFEditorCard() {
  return (
    <ProjectCard tags={["July 2022"]}>
      <ProjectCardTitle>PDFEditor</ProjectCardTitle>
      <ProjectCardDescription>
        PDF Editor app that allows to view and edit PDF documents
      </ProjectCardDescription>
      <IconRowContainer>
        <ProjectCardLinkWithIcon path={"https://play.google.com/store/apps/details?id=com.wakaztahir.pdfreader"}
                                 icon={<PlayStoreIcon />} text={"PlayStore"} />
      </IconRowContainer>
    </ProjectCard>
  )
}

function ComposeDraggableListCard() {
  return (
    <ProjectCard tags={["August 2021"]}>
      <ProjectCardTitle>Compose Draggable List</ProjectCardTitle>
      <ProjectCardDescription>
        Its a Jetpack Compose library for android that creates a draggable list
      </ProjectCardDescription>
      <ProjectCardLinkWithIcon path={"https://github.com/wakaztahir/compose-draggable-list"} icon={<GithubIcon />}
                               text={"Github"} />
    </ProjectCard>
  )
}

function ReactStaggeredGridCard() {
  return (
    <ProjectCard tags={["June 2021"]}>
      <ProjectCardTitle>React Staggered Grid</ProjectCardTitle>
      <ProjectCardDescription>
        This is a npm package that creates a staggered grid in React
      </ProjectCardDescription>
      <IconRowContainer>
        <ProjectCardLinkWithIcon path="https://wakaztahir.github.io/react-staggered-grid/"
                                 icon={<Language />}
                                 text={"Live Demo"} />
        <ProjectCardLinkWithIcon path={"https://github.com/wakaztahir/react-staggered-grid"} icon={<GithubIcon />}
                                 text={"Github"} />
      </IconRowContainer>
    </ProjectCard>
  )
}

function TimelineCard() {
  return (
    <ProjectCard tags={["March 2021"]}>
      <ProjectCardTitle>Timeline</ProjectCardTitle>
      <ProjectCardDescription>
        A Material Designed Web & Android App inspired by Google Keep to make notes and organize
        your information.
      </ProjectCardDescription>
      <IconRowContainer>
        <ProjectCardLinkWithIcon path="https://qawaz.github.io/timeline" icon={<Language />}
                                 text={"Website"} />
        <ProjectCardLinkWithIcon path={"https://play.google.com/store/apps/details?id=com.wakaztahir.timeline"}
                                 icon={<PlayStoreIcon />} text={"PlayStore"} />
      </IconRowContainer>
    </ProjectCard>
  )
}

function AcadtableCard() {
  return (
    <ProjectCard tags={["August 2020"]}>
      <ProjectCardTitle>Acadtable</ProjectCardTitle>
      <ProjectCardDescription>
        Online <strong>react</strong> application that allows the users
        to make academic time tables.
        <br />
      </ProjectCardDescription>
      <IconRowContainer>
        <ProjectCardLinkWithIcon path="https://wakaztahir.github.io/acadtable/"
                                 icon={<Language />}
                                 text={"Live Demo"} />
        <ProjectCardLinkWithIcon path={"https://github.com/wakaztahir/acadtable"} icon={<GithubIcon />}
                                 text={"Github"} />
      </IconRowContainer>
    </ProjectCard>
  )
}

function MusicLandingPageCard() {
  return (
    <ProjectCard tags={["August 2019"]}>
      <ProjectCardTitle>Music Landing Page</ProjectCardTitle>
      <ProjectCardDescription>
        A Wordpress Plugin I built in PHP that helps creates a landing page
        for songs linking to different stores its available in
      </ProjectCardDescription>
      <ProjectCardLinkWithIcon path={"https://github.com/wakaztahir/musiclandingpage"} icon={<GithubIcon />}
                               text={"Github"} />
    </ProjectCard>
  )
}