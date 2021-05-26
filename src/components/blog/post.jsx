"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageQuery = void 0;
var React = require("react");
var gatsby_1 = require("gatsby");
var gatsby_plugin_mdx_1 = require("gatsby-plugin-mdx");
function Template(_a) {
    var data = _a.data;
    var _b = data.mdx, frontmatter = _b.frontmatter, body = _b.body;
    return (<div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <gatsby_plugin_mdx_1.MDXRenderer>{body}</gatsby_plugin_mdx_1.MDXRenderer>
      </div>
    </div>);
}
exports.default = Template;
exports.pageQuery = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query($slug: String!) {\n    mdx(frontmatter: { slug: { eq: $slug } }) {\n      body\n      frontmatter {\n        date(formatString: \"MMMM DD, YYYY\")\n        slug\n        title\n        excerpt\n      }\n    }\n  }\n"], ["\n  query($slug: String!) {\n    mdx(frontmatter: { slug: { eq: $slug } }) {\n      body\n      frontmatter {\n        date(formatString: \"MMMM DD, YYYY\")\n        slug\n        title\n        excerpt\n      }\n    }\n  }\n"])));
var templateObject_1;
