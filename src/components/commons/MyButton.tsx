import * as React from "react"
import styled from "styled-components"

const Button = styled.button`
  padding: 0.6em 1.2em;
  background: ${props => props.theme.palette.background.default};
  color: ${props => props.theme.palette.text.primary};
  border: 0;
  outline: 0;
  cursor: pointer;
  border-radius: 1.4em;
  box-sizing: border-box;
  transition: color 0.3s ease-out, background 0.3s ease-out;

  &:hover {
    color: ${props => props.theme.palette.background.default};
    background: ${props => props.theme.palette.text.primary};
  }
`

const MyButton = (props) => {
  return (
    <Button {...props}>
      {props.children}
    </Button>
  )
}

export default MyButton
