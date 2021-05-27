import { useState } from "react"
import * as React from "react"
import About from "../components/dialogs/About"
import MainHeader from "../components/header/main-header"
import Parallax from "../components/parallax/parallax"
import ProjectCard, {
  ProjectCardButton
} from "../components/project-card/project-card"
import MainSidebar from "../components/sidebar/main-sidebar"
import * as css from "../styles/main-page.module.scss"
import MyApp from "../components/commons/MyApp"
import { Hidden } from "@material-ui/core"
import MyButton from "../components/commons/MyButton"

export default function Home() {
  const [aboutDialogOpen, setAboutDialog] = useState(false)
  return (
    <MyApp>
      <main className={css.container}>
        <title>Waqas Tahir | Trying My Best</title>
        <Hidden smUp={true}>
          <MainHeader/>
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
          <section id="home" className={css.centered + " " + css.contentSection + " " + css.home}>
            <h1 className="h-text">Hi , I am Waqas.</h1>
            <p>software developer</p>
            <MyButton
              onClick={() => {
                setAboutDialog(true)
              }}
            >
              About Me
            </MyButton>
          </section>
          <section id="projects" className={css.contentSection + " " + css.projects}>
            <div className={css.projects}>
              <ProjectCard tags={["March 2021"]}>
                <h1>Timeline</h1>
                <p>
                  A Web App to make notes and organize your information , Data is
                  stored locally and in cloud so you never lose it , secured with
                  strong encryption
                </p>
                <ProjectCardButton
                  href="https://timeline.fly.dev"
                  name="Live Demo"
                />
              </ProjectCard>
              <ProjectCard tags={["August 2020"]}>
                <h1>Acadtable</h1>
                <p>
                  Online <strong>react</strong> application that allows the users
                  to make academic time tables.
                  <br />
                  This is a block based table generator application.
                </p>
                <ProjectCardButton
                  href="https://wakaztahir.github.io/acadtable/"
                  name="Live Demo"
                />
              </ProjectCard>
            </div>
          </section>
        </Parallax>
      </main>
    </MyApp>
  )
}
