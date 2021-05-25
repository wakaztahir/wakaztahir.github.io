"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCardButton = void 0;
var React = require("react");
var css = require("./project-card.module.scss");
function ProjectCard(props) {
    return (<div className={css.project + " " + css.card}>
      {props.children}

      <div className={"" + css.rightBottom}>
        <div className={"" + css.links}></div>
        <div className={"" + css.tags}>
          {props.tags.forEach(function (tagName) { return (<span>{tagName}</span>); })}
        </div>
      </div>
    </div>);
}
exports.default = ProjectCard;
function ProjectCardButton(props) {
    return (<a href={props.href} target="_blank" rel="noreferrer">
      <button>{props.name}</button>
    </a>);
}
exports.ProjectCardButton = ProjectCardButton;
