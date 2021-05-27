"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_helmet_1 = require("react-helmet");
var router_1 = require("@reach/router");
var gatsby_1 = require("gatsby");
var SEO = function (_a) {
    var title = _a.title, description = _a.description, lang = _a.lang, image = _a.image, article = _a.article;
    var pathname = router_1.useLocation().pathname;
    var site = gatsby_1.useStaticQuery(query).site;
    // Deconstruct data
    var _b = site.siteMetadata, defaultTitle = _b.defaultTitle, titleTemplate = _b.titleTemplate, defaultDescription = _b.defaultDescription, siteUrl = _b.siteUrl, defaultImage = _b.defaultImage, twitterUsername = _b.twitterUsername;
    // Check if data supplied
    // If not, use defaults
    var seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: "" + siteUrl + (image || defaultImage),
        siteUrl: "" + siteUrl + pathname
    };
    return (<react_helmet_1.Helmet htmlAttributes={{ lang: lang }} title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description}/>
      <meta name="image" content={seo.image}/>
      {seo.siteUrl && <meta property="og:url" content={seo.siteUrl}/>}
      {(article ? true : null) && <meta property="og:type" content="article"/>}
      {seo.title && <meta property="og:title" content={seo.title}/>}
      {seo.description && (<meta property="og:description" content={seo.description}/>)}
      {seo.image && <meta property="og:image" content={seo.image}/>}
      <meta name="twitter:card" content="summary_large_image"/>
      {twitterUsername && (<meta name="twitter:creator" content={twitterUsername}/>)}
      {seo.title && <meta name="twitter:title" content={seo.title}/>}
      {seo.description && (<meta name="twitter:description" content={seo.description}/>)}
      {seo.image && <meta name="twitter:image" content={seo.image}/>}
    </react_helmet_1.Helmet>);
};
SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    lang: "en",
    article: false
};
var query = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query SEO {\n    site {\n      siteMetadata {\n        defaultTitle: title\n        titleTemplate\n        defaultDescription: description\n        siteUrl: siteUrl\n        defaultImage: image\n        twitterUsername\n      }\n    }\n  }\n"], ["\n  query SEO {\n    site {\n      siteMetadata {\n        defaultTitle: title\n        titleTemplate\n        defaultDescription: description\n        siteUrl: siteUrl\n        defaultImage: image\n        twitterUsername\n      }\n    }\n  }\n"])));
exports.default = SEO;
var templateObject_1;
