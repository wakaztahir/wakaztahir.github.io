"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var css = require("./social.module.scss");
function Social() {
    return (<section className={"" + css.social}>
      <a href="https://facebook.com/wakaztahir" target="_blank" rel="noreferrer">
        <i className="fa fa-facebook-f"/>
      </a>
      <a href="https://twitter.com/wakaztahir" target="_blank" rel="noreferrer">
        <i className="fa fa-twitter"/>
      </a>
      <a href="https://stackoverflow.com/users/3343503/waqas" target="_blank" rel="noreferrer">
        <i className="fa fa-stack-overflow"/>
      </a>
      <a href="https://github.com/wakaztahir" target="_blank" rel="noreferrer">
        <i className="fa fa-github"/>
      </a>
    </section>);
}
exports.default = Social;
