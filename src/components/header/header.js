import React from "react"

import "./header.scss"

export default function Header() {
  return (
    <header>
      <span className="wakaz">Waqas Tahir</span>
      <nav className="primary">
        <span className="mobile-menu-toggle" id="mobile-menu-toggle">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </span>
        <div className="menu">
          <a href="#home" className="menu-item">
            Home
          </a>
          <a href="#projects" className="menu-item">
            Projects
          </a>
          <a href="#about" className="menu-item">
            About
          </a>
        </div>
        <div className="mobile-menu" id="mobile-menu">
          <a href="#home" className="menu-item">
            Home
          </a>
          <a href="#projects" className="menu-item">
            Projects
          </a>
          <a href="#about" className="menu-item">
            About
          </a>
        </div>
      </nav>
    </header>
  )
}
