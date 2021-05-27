import * as React from "react"
import { FunctionComponent } from "react"
import styled from "styled-components"

interface MyButtonProps {
  children: any,
  onClick?: (e) => void
}

const Button = styled.button`
  padding: 0.4em 1.3em;
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

const MyButton: FunctionComponent<MyButtonProps> = (props) => {
  return (
    <Button onClick={props.onClick}>
      {props.children}
    </Button>
  )
}

MyButton.defaultProps = {
  onClick: () => {
  }
}

export default MyButton
