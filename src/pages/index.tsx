import { useState } from "react"
import * as React from "react"
import About from "../components/dialogs/About"
import MainHeader from "../components/header/main-header"
import Parallax from "../components/parallax/parallax"
import ProjectCard, {
  ProjectCardDescription, ProjectCardLink, ProjectCardTitle
} from "../components/project-card/project-card"
import MainSidebar from "../components/sidebar/main-sidebar"
import MyApp from "../components/commons/MyApp"
import { Hidden, Typography } from "@material-ui/core"
import MyButton from "../components/commons/MyButton"
import styled from "styled-components"

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

export default function Home() {
  const [aboutDialogOpen, setAboutDialog] = useState(false)
  return (
    <MyApp>
      <Container>
        <title>Waqas Tahir | Trying My Best</title>
        <Hidden mdUp={true}>
          <MainHeader />
        </Hidden>
        <Hidden smDown={true}>
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
            <h1 className="h-text">Hi , I am Waqas.</h1>
            <p>software developer</p>
            <MyButton
              onClick={() => {
                setAboutDialog(true)
              }}
            >
              About Me
            </MyButton>
          </HomeSection>
          <ProjectsSection id="projects">
            <ProjectCard tags={["March 2021"]}>
              <ProjectCardTitle>Timeline</ProjectCardTitle>
              <ProjectCardDescription>
                A Material Design Web App inspired by Google Keep to make notes and organize
                your information , Data
                is synced to google drive.
              </ProjectCardDescription>
              <ProjectCardLink href="https://timeline-notes.github.io/web">
                Live Demo
              </ProjectCardLink>
            </ProjectCard>
            <ProjectCard tags={["August 2020"]}>
              <ProjectCardTitle>Acadtable</ProjectCardTitle>
              <ProjectCardDescription>
                Online <strong>react</strong> application that allows the users
                to make academic time tables.
                <br />
                This is a block based table generator application.
              </ProjectCardDescription>
              <ProjectCardLink href="https://wakaztahir.github.io/acadtable/">
                Live Demo
              </ProjectCardLink>
            </ProjectCard>
          </ProjectsSection>
        </Parallax>
      </Container>
    </MyApp>
  )
}
