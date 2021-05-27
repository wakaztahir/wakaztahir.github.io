"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCardButton = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var CardContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: calc(100% - 2rem);\n  margin: 1rem auto 0;\n  transition: width 0.4s ease-out, height 0.4s ease-out;\n  box-sizing: border-box;\n\n\n  background: rgba(0, 0, 0, .6);\n  padding: 1rem 1rem 5rem;\n  border-radius: 5px;\n  position: relative;\n\n  ", " {\n    width: 16rem;\n    margin: 1rem;\n  }\n"], ["\n  width: calc(100% - 2rem);\n  margin: 1rem auto 0;\n  transition: width 0.4s ease-out, height 0.4s ease-out;\n  box-sizing: border-box;\n\n\n  background: rgba(0, 0, 0, .6);\n  padding: 1rem 1rem 5rem;\n  border-radius: 5px;\n  position: relative;\n\n  ", " {\n    width: 16rem;\n    margin: 1rem;\n  }\n"])), function (props) { return props.theme.breakpoints.up("sm"); });
var CardFooter = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin-right: 1em;\n  margin-bottom: 1em;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin-right: 1em;\n  margin-bottom: 1em;\n"])));
function ProjectCard(props) {
    return (<CardContainer>
      {props.children}

      <CardFooter>
        <div>
          {props.tags.forEach(function (tagName) { return (<span>{tagName}</span>); })}
        </div>
      </CardFooter>
    </CardContainer>);
}
exports.default = ProjectCard;
function ProjectCardButton(props) {
    return (<a href={props.href} target="_blank" rel="noreferrer">
      <button>{props.name}</button>
    </a>);
}
exports.ProjectCardButton = ProjectCardButton;
var templateObject_1, templateObject_2;
