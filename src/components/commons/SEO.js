import * as React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
const SEO = ({ title, description, article, image }) => {
    const { href } = useLocation();
    // Check if data supplied
    // If not, use defaults
    const seo = {
        title: title,
        description: description,
        image: `${href}${image}`,
        siteUrl: `${href}`
    };
    return (React.createElement(Helmet, { htmlAttributes: { lang: "en" }, title: `Waqas Tahir | ${seo.title}` },
        React.createElement("meta", { name: "description", content: seo.description }),
        React.createElement("meta", { name: "image", content: seo.image }),
        seo.siteUrl && React.createElement("meta", { property: "og:url", content: seo.siteUrl }),
        (article ? true : null) && React.createElement("meta", { property: "og:type", content: "article" }),
        seo.title && React.createElement("meta", { property: "og:title", content: seo.title }),
        seo.description && (React.createElement("meta", { property: "og:description", content: seo.description })),
        seo.image && React.createElement("meta", { property: "og:image", content: seo.image }),
        React.createElement("meta", { name: "twitter:card", content: "summary_large_image" }),
        React.createElement("meta", { name: "twitter:creator", content: "@wakaztahir" }),
        seo.title && React.createElement("meta", { name: "twitter:title", content: seo.title }),
        seo.description && (React.createElement("meta", { name: "twitter:description", content: seo.description })),
        seo.image && React.createElement("meta", { name: "twitter:image", content: seo.image })));
};
SEO.defaultProps = {
    title: "Waqas Tahir",
    description: "Waqas Tahir's Blog",
    image: null,
    article: false
};
export default SEO;
