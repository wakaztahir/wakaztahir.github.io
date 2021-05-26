import * as React from "react"

interface MyButtonProps {
  text: string,
  onClick: (e) => void
}

export default function(props: MyButtonProps) {

  const { text } = props

  return (
    <button onClick={props.onClick}>
      {text}
    </button>
  )
}
