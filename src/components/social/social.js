import React from "react"

import "./social.scss"

export default function Social() {
  return (
    <section class="social">
      <a
        href="https://facebook.com/wakaztahir"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa fa-facebook-f"></i>
      </a>
      <a href="https://twitter.com/wakaztahir" target="_blank" rel="noreferrer">
        <i class="fa fa-twitter"></i>
      </a>
      <a
        href="https://stackoverflow.com/users/3343503/waqas"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa fa-stack-overflow"></i>
      </a>
      <a href="https://github.com/wakaztahir" target="_blank" rel="noreferrer">
        <i class="fa fa-github"></i>
      </a>
    </section>
  )
}
