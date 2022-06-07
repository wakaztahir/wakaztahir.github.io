"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var material_1 = require("@mui/material");
var base_sidebar_1 = require("./base-sidebar");
var styled_components_1 = require("styled-components");
var main_header_1 = require("../header/main-header");
var FacebookIcon_1 = require("../icons/FacebookIcon");
var TwitterIcon_1 = require("../icons/TwitterIcon");
var StackoverflowIcon_1 = require("../icons/StackoverflowIcon");
var GithubIcon_1 = require("../icons/GithubIcon");
var SideNav = styled_components_1.default.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-items: center;\n\n  & > * {\n    margin-top: 0.5em;\n  }\n\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-items: center;\n\n  & > * {\n    margin-top: 0.5em;\n  }\n\n"])));
var SideSeparator = styled_components_1.default.hr(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 80%;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n"], ["\n  width: 80%;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n"])));
var SideSocial = styled_components_1.default.section(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-top: 2em;\n"], ["\n  margin-top: 2em;\n"])));
var SideFooter = styled_components_1.default.section(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-top: 1em;\n"], ["\n  margin-top: 1em;\n"])));
function MainSidebar() {
    return (<base_sidebar_1.default>
      <material_1.Typography variant={"h2"} align={"center"} color={"textPrimary"}>Waqas Tahir</material_1.Typography>
      <SideSeparator />
      <SideNav>
        <main_header_1.SiteMenu useButtons={true}/>
      </SideNav>
      <SideSocial>
        <a href="https://facebook.com/wakaztahir" target="_blank" rel="noreferrer">
          <material_1.IconButton size="large"><FacebookIcon_1.default /></material_1.IconButton>
        </a>
        <a href="https://twitter.com/wakaztahir" target="_blank" rel="noreferrer">
          <material_1.IconButton size="large">
            <TwitterIcon_1.default /></material_1.IconButton>
        </a>
        <a href="https://stackoverflow.com/users/3343503/waqas" rel="noreferrer" target="_blank">
          <material_1.IconButton size="large">
            <StackoverflowIcon_1.default /></material_1.IconButton>
        </a>
        <a href="https://github.com/wakaztahir" target="_blank" rel="noreferrer">
          <material_1.IconButton size="large">
            <GithubIcon_1.default />
          </material_1.IconButton>
        </a>
      </SideSocial>
      <SideFooter>
        <material_1.Typography variant={"caption"} color={"textPrimary"}>&copy; 2020 | Built with love</material_1.Typography>
      </SideFooter>
    </base_sidebar_1.default>);
}
exports.default = MainSidebar;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
