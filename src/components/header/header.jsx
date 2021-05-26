"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var css = require("./header.module.scss");
var react_1 = require("react");
var icons_1 = require("@material-ui/icons");
var core_1 = require("@material-ui/core");
function Header(props) {
    var _a = react_1.useState(false), menuOpen = _a[0], setMenuOpen = _a[1];
    return (<header className={css.siteHeader + " " + (menuOpen ? css.headerOpen : "") + " " + (props.mobileOnly ? css.mobileOnlyHeader : "")}>
      <span className={css.wakaz}>Waqas Tahir</span>
      <nav className={css.navPrimary}>
        <core_1.IconButton className={css.mobileMenuToggle} onClick={function () { return setMenuOpen(!menuOpen); }}>
          <icons_1.Menu />
        </core_1.IconButton>
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
