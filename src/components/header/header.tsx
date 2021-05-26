import * as React from "react"

import * as css from "./header.module.scss"
import { useState } from "react"
import { Menu } from "@material-ui/icons"
import { IconButton } from "@material-ui/core"

export default function Header(props) {
  let [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className={`${css.siteHeader} ${(menuOpen ? css.headerOpen : "")} ${(props.mobileOnly ? css.mobileOnlyHeader : "")}`}>
      <span className={css.wakaz}>Waqas Tahir</span>
      <nav className={css.navPrimary}>
        <IconButton
          className={css.mobileMenuToggle}
          onClick={() => setMenuOpen(!menuOpen)}>
          <Menu />
        </IconButton>
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
