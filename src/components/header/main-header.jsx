"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteMenu = void 0;
var React = require("react");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var MyButton_1 = require("../commons/MyButton");
var Header = styled_components_1.default.header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  width: 100vw;\n  height: 4rem;\n  background: ", ";\n  position: fixed;\n  top: 0;\n  z-index: 9;\n  align-items: center;\n  transition: background .5s ease-in-out;\n"], ["\n  display: flex;\n  width: 100vw;\n  height: 4rem;\n  background: ", ";\n  position: fixed;\n  top: 0;\n  z-index: 9;\n  align-items: center;\n  transition: background .5s ease-in-out;\n"])), function (props) { return props.theme.palette.mode === "light" ? "rgba(255, 255, 255, .4)" : "rgba(0, 0, 0, .4)"; });
var HeaderTitle = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%);\n  font-size: 1.5rem;\n\n  ", " {\n    position: static;\n    left: 0;\n    transform: translate(0%);\n    font-size: 1.2rem;\n    margin-left: 1em;\n  }\n"], ["\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%);\n  font-size: 1.5rem;\n\n  ", " {\n    position: static;\n    left: 0;\n    transform: translate(0%);\n    font-size: 1.2rem;\n    margin-left: 1em;\n  }\n"])), function (props) { return props.theme.breakpoints.up("sm"); });
var HeaderNav = styled_components_1.default.nav(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var MobileMenuToggle = (0, styled_components_1.default)(function (props) {
    return <material_1.IconButton {...props} size="large"><icons_material_1.Menu /></material_1.IconButton>;
})(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 2rem;\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 1em;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  font-size: 2rem;\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 1em;\n\n  ", " {\n    display: none;\n  }\n"])), function (props) { return props.theme.breakpoints.up("sm"); });
var DesktopMenu = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: none;\n  position: absolute;\n  top: 2rem;\n  right: 2em;\n  transform: translateY(-50%);\n\n  & > * {\n    margin-left: 0.2em;\n    margin-right: 0.2em;\n  }\n\n  ", " {\n    display: block;\n  }\n"], ["\n  display: none;\n  position: absolute;\n  top: 2rem;\n  right: 2em;\n  transform: translateY(-50%);\n\n  & > * {\n    margin-left: 0.2em;\n    margin-right: 0.2em;\n  }\n\n  ", " {\n    display: block;\n  }\n"])), function (props) { return props.theme.breakpoints.up("sm"); });
var MobileMenu = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100vw;\n  max-height: ", ";\n  position: absolute;\n  top: 4rem;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n\n  & > * {\n    width: 100%;\n    padding-top: 0.75em;\n    padding-bottom: 0.75em;\n    text-align: center;\n    background: ", ";\n    transition: background 0.3s ease-out;\n  }\n\n  & > *:hover {\n    background: ", ";\n  }\n\n  & a {\n    text-decoration: none;\n  }\n\n  ", " {\n    max-height: 0;\n  }\n"], ["\n  width: 100vw;\n  max-height: ", ";\n  position: absolute;\n  top: 4rem;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n\n  & > * {\n    width: 100%;\n    padding-top: 0.75em;\n    padding-bottom: 0.75em;\n    text-align: center;\n    background: ", ";\n    transition: background 0.3s ease-out;\n  }\n\n  & > *:hover {\n    background: ", ";\n  }\n\n  & a {\n    text-decoration: none;\n  }\n\n  ", " {\n    max-height: 0;\n  }\n"])), function (props) { return props.isOpen ? "400px" : "0px"; }, function (props) { return props.theme.palette.mode === "dark" ? "rgba(0, 0, 0, .4)" : "rgba(255, 255, 255, .4)"; }, function (props) { return props.theme.palette.mode === "dark" ? "rgba(0, 0, 0, .5)" : "rgba(255, 255, 255, .5)"; }, function (props) { return props.theme.breakpoints.up("sm"); });
function MainHeader(props) {
    var _a = (0, react_1.useState)(false), menuOpen = _a[0], setMenuOpen = _a[1];
    return (<Header>
      <HeaderTitle><material_1.Typography color={"textPrimary"}>Waqas Tahir</material_1.Typography></HeaderTitle>
      <HeaderNav>
        <MobileMenuToggle onClick={function () { return setMenuOpen(!menuOpen); }}/>
        <DesktopMenu>
          <SiteMenu useButtons={true}/>
        </DesktopMenu>
        <MobileMenu isOpen={menuOpen}>
          <SiteMenu />
        </MobileMenu>
      </HeaderNav>
    </Header>);
}
exports.default = MainHeader;
function SiteMenu(props) {
    var Wrapper = function (wProps) { return props.useButtons != null && props.useButtons === true ? (<MyButton_1.default {...wProps}/>) : (<material_1.Typography {...wProps} color={"textPrimary"}/>); };
    return (<React.Fragment>
      <a href="/#home"><Wrapper>Home</Wrapper></a>
      <a href="/#projects"><Wrapper>Projects</Wrapper></a>
    </React.Fragment>);
}
exports.SiteMenu = SiteMenu;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
