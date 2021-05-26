"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function default_1(props) {
    var text = props.text;
    return (<button onClick={props.onClick}>
      {text}
    </button>);
}
exports.default = default_1;
