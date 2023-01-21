import * as React from "react";
import styled from "styled-components";
const Aside = styled.aside `
  width: 22rem;
  height: 100vh;
  background-color: ${props => props.theme.palette.background.default};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  float: left;
  overflow-y:hidden;
`;
const BaseSidebar = (props) => {
    return (React.createElement(Aside, null, props.children));
};
BaseSidebar.defaultProps = {};
export default BaseSidebar;
