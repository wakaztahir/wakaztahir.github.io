"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var css = require("../styles/404.module.scss");
function Notfound() {
    return (<main style={{ margin: "16px" }} className={css.h1thing}>
      <div>
        <h1>404 Not found</h1>
        <p>
          Couldn't find the page you were looking for , Here are the easy links
          to main pages of this site
        </p>
        <a href="/">
          <button>Home</button>
        </a>
        <a href="/posts">
          <button>Posts</button>
        </a>
      </div>
    </main>);
}
exports.default = Notfound;
