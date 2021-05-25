"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var css = require("./parallax.module.scss");
function Parallax(props) {
    return (<div className={css.content + " " + css.parallax}>
      <div className={css.wrap + " " + css.gradientLayer}>{props.children}</div>
    </div>);
}
exports.default = Parallax;
