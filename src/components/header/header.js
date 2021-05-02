import React, { useState } from "react"

import * as css from "./header.module.scss"

export default function Header(props) {
  let [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className={`${css.siteHeader} ${(menuOpen ? css.headerOpen : "")} ${(props.mobileOnly ? css.mobileOnlyHeader : "")}`}>
      <span className={css.wakaz}>Waqas Tahir</span>
      <nav className={css.navPrimary}>
        <span
          className={css.mobileMenuToggle}
          id="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fa fa-bars" aria-hidden="true" />
        </span>
        <div className={css.menu}>
          <a href="/#home">
            Home
          </a>
          <a href="/blog">
            Blog
          </a>
          <a href="/#projects">
            Projects
          </a>
        </div>
        <div
          className={`${css.mobileMenu} ${(menuOpen ? css.open : "")}`}
          id="mobile-menu"
        >
          <a href="/#home">
            Home
          </a>
          <a href="/blog">
            Blog
          </a>
          <a href="/#projects">
            Projects
          </a>
        </div>
      </nav>
    </header>
  )
}
