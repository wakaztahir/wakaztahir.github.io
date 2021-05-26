"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var FacebookIcon_1 = require("../../../public/icons/FacebookIcon");
var TwitterIcon_1 = require("../../../public/icons/TwitterIcon");
var StackoverflowIcon_1 = require("../../../public/icons/StackoverflowIcon");
var GithubIcon_1 = require("../../../public/icons/GithubIcon");
var css = require("./sidebar.module.scss");
var core_1 = require("@material-ui/core");
function Sidebar() {
    return (<aside className={"" + css.asideSidebar}>
      <div className={"" + css.asideTitle}>Waqas Tahir</div>
      <hr style={{ width: "14rem", marginTop: "3rem", marginBottom: "1rem" }}/>
      <nav>
        <a href="/#home">Home</a>
        <a href="/blog">Blog</a>
        <a href="/#projects">Projects</a>
      </nav>
      <section className={"" + css.asideSocial}>
        <a href="https://facebook.com/wakaztahir" target="_blank" rel="noreferrer">
          <core_1.IconButton><FacebookIcon_1.default /></core_1.IconButton>
        </a>
        <a href="https://twitter.com/wakaztahir" target="_blank" rel="noreferrer">
          <core_1.IconButton>
            <TwitterIcon_1.default /></core_1.IconButton>
        </a>
        <a href="https://stackoverflow.com/users/3343503/waqas" rel="noreferrer" target="_blank">
          <core_1.IconButton>
            <StackoverflowIcon_1.default /></core_1.IconButton>
        </a>
        <a href="https://github.com/wakaztahir" target="_blank" rel="noreferrer">
          <core_1.IconButton>
            <GithubIcon_1.default />
          </core_1.IconButton>
        </a>
      </section>
      <section className={"" + css.asideFooter}>
        <span>&copy; 2020 | Built with love</span>
      </section>
    </aside>);
}
exports.default = Sidebar;
