import React from "react"
import Header from "../components/header/header"
import Parallax from "../components/parallax/parallax"
import ProjectCard, {
  ProjectCardButton,
} from "../components/project-card/project-card"
import Sidebar from "../components/sidebar/sidebar"
import "../styles/main-page.scss"

export default function Home() {
  return (
    <main>
      <title>Waqas Tahir | Trying My Best</title>
      <Header />
      <Sidebar />
      <Parallax>
        <section id="home" className="page centered">
          <h1 className="h-text">Hi , I am Waqas.</h1>
          <p>developer & artist</p>
        </section>
        <section id="projects" v="page">
          <div className="projects">
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
        <section id="about" className="page centered">
          <h1 className="h-text">About me</h1>
          <p className="inner-text">
            I am a developer.I study Computer Science. I make websites and
            apps.I'm also an artist , I make 3d art , music and other stuff.I
            love computers , sci-fi films & tech gadgets. <br />
            <br />
          </p>
          <p className="inner-text" style={{ marginTop: "-10px" }}>
            I am a full stack web developer , I use react as a front-end JS
            framework mostly , NodeJS & MongoDB as backend.I have also developed
            in PHP & SQL.I have experience in developing wordpress plugins and
            themes though I'm not good at it
            <br />
            <br />
          </p>
          <p className="inner-text" style={{ marginTop: "-10px" }}>
            I love programming & making new things is my passion.
            <br />
            <br />
          </p>
        </section>
      </Parallax>
    </main>
  )
}
