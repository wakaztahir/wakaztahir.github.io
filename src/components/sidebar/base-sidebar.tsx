import * as React from "react"
import { FunctionComponent } from "react"
import styled from "styled-components"

const Aside = styled.aside`
  width: 22rem;
  height: 100vh;
  background-color: ${props => props.theme.palette.background.default};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  float: left;
  overflow-y:hidden;
`

const BaseSidebar: FunctionComponent<BaseSidebarProps> = (props) => {
  return (
    <Aside>
      {props.children}
    </Aside>
  )
}

interface BaseSidebarProps {

}


BaseSidebar.defaultProps = {}

export default BaseSidebar
