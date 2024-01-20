import { styled } from "@qinetik/emotion"
import { Anique } from "@qinetik/anique"
import { ParentProps } from "solid-js"

const Aside = styled.aside`
  width: 22rem;
  height: 100vh;
  background-color: rgba(0,0,0,.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  float: left;
  overflow-y:hidden;
`

const BaseSidebar = (props : BaseSidebarProps) => {
  return (
    <Aside>
      {props.children}
    </Aside>
  )
}

interface BaseSidebarProps extends ParentProps {

}


BaseSidebar.defaultProps = {}

export default BaseSidebar
