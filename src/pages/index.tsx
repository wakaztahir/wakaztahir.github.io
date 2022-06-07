import * as React from "react"
import { useState } from "react"
import About from "../components/dialogs/About"
import MainHeader from "../components/header/main-header"
import Parallax from "../components/parallax/parallax"
import ProjectCard, {
  ProjectCardDescription,
  ProjectCardLink,
  ProjectCardTitle,
  ProjectIcons
} from "../components/project-card/project-card"
import MainSidebar from "../components/sidebar/main-sidebar"
import MyApp from "../components/commons/MyApp"
import { Hidden, Typography, useTheme } from "@mui/material"
import MyButton from "../components/commons/MyButton"
import styled from "styled-components"
import SEO from "../components/commons/SEO"
import { Android, Language } from "@mui/icons-material"
import PlayStoreIcon from "../components/icons/PlaystoreIcon"

const Container = styled.main`
  display: flex;
  flex-direction: column;

  ${props => props.theme.breakpoints.up("md")} {
    flex-direction: row;
  }
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
        <Hidden mdUp={true}>
          <MainHeader />
        </Hidden>
        <Hidden mdDown={true}>
          <MainSidebar />
        </Hidden>
        <About
          open={aboutDialogOpen}
          onClose={() => {
            setAboutDialog(false)
          }}
        />
        <Parallax>
          <HomeSection id="home">
            <MainTitle variant={"h3"}>Hi , I am Waqas.</MainTitle>
            <MainDescription>a lazy software developer</MainDescription>
            <MainButton
              onClick={() => {
                setAboutDialog(true)
              }}
            >
              About Me
            </MainButton>
            <a href={"/WaqasTahirCV.docx"} download={"waqas-tahir-cv.docx"}>
              <MainButton>
                Download CV
              </MainButton>
            </a>
          </HomeSection>
          <ProjectsSection id="projects">
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

function ComposeDraggableListCard() {

  const theme = useTheme()

  return (
    <ProjectCard tags={["August 2021"]}>
      <ProjectCardTitle>Compose Draggable List</ProjectCardTitle>
      <ProjectCardDescription>
        Its a Jetpack Compose library for android that creates a draggable list
      </ProjectCardDescription>
      <ProjectCardLink href="https://github.com/wakaztahir/compose-draggable-list">
        Github
      </ProjectCardLink>
      <ProjectIcons>
        <Android style={{ color: theme.palette.mode === "dark" ? "#6ad43d" : "#3e8e2e" }} />
      </ProjectIcons>
    </ProjectCard>
  )
}

function ReactStaggeredGridCard() {

  const theme = useTheme()

  return (
    <ProjectCard tags={["June 2021"]}>
      <ProjectCardTitle>React Staggered Grid</ProjectCardTitle>
      <ProjectCardDescription>
        This is a npm package that creates a staggered grid in React
      </ProjectCardDescription>
      <ProjectCardLink href="https://wakaztahir.github.io/react-staggered-grid/">
        Live Demo
      </ProjectCardLink>
      <ProjectCardLink href="https://github.com/wakaztahir/react-staggered-grid">
        Github
      </ProjectCardLink>
      <ProjectIcons>
        <Language
          style={{
            color: theme.palette.mode === "dark" ? "rgba(255,255,255,.7)" : "rgba(0,0,0,.7)"
          }}
        />
      </ProjectIcons>
    </ProjectCard>
  )
}

const CenteredRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

function TimelineCard() {

  const theme = useTheme()

  return (
    <ProjectCard tags={["March 2021"]}>
      <ProjectCardTitle>Timeline</ProjectCardTitle>
      <ProjectCardDescription>
        A Material Designed Web & Android App inspired by Google Keep to make notes and organize
        your information.
      </ProjectCardDescription>
      <ProjectCardLink href="https://qawaz.github.io/timeline">
        Website
      </ProjectCardLink>
      <ProjectCardLink href="https://play.google.com/store/apps/details?id=com.wakaztahir.timeline">
        <CenteredRow><PlayStoreIcon />&nbsp;&nbsp;<span>PlayStore</span></CenteredRow>
      </ProjectCardLink>
      <ProjectIcons>
        <Language
          style={{
            color: theme.palette.mode === "dark" ? "rgba(255,255,255,.7)" : "rgba(0,0,0,.7)"
          }}
        />
        &nbsp;&nbsp;
        <Android style={{ color: theme.palette.mode === "dark" ? "#6ad43d" : "#3e8e2e" }} />
      </ProjectIcons>
    </ProjectCard>
  )
}

function AcadtableCard() {

  const theme = useTheme()

  return (
    <ProjectCard tags={["August 2020"]}>
      <ProjectCardTitle>Acadtable</ProjectCardTitle>
      <ProjectCardDescription>
        Online <strong>react</strong> application that allows the users
        to make academic time tables.
        <br />
      </ProjectCardDescription>
      <ProjectCardLink href="https://wakaztahir.github.io/acadtable/">
        Live Demo
      </ProjectCardLink>
      <ProjectCardLink href="https://github.com/wakaztahir/acadtable">
        Github
      </ProjectCardLink>
      <ProjectIcons>
        <Language
          style={{
            color: theme.palette.mode === "dark" ? "rgba(255,255,255,.7)" : "rgba(0,0,0,.7)"
          }}
        />
      </ProjectIcons>
    </ProjectCard>
  )
}

function MusicLandingPageCard() {

  const theme = useTheme()

  return (
    <ProjectCard tags={["August 2019"]}>
      <ProjectCardTitle>Music Landing Page</ProjectCardTitle>
      <ProjectCardDescription>
        A Wordpress Plugin I built in PHP that helps creates a landing page
        for songs linking to different stores its available in
      </ProjectCardDescription>
      <ProjectCardLink href="https://github.com/wakaztahir/musiclandingpage">
        Github
      </ProjectCardLink>
      <ProjectIcons>
        <Language
          style={{
            color: theme.palette.mode === "dark" ? "rgba(255,255,255,.7)" : "rgba(0,0,0,.7)"
          }}
        />
      </ProjectIcons>
    </ProjectCard>
  )
}