"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
var React = require("react");
var gatsby_1 = require("gatsby");
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
var gatsby_plugin_mdx_1 = require("gatsby-plugin-mdx");
var SEO_1 = require("../commons/SEO");
var PostTemplate = function (_a) {
    var data = _a.data;
    var _b = data.mdx.frontmatter, title = _b.title, date = _b.date, author = _b.author, image = _b.image;
    var body = data.mdx.body;
    var img = gatsby_plugin_image_1.getImage(image.childImageSharp.gatsbyImageData);
    return (<React.Fragment>
      <SEO_1.default title={title} article={true} image={image}/>
      <section>
        <gatsby_1.Link className="btn" to="/">
          Back to all posts
        </gatsby_1.Link>
        <div>
          <h1>{title}</h1>
          <h4>
            <span>Written by {author}</span> & Posted on <span>{date}</span>
          </h4>
        </div>
        <gatsby_plugin_image_1.GatsbyImage image={img} alt="Blog Post"/>
        <div>
          <gatsby_plugin_mdx_1.MDXRenderer>{body}</gatsby_plugin_mdx_1.MDXRenderer>
        </div>
        <h4>
          <span>Written by {author}</span> & Posted on <span>{date}</span>
        </h4>
      </section>
    </React.Fragment>);
};
exports.query = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query getPost($slug: String!) {\n    mdx(frontmatter: { slug: { eq: $slug } }) {\n      frontmatter {\n        title\n        slug\n        date(formatString: \"MMMM Do, YYYY\")\n        author\n        image\n      }\n      body\n    }\n  }\n"], ["\n  query getPost($slug: String!) {\n    mdx(frontmatter: { slug: { eq: $slug } }) {\n      frontmatter {\n        title\n        slug\n        date(formatString: \"MMMM Do, YYYY\")\n        author\n        image\n      }\n      body\n    }\n  }\n"])));
exports.default = PostTemplate;
var templateObject_1;
