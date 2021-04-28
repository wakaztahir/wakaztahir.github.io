import React from "react"

import "./parallax.scss"

export default function Parallax(props) {
  return (
    <div className="content parallax">
      <div className="wrap gradient-layer">{props.children}</div>
    </div>
  )
}
