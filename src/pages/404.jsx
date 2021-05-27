"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var MyApp_1 = require("../components/commons/MyApp");
var SEO_1 = require("../components/commons/SEO");
function Notfound() {
    return (<MyApp_1.default>
      <SEO_1.default title={"Not Found"} description={"Couldn't not find the page you were looking for"}/>
      <main style={{ margin: "16px" }}>
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
      </main>
    </MyApp_1.default>);
}
exports.default = Notfound;
