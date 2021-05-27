"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var FacebookIcon_1 = require("../../../public/icons/FacebookIcon");
var TwitterIcon_1 = require("../../../public/icons/TwitterIcon");
var StackoverflowIcon_1 = require("../../../public/icons/StackoverflowIcon");
var GithubIcon_1 = require("../../../public/icons/GithubIcon");
var core_1 = require("@material-ui/core");
var base_sidebar_1 = require("./base-sidebar");
var styled_components_1 = require("styled-components");
var main_header_1 = require("../header/main-header");
var SideNav = styled_components_1.default.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-items: center;\n\n  & > * {\n    margin-top: 0.5em;\n  }\n\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-items: center;\n\n  & > * {\n    margin-top: 0.5em;\n  }\n\n"])));
var SideSeparator = styled_components_1.default.hr(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 80%;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n"], ["\n  width: 80%;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n"])));
var SideSocial = styled_components_1.default.section(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-top: 2em;\n"], ["\n  margin-top: 2em;\n"])));
var SideFooter = styled_components_1.default.section(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-top: 1em;\n"], ["\n  margin-top: 1em;\n"])));
function MainSidebar() {
    return (<base_sidebar_1.default>
      <core_1.Typography variant={"h2"} align={"center"} color={"textPrimary"}>Waqas Tahir</core_1.Typography>
      <SideSeparator />
      <SideNav>
        <main_header_1.SiteMenu useButtons={true}/>
      </SideNav>
      <SideSocial>
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
      </SideSocial>
      <SideFooter>
        <core_1.Typography variant={"caption"} color={"textPrimary"}>&copy; 2020 | Built with love</core_1.Typography>
      </SideFooter>
    </base_sidebar_1.default>);
}
exports.default = MainSidebar;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
