import * as React from "react"
import { useState } from "react"
import About from "../components/dialogs/About"
import MainHeader from "../components/header/main-header"
import Parallax from "../components/parallax/parallax"
import ProjectCard, {
  ProjectCardDescription,
  ProjectCardLink, ProjectCardLinkWithIcon,
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
import GithubIcon from "../components/icons/GithubIcon"

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
            <a href={"/WaqasTahirCV.pdf"} download={"waqas-tahir-cv.pdf"}>
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
      <ProjectCardLinkWithIcon path={"https://github.com/wakaztahir/compose-draggable-list"} icon={<GithubIcon />}
                               text={"Github"} />
      {/*<ProjectCardLink href="https://github.com/wakaztahir/compose-draggable-list">*/}
      {/*  Github*/}
      {/*</ProjectCardLink>*/}
      {/*<ProjectIcons>*/}
      {/*  <Android style={{ color: theme.palette.mode === "dark" ? "#6ad43d" : "#3e8e2e" }} />*/}
      {/*</ProjectIcons>*/}
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
      <ProjectCardLinkWithIcon path="https://wakaztahir.github.io/react-staggered-grid/"
                               icon={<Language {...useIconColorProps()} />}
                               text={"Live Demo"} />
      <ProjectCardLinkWithIcon path={"https://github.com/wakaztahir/react-staggered-grid"} icon={<GithubIcon />}
                               text={"Github"} />
      {/*<ProjectIcons>*/}
      {/*  <Language*/}
      {/*    style={{*/}
      {/*      color: theme.palette.mode === "dark" ? "rgba(255,255,255,.7)" : "rgba(0,0,0,.7)"*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</ProjectIcons>*/}
    </ProjectCard>
  )
}

function useIconColorProps() {
  const theme = useTheme()
  return {
    style: {
      color: theme.palette.mode === "dark" ? "rgba(255,255,255,.7)" : "rgba(0,0,0,.7)"
    }
  }
}

function TimelineCard() {

  return (
    <ProjectCard tags={["March 2021"]}>
      <ProjectCardTitle>Timeline</ProjectCardTitle>
      <ProjectCardDescription>
        A Material Designed Web & Android App inspired by Google Keep to make notes and organize
        your information.
      </ProjectCardDescription>
      <ProjectCardLinkWithIcon path="https://qawaz.github.io/timeline" icon={<Language {...useIconColorProps()} />}
                               text={"Website"} />
      {/*<ProjectCardLink href="https://qawaz.github.io/timeline">*/}
      {/*  <CenteredRow><Language {...useIconColorProps()}/>&nbsp;&nbsp;<span>Website</span></CenteredRow>*/}
      {/*</ProjectCardLink>*/}
      <ProjectCardLinkWithIcon path={"https://play.google.com/store/apps/details?id=com.wakaztahir.timeline"}
                               icon={<PlayStoreIcon />} text={"PlayStore"} />
      {/*<ProjectIcons>*/}
      {/*  <Language*/}
      {/*    style={{*/}
      {/*      color: theme.palette.mode === "dark" ? "rgba(255,255,255,.7)" : "rgba(0,0,0,.7)"*/}
      {/*    }}*/}
      {/*  />*/}
      {/*  &nbsp;&nbsp;*/}
      {/*  <Android style={{ color: theme.palette.mode === "dark" ? "#6ad43d" : "#3e8e2e" }} />*/}
      {/*</ProjectIcons>*/}
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
      <ProjectCardLinkWithIcon path="https://wakaztahir.github.io/acadtable/"
                               icon={<Language {...useIconColorProps()} />}
                               text={"Live Demo"} />
      <ProjectCardLinkWithIcon path={"https://github.com/wakaztahir/acadtable"} icon={<GithubIcon />}
                               text={"Github"} />
      {/*<ProjectIcons>*/}
      {/*  <Language*/}
      {/*    style={{*/}
      {/*      color: theme.palette.mode === "dark" ? "rgba(255,255,255,.7)" : "rgba(0,0,0,.7)"*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</ProjectIcons>*/}
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
      {/*<ProjectIcons>*/}
      {/*  <Language*/}
      {/*    style={{*/}
      {/*      color: theme.palette.mode === "dark" ? "rgba(255,255,255,.7)" : "rgba(0,0,0,.7)"*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</ProjectIcons>*/}
    </ProjectCard>
  )
}