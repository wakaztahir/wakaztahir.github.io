import React from "react"

import * as css from "../styles/404.module.scss"

export default function Notfound() {
  return (
    <main style={{ margin: "16px" }} className={css.h1thing}>
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
  )
}
