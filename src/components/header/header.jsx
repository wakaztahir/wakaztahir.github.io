"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var css = require("./header.module.scss");
var react_1 = require("react");
function Header(props) {
    var _a = react_1.useState(false), menuOpen = _a[0], setMenuOpen = _a[1];
    return (<header className={css.siteHeader + " " + (menuOpen ? css.headerOpen : "") + " " + (props.mobileOnly ? css.mobileOnlyHeader : "")}>
      <span className={css.wakaz}>Waqas Tahir</span>
      <nav className={css.navPrimary}>
        <span className={css.mobileMenuToggle} id="mobile-menu-toggle" onClick={function () { return setMenuOpen(!menuOpen); }}>
          <i className="fa fa-bars" aria-hidden="true"/>
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
        <div className={css.mobileMenu + " " + (menuOpen ? css.open : "")} id="mobile-menu">
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
    </header>);
}
exports.default = Header;
