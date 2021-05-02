import React from "react"

import * as css from "./parallax.module.scss"

export default function Parallax(props) {
  return (
    <div className={`${css.content} ${css.parallax}`}>
      <div className={`${css.wrap} ${css.gradientLayer}`}>{props.children}</div>
    </div>
  )
}
