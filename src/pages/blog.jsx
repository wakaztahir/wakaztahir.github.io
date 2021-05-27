"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageQuery = void 0;
var React = require("react");
var gatsby_1 = require("gatsby");
var post_card_1 = require("../components/blog/post-card");
var MyApp_1 = require("../components/commons/MyApp");
var base_sidebar_1 = require("../components/sidebar/base-sidebar");
var styled_components_1 = require("styled-components");
var BoxRow = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n"], ["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n"])));
var Blog = function (_a) {
    var edges = _a.data.allMdx.edges;
    //Posts Component
    var Posts = edges
        .filter(function (edge) { return !!edge.node.frontmatter.date; })
        .map(function (edge) { return <post_card_1.default key={edge.node.id} post={edge.node}/>; });
    return (<MyApp_1.default>
      <main>
        <BoxRow>
          <base_sidebar_1.default />
          <div className="posts-container">
            {Posts}
          </div>
        </BoxRow>
      </main>
    </MyApp_1.default>);
};
exports.default = Blog;
exports.pageQuery = gatsby_1.graphql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query {\n    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {\n      edges {\n        node {\n          id\n          frontmatter {\n            date(formatString: \"MMMM DD, YYYY\")\n            slug\n            title\n            image\n            author\n          }\n        }\n      }\n    }\n  }\n"], ["\n  query {\n    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {\n      edges {\n        node {\n          id\n          frontmatter {\n            date(formatString: \"MMMM DD, YYYY\")\n            slug\n            title\n            image\n            author\n          }\n        }\n      }\n    }\n  }\n"])));
var templateObject_1, templateObject_2;
