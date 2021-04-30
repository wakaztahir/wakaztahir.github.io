import React, { useState } from "react"

import "./header.scss"

export default function Header(props) {
  let [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={(menuOpen ? "header-open " : "") + (props.mobileOnly ? "mobile-only-header " : "")}>
      <span className="wakaz">Waqas Tahir</span>
      <nav className="primary">
        <span
          className="mobile-menu-toggle"
          id="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fa fa-bars" aria-hidden="true" />
        </span>
        <div className="menu">
          <a href="/#home" className="menu-item">
            Home
          </a>
          <a href="/blog" className="">
            Blog
          </a>
          <a href="/#projects" className="menu-item">
            Projects
          </a>
        </div>
        <div
          className={"mobile-menu " + (menuOpen ? "open" : "")}
          id="mobile-menu"
        >
          <a href="/#home" className="menu-item">
            Home
          </a>
          <a href="/blog" className="">
            Blog
          </a>
          <a href="/#projects" className="menu-item">
            Projects
          </a>
        </div>
      </nav>
    </header>
  )
}
