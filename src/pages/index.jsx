"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var React = require("react");
var About_1 = require("../components/dialogs/About");
var main_header_1 = require("../components/header/main-header");
var parallax_1 = require("../components/parallax/parallax");
var project_card_1 = require("../components/project-card/project-card");
var main_sidebar_1 = require("../components/sidebar/main-sidebar");
var css = require("../styles/main-page.module.scss");
var MyApp_1 = require("../components/commons/MyApp");
var core_1 = require("@material-ui/core");
var MyButton_1 = require("../components/commons/MyButton");
function Home() {
    var _a = react_1.useState(false), aboutDialogOpen = _a[0], setAboutDialog = _a[1];
    return (<MyApp_1.default>
      <main className={css.container}>
        <title>Waqas Tahir | Trying My Best</title>
        <core_1.Hidden mdUp={true}>
          <main_header_1.default />
        </core_1.Hidden>
        <core_1.Hidden smDown={true}>
          <main_sidebar_1.default />
        </core_1.Hidden>
        <About_1.default open={aboutDialogOpen} onClose={function () {
            setAboutDialog(false);
        }}/>
        <parallax_1.default>
          <section id="home" className={css.centered + " " + css.contentSection + " " + css.home}>
            <h1 className="h-text">Hi , I am Waqas.</h1>
            <p>software developer</p>
            <MyButton_1.default onClick={function () {
            setAboutDialog(true);
        }}>
              About Me
            </MyButton_1.default>
          </section>
          <section id="projects" className={css.contentSection + " " + css.projects}>
            <div className={css.projects}>
              <project_card_1.default tags={["March 2021"]}>
                <h1>Timeline</h1>
                <p>
                  A Web App to make notes and organize your information , Data is
                  stored locally and in cloud so you never lose it , secured with
                  strong encryption
                </p>
                <a href="https://timeline-notes.github.io/web" target={"_blank"}>
                  <MyButton_1.default>Live Demo</MyButton_1.default>
                </a>
              </project_card_1.default>
              <project_card_1.default tags={["August 2020"]}>
                <h1>Acadtable</h1>
                <p>
                  Online <strong>react</strong> application that allows the users
                  to make academic time tables.
                  <br />
                  This is a block based table generator application.
                </p>
                <a href="https://wakaztahir.github.io/acadtable/" target={"_blank"}>
                  <MyButton_1.default>Live Demo</MyButton_1.default>
                </a>
              </project_card_1.default>
            </div>
          </section>
        </parallax_1.default>
      </main>
    </MyApp_1.default>);
}
exports.default = Home;
