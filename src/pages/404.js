import * as React from "react";
import MyApp from "../components/commons/MyApp";
import SEO from "../components/commons/SEO";
export default function Notfound() {
    return (React.createElement(MyApp, null,
        React.createElement(SEO, { title: "Not Found", description: "Couldn't not find the page you were looking for" }),
        React.createElement("main", { style: { margin: "16px" } },
            React.createElement("div", null,
                React.createElement("h1", null, "404 Not found"),
                React.createElement("p", null, "Couldn't find the page you were looking for , Here are the easy links to main pages of this site"),
                React.createElement("a", { href: "/" },
                    React.createElement("button", null, "Home")),
                React.createElement("a", { href: "/posts" },
                    React.createElement("button", null, "Posts"))))));
}
