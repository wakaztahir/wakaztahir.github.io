"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var post_item_1 = require("./post-item");
var styled_components_1 = require("styled-components");
var PostsContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var PostsList = function (props) {
    var posts = props.posts;
    return (<PostsContainer>
      {posts.map(function (post) { return <post_item_1.default key={post.id} post={post}/>; })}
    </PostsContainer>);
};
exports.default = PostsList;
var templateObject_1;
