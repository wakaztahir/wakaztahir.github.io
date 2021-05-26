import * as React from "react"
import FacebookIcon from "../../../public/icons/FacebookIcon"
import TwitterIcon from "../../../public/icons/TwitterIcon"
import StackoverflowIcon from "../../../public/icons/StackoverflowIcon"
import GithubIcon from "../../../public/icons/GithubIcon"
import * as css from "./sidebar.module.scss"
import { Icon, IconButton } from "@material-ui/core"

export default function Sidebar() {
  return (
    <aside className={`${css.asideSidebar}`}>
      <div className={`${css.asideTitle}`}>Waqas Tahir</div>
      <hr style={{ width: "14rem", marginTop: "3rem", marginBottom: "1rem" }} />
      <nav>
        <a href="/#home">Home</a>
        <a href="/blog">Blog</a>
        <a href="/#projects">Projects</a>
      </nav>
      <section className={`${css.asideSocial}`}>
        <a
          href="https://facebook.com/wakaztahir"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton><FacebookIcon /></IconButton>
        </a>
        <a
          href="https://twitter.com/wakaztahir"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton>
            <TwitterIcon /></IconButton>
        </a>
        <a
          href="https://stackoverflow.com/users/3343503/waqas"
          rel="noreferrer"
          target="_blank"
        >
          <IconButton>
            <StackoverflowIcon /></IconButton>
        </a>
        <a
          href="https://github.com/wakaztahir"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton>
            <GithubIcon />
          </IconButton>
        </a>
      </section>
      <section className={`${css.asideFooter}`}>
        <span>&copy; 2020 | Built with love</span>
      </section>
    </aside>
  )
}
