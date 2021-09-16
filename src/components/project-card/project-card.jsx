"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectIcons = exports.ProjectCardLink = exports.ProjectCardDescription = exports.ProjectCardTitle = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var core_1 = require("@material-ui/core");
var MyButton_1 = require("../commons/MyButton");
var CardContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: calc(100% - 2rem);\n  margin: 1rem auto 0;\n  transition: width 0.4s ease-out, height 0.4s ease-out;\n  box-sizing: border-box;\n\n\n  background: ", ";\n  padding: 1rem 1rem 1rem;\n  border-radius: 5px;\n  position: relative;\n\n  ", " {\n    width: 16rem;\n    margin: 1rem;\n  }\n"], ["\n  width: calc(100% - 2rem);\n  margin: 1rem auto 0;\n  transition: width 0.4s ease-out, height 0.4s ease-out;\n  box-sizing: border-box;\n\n\n  background: ", ";\n  padding: 1rem 1rem 1rem;\n  border-radius: 5px;\n  position: relative;\n\n  ", " {\n    width: 16rem;\n    margin: 1rem;\n  }\n"])), function (props) { return props.theme.palette.type === "dark" ? "rgba(0, 0, 0, .6)" : "rgba(255, 255, 255, .6)"; }, function (props) { return props.theme.breakpoints.up("sm"); });
var CardFooter = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-top: 1em;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-top: 1em;\n"])));
exports.ProjectCardTitle = styled_components_1.default(function (props) { return (<core_1.Typography variant={"h4"} color={"textPrimary"} {...props}/>); })(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-top: 0.5em;\n"], ["\n  margin-top: 0.5em;\n"])));
exports.ProjectCardDescription = styled_components_1.default(function (props) { return (<core_1.Typography variant={"body1"} color={"textPrimary"} {...props}/>); })(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-top: 1em;\n"], ["\n  margin-top: 1em;\n"])));
var PLink = styled_components_1.default.a(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: block;\n  margin-top: 1em;\n"], ["\n  display: block;\n  margin-top: 1em;\n"])));
exports.ProjectCardLink = styled_components_1.default(function (props) { return (<PLink href={props.href} target={"_blank"}><MyButton_1.default>{props.children}</MyButton_1.default></PLink>); })(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n"], ["\n"])));
exports.ProjectIcons = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-top: 1em;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-top: 1em;\n"])));
var TagsContainer = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var ProjectCard = function (props) {
    return (<CardContainer>
      {props.children}
      <CardFooter>
        <TagsContainer>
          {props.tags.map(function (tagName) { return (<core_1.Typography key={tagName} variant={"caption"} color={"textSecondary"}>{tagName}</core_1.Typography>); })}
        </TagsContainer>
      </CardFooter>
    </CardContainer>);
};
ProjectCard.defaultProps = {
    tags: []
};
exports.default = ProjectCard;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
