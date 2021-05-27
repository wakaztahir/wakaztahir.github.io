"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_helmet_1 = require("react-helmet");
var router_1 = require("@reach/router");
var SEO = function (_a) {
    var title = _a.title, description = _a.description, article = _a.article, image = _a.image;
    var href = router_1.useLocation().href;
    // Check if data supplied
    // If not, use defaults
    var seo = {
        title: title,
        description: description,
        image: "" + href + image,
        siteUrl: "" + href
    };
    return (<react_helmet_1.Helmet htmlAttributes={{ lang: "en" }} title={seo.title + " | " + seo.description}>
      <meta name="description" content={seo.description}/>
      <meta name="image" content={seo.image}/>
      {seo.siteUrl && <meta property="og:url" content={seo.siteUrl}/>}
      {(article ? true : null) && <meta property="og:type" content="article"/>}
      {seo.title && <meta property="og:title" content={seo.title}/>}
      {seo.description && (<meta property="og:description" content={seo.description}/>)}
      {seo.image && <meta property="og:image" content={seo.image}/>}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:creator" content={"@wakaztahir"}/>
      {seo.title && <meta name="twitter:title" content={seo.title}/>}
      {seo.description && (<meta name="twitter:description" content={seo.description}/>)}
      {seo.image && <meta name="twitter:image" content={seo.image}/>}
    </react_helmet_1.Helmet>);
};
SEO.defaultProps = {
    title: "Waqas Tahir",
    description: "Waqas Tahir's Blog",
    image: null,
    article: false
};
exports.default = SEO;
