"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var About_1 = require("../components/dialogs/About");
var main_header_1 = require("../components/header/main-header");
var parallax_1 = require("../components/parallax/parallax");
var project_card_1 = require("../components/project-card/project-card");
var main_sidebar_1 = require("../components/sidebar/main-sidebar");
var MyApp_1 = require("../components/commons/MyApp");
var material_1 = require("@mui/material");
var MyButton_1 = require("../components/commons/MyButton");
var styled_components_1 = require("styled-components");
var SEO_1 = require("../components/commons/SEO");
var icons_material_1 = require("@mui/icons-material");
var PlaystoreIcon_1 = require("../components/icons/PlaystoreIcon");
var Container = styled_components_1.default.main(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n\n  ", " {\n    flex-direction: row;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n\n  ", " {\n    flex-direction: row;\n  }\n"])), function (props) { return props.theme.breakpoints.up("md"); });
var ContentSection = styled_components_1.default.section(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  padding: 5rem 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"], ["\n  width: 100%;\n  padding: 5rem 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
var HomeSection = (0, styled_components_1.default)(ContentSection)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  min-height: 100vh;\n  padding: 0;\n"], ["\n  min-height: 100vh;\n  padding: 0;\n"])));
var ProjectsSection = (0, styled_components_1.default)(ContentSection)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  min-height: 60vh;\n  padding-top: 0;\n\n  ", " {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n"], ["\n  min-height: 60vh;\n  padding-top: 0;\n\n  ", " {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n"])), function (props) { return props.theme.breakpoints.up("md"); });
var MainTitle = (0, styled_components_1.default)(material_1.Typography)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: white;\n"], ["\n  color: white;\n"])));
var MainDescription = (0, styled_components_1.default)(material_1.Typography)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: white;\n  margin-top: 0.5em;\n"], ["\n  color: white;\n  margin-top: 0.5em;\n"])));
var MainButton = (0, styled_components_1.default)(MyButton_1.default)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin-top: 1em;\n"], ["\n  margin-top: 1em;\n"])));
function Home() {
    var _a = (0, react_1.useState)(false), aboutDialogOpen = _a[0], setAboutDialog = _a[1];
    return (<MyApp_1.default>
      <SEO_1.default title={"Trying My Best"}/>
      <Container>
        <material_1.Hidden mdUp={true}>
          <main_header_1.default />
        </material_1.Hidden>
        <material_1.Hidden mdDown={true}>
          <main_sidebar_1.default />
        </material_1.Hidden>
        <About_1.default open={aboutDialogOpen} onClose={function () {
            setAboutDialog(false);
        }}/>
        <parallax_1.default>
          <HomeSection id="home">
            <MainTitle variant={"h3"}>Hi , I am Waqas.</MainTitle>
            <MainDescription>a lazy software developer</MainDescription>
            <MainButton onClick={function () {
            setAboutDialog(true);
        }}>
              About Me
            </MainButton>
            <a href={"/WaqasTahirCV.pdf"} download={"waqas-tahir-cv.pdf"}>
              <MainButton>
                Download CV
              </MainButton>
            </a>
          </HomeSection>
          <ProjectsSection id="projects">
            <TimelineCard />
            <ReactStaggeredGridCard />
            <AcadtableCard />
            <ComposeDraggableListCard />
            <MusicLandingPageCard />
          </ProjectsSection>
        </parallax_1.default>
      </Container>
    </MyApp_1.default>);
}
exports.default = Home;
function ComposeDraggableListCard() {
    var theme = (0, material_1.useTheme)();
    return (<project_card_1.default tags={["August 2021"]}>
      <project_card_1.ProjectCardTitle>Compose Draggable List</project_card_1.ProjectCardTitle>
      <project_card_1.ProjectCardDescription>
        Its a Jetpack Compose library for android that creates a draggable list
      </project_card_1.ProjectCardDescription>
      <project_card_1.ProjectCardLink href="https://github.com/wakaztahir/compose-draggable-list">
        Github
      </project_card_1.ProjectCardLink>
      {/*<ProjectIcons>*/}
      {/*  <Android style={{ color: theme.palette.mode === "dark" ? "#6ad43d" : "#3e8e2e" }} />*/}
      {/*</ProjectIcons>*/}
    </project_card_1.default>);
}
function ReactStaggeredGridCard() {
    var theme = (0, material_1.useTheme)();
    return (<project_card_1.default tags={["June 2021"]}>
      <project_card_1.ProjectCardTitle>React Staggered Grid</project_card_1.ProjectCardTitle>
      <project_card_1.ProjectCardDescription>
        This is a npm package that creates a staggered grid in React
      </project_card_1.ProjectCardDescription>
      <project_card_1.ProjectCardLink href="https://wakaztahir.github.io/react-staggered-grid/">
        Live Demo
      </project_card_1.ProjectCardLink>
      <project_card_1.ProjectCardLink href="https://github.com/wakaztahir/react-staggered-grid">
        Github
      </project_card_1.ProjectCardLink>
      {/*<ProjectIcons>*/}
      {/*  <Language*/}
      {/*    style={{*/}
      {/*      color: theme.palette.mode === "dark" ? "rgba(255,255,255,.7)" : "rgba(0,0,0,.7)"*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</ProjectIcons>*/}
    </project_card_1.default>);
}
var CenteredRow = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
function useIconColorProps() {
    var theme = (0, material_1.useTheme)();
    return {
        style: {
            color: theme.palette.mode === "dark" ? "rgba(255,255,255,.7)" : "rgba(0,0,0,.7)"
        }
    };
}
function TimelineCard() {
    var theme = (0, material_1.useTheme)();
    return (<project_card_1.default tags={["March 2021"]}>
      <project_card_1.ProjectCardTitle>Timeline</project_card_1.ProjectCardTitle>
      <project_card_1.ProjectCardDescription>
        A Material Designed Web & Android App inspired by Google Keep to make notes and organize
        your information.
      </project_card_1.ProjectCardDescription>
      <project_card_1.ProjectCardLinkWithIcon path="https://qawaz.github.io/timeline" icon={<icons_material_1.Language {...useIconColorProps()}/>} text={"Website"}/>
      {/*<ProjectCardLink href="https://qawaz.github.io/timeline">*/}
      {/*  <CenteredRow><Language {...useIconColorProps()}/>&nbsp;&nbsp;<span>Website</span></CenteredRow>*/}
      {/*</ProjectCardLink>*/}
      <project_card_1.ProjectCardLink href="https://play.google.com/store/apps/details?id=com.wakaztahir.timeline">
        <CenteredRow><PlaystoreIcon_1.default />&nbsp;&nbsp;<span>PlayStore</span></CenteredRow>
      </project_card_1.ProjectCardLink>
      {/*<ProjectIcons>*/}
      {/*  <Language*/}
      {/*    style={{*/}
      {/*      color: theme.palette.mode === "dark" ? "rgba(255,255,255,.7)" : "rgba(0,0,0,.7)"*/}
      {/*    }}*/}
      {/*  />*/}
      {/*  &nbsp;&nbsp;*/}
      {/*  <Android style={{ color: theme.palette.mode === "dark" ? "#6ad43d" : "#3e8e2e" }} />*/}
      {/*</ProjectIcons>*/}
    </project_card_1.default>);
}
function AcadtableCard() {
    var theme = (0, material_1.useTheme)();
    return (<project_card_1.default tags={["August 2020"]}>
      <project_card_1.ProjectCardTitle>Acadtable</project_card_1.ProjectCardTitle>
      <project_card_1.ProjectCardDescription>
        Online <strong>react</strong> application that allows the users
        to make academic time tables.
        <br />
      </project_card_1.ProjectCardDescription>
      <project_card_1.ProjectCardLink href="https://wakaztahir.github.io/acadtable/">
        Live Demo
      </project_card_1.ProjectCardLink>
      <project_card_1.ProjectCardLink href="https://github.com/wakaztahir/acadtable">
        Github
      </project_card_1.ProjectCardLink>
      {/*<ProjectIcons>*/}
      {/*  <Language*/}
      {/*    style={{*/}
      {/*      color: theme.palette.mode === "dark" ? "rgba(255,255,255,.7)" : "rgba(0,0,0,.7)"*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</ProjectIcons>*/}
    </project_card_1.default>);
}
function MusicLandingPageCard() {
    var theme = (0, material_1.useTheme)();
    return (<project_card_1.default tags={["August 2019"]}>
      <project_card_1.ProjectCardTitle>Music Landing Page</project_card_1.ProjectCardTitle>
      <project_card_1.ProjectCardDescription>
        A Wordpress Plugin I built in PHP that helps creates a landing page
        for songs linking to different stores its available in
      </project_card_1.ProjectCardDescription>
      <project_card_1.ProjectCardLink href="https://github.com/wakaztahir/musiclandingpage">
        Github
      </project_card_1.ProjectCardLink>
      {/*<ProjectIcons>*/}
      {/*  <Language*/}
      {/*    style={{*/}
      {/*      color: theme.palette.mode === "dark" ? "rgba(255,255,255,.7)" : "rgba(0,0,0,.7)"*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</ProjectIcons>*/}
    </project_card_1.default>);
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
