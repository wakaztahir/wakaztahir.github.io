"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageQuery = void 0;
var React = require("react");
var gatsby_1 = require("gatsby");
var MyApp_1 = require("../components/commons/MyApp");
var styled_components_1 = require("styled-components");
var posts_list_1 = require("../components/blog/posts-list");
var blog_sidebar_1 = require("../components/sidebar/blog-sidebar");
var BoxRow = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n"], ["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n"])));
var PostsContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: ", "\n"], ["\n  background: ", "\n"])), function (props) { return props.theme.palette.background.paper; });
var Blog = function (_a) {
    var edges = _a.data.allMdx.edges;
    //Posts Component
    var Posts = edges
        .map(function (edge) { return edge.node; });
    return (<MyApp_1.default>
      <main>
        <BoxRow>
          <blog_sidebar_1.default />
          <PostsContainer>
            <posts_list_1.default posts={Posts}/>
          </PostsContainer>
        </BoxRow>
      </main>
    </MyApp_1.default>);
};
exports.default = Blog;
exports.pageQuery = gatsby_1.graphql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  query {\n    allMdx {\n      edges {\n        node {\n          id\n          excerpt(pruneLength: 300)\n          frontmatter {\n            date(formatString: \"MMMM DD, YYYY\")\n            slug\n            title\n            image\n            author\n          }\n        }\n      }\n    }\n  }\n"], ["\n  query {\n    allMdx {\n      edges {\n        node {\n          id\n          excerpt(pruneLength: 300)\n          frontmatter {\n            date(formatString: \"MMMM DD, YYYY\")\n            slug\n            title\n            image\n            author\n          }\n        }\n      }\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3;
