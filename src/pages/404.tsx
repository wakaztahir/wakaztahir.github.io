import * as React from "react"

import MyApp from "../components/commons/MyApp"

export default function Notfound() {
  return (
    <MyApp>
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
    </MyApp>
  )
}
