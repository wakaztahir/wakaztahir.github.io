"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var core_1 = require("@material-ui/core");
var PostContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 2em;\n  margin: 2em;\n  border-radius: 4px;\n  background: ", ";\n"], ["\n  padding: 2em;\n  margin: 2em;\n  border-radius: 4px;\n  background: ", ";\n"])), function (props) { return props.theme.palette.type === "dark" ? "rgba(255, 255, 255, .2)" : "rgba(0, 0, 0, .2)"; });
var PostTitle = styled_components_1.default(function (props) { return <core_1.Typography variant={"h3"} {...props}/>; })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: block;\n"], ["\n  display: block;\n"])));
var PostExcerpt = styled_components_1.default(function (props) { return <core_1.Typography variant={"body1"} {...props}/>; })(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n"], ["\n  display: block;\n"])));
var PostDate = styled_components_1.default(core_1.Typography)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: block;\n"], ["\n  display: block;\n"])));
var PostItem = function (_a) {
    var post = _a.post;
    return (<PostContainer>
      <PostTitle>{post.frontmatter.title}</PostTitle>
      <PostExcerpt>{post.excerpt}</PostExcerpt>
    </PostContainer>);
};
exports.default = PostItem;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
