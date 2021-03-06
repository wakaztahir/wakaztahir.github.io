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
var core_1 = require("@material-ui/core");
var MyButton_1 = require("../components/commons/MyButton");
var styled_components_1 = require("styled-components");
var SEO_1 = require("../components/commons/SEO");
var Container = styled_components_1.default.main(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n\n  ", " {\n    flex-direction: row;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n\n  ", " {\n    flex-direction: row;\n  }\n"])), function (props) { return props.theme.breakpoints.up("md"); });
var ContentSection = styled_components_1.default.section(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  padding: 5rem 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"], ["\n  width: 100%;\n  padding: 5rem 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
var HomeSection = styled_components_1.default(ContentSection)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  min-height: 100vh;\n  padding: 0;\n"], ["\n  min-height: 100vh;\n  padding: 0;\n"])));
var ProjectsSection = styled_components_1.default(ContentSection)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  min-height: 60vh;\n  padding-top: 0;\n\n  ", " {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n"], ["\n  min-height: 60vh;\n  padding-top: 0;\n\n  ", " {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n"])), function (props) { return props.theme.breakpoints.up("md"); });
var MainTitle = styled_components_1.default(core_1.Typography)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: white;\n"], ["\n  color: white;\n"])));
var MainDescription = styled_components_1.default(core_1.Typography)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: white;\n  margin-top: 0.5em;\n"], ["\n  color: white;\n  margin-top: 0.5em;\n"])));
var MainButton = styled_components_1.default(MyButton_1.default)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin-top: 1em;\n"], ["\n  margin-top: 1em;\n"])));
function Home() {
    var _a = react_1.useState(false), aboutDialogOpen = _a[0], setAboutDialog = _a[1];
    return (<MyApp_1.default>
      <SEO_1.default title={"Trying My Best"}/>
      <Container>
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
          <HomeSection id="home">
            <MainTitle variant={"h3"}>Hi , I am Waqas.</MainTitle>
            <MainDescription>a lazy software developer</MainDescription>
            <MainButton onClick={function () {
            setAboutDialog(true);
        }}>
              About Me
            </MainButton>
          </HomeSection>
          <ProjectsSection id="projects">
            <project_card_1.default tags={["March 2021"]}>
              <project_card_1.ProjectCardTitle>Timeline</project_card_1.ProjectCardTitle>
              <project_card_1.ProjectCardDescription>
                A Material Design Web App inspired by Google Keep to make notes and organize
                your information , Data
                is synced to google drive.
              </project_card_1.ProjectCardDescription>
              <project_card_1.ProjectCardLink href="https://timeline-notes.github.io/web">
                Live Demo
              </project_card_1.ProjectCardLink>
            </project_card_1.default>
            <project_card_1.default tags={["August 2020"]}>
              <project_card_1.ProjectCardTitle>Acadtable</project_card_1.ProjectCardTitle>
              <project_card_1.ProjectCardDescription>
                Online <strong>react</strong> application that allows the users
                to make academic time tables.
                <br />
                This is a block based table generator application.
              </project_card_1.ProjectCardDescription>
              <project_card_1.ProjectCardLink href="https://wakaztahir.github.io/acadtable/">
                Live Demo
              </project_card_1.ProjectCardLink>
            </project_card_1.default>
          </ProjectsSection>
        </parallax_1.default>
      </Container>
    </MyApp_1.default>);
}
exports.default = Home;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
