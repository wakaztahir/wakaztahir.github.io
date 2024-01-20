import { styled } from "@qinetik/emotion"
import { ParentProps } from "solid-js"

const Aside = styled.aside`
    width: 22em;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    float: left;
    overflow-y: hidden;

    .dark & {
        background-color: rgba(43, 58, 66, 0.9);
    }

    .light & {
        background-color: rgba(255, 255, 255, .6);
    }

`

const BaseSidebar = (props: BaseSidebarProps) => {
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
