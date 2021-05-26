"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageQuery = void 0;
var React = require("react");
var gatsby_1 = require("gatsby");
var post_excerpt_1 = require("../components/blog/post-excerpt/post-excerpt");
var header_1 = require("../components/header/header");
var css = require("../styles/blog.module.scss");
var MyApp_1 = require("../components/commons/MyApp");
var Blog = function (_a) {
    var edges = _a.data.allMdx.edges;
    //Posts Component
    var Posts = edges
        .filter(function (edge) { return !!edge.node.frontmatter.date; })
        .map(function (edge) { return <post_excerpt_1.default key={edge.node.id} post={edge.node}/>; });
    return (<MyApp_1.default>
      <main>
        <title>Waqas Tahir - Blog</title>
        <header_1.default />
        <div className={"" + css.headerMargin}/>
        <div className="posts-container">
          {Posts}
        </div>
      </main>
    </MyApp_1.default>);
};
exports.default = Blog;
exports.pageQuery = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query {\n    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {\n      edges {\n        node {\n          id\n          excerpt(pruneLength: 250)\n          frontmatter {\n            date(formatString: \"MMMM DD, YYYY\")\n            slug\n            title\n            excerpt\n            image\n            author\n          }\n        }\n      }\n    }\n  }\n"], ["\n  query {\n    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {\n      edges {\n        node {\n          id\n          excerpt(pruneLength: 250)\n          frontmatter {\n            date(formatString: \"MMMM DD, YYYY\")\n            slug\n            title\n            excerpt\n            image\n            author\n          }\n        }\n      }\n    }\n  }\n"])));
var templateObject_1;
