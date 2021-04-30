import React from "react"

import "./sidebar.scss"

export default function Sidebar() {
  return (
    <aside>
      <div id="me">Waqas Tahir</div>
      <hr style={{ width: "14rem", marginTop: "3rem", marginBottom: "1rem" }} />
      <nav>
        <a href="#home">Home</a>
        <a href="/blog">Blog</a>
        <a href="#projects">Projects</a>
      </nav>
      <section className="aside-social">
        <a
          href="https://facebook.com/wakaztahir"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-facebook-f" />
        </a>
        <a
          href="https://twitter.com/wakaztahir"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-twitter" />
        </a>
        <a
          href="https://stackoverflow.com/users/3343503/waqas"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fa fa-stack-overflow" />
        </a>
        <a
          href="https://github.com/wakaztahir"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-github" />
        </a>
      </section>
      <section className="aside-footer">
        <span>&copy; 2020 | Built with love</span>
      </section>
    </aside>
  )
}
