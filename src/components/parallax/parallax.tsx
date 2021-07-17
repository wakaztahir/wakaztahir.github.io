import * as React from "react"

import styled from "styled-components"
import { ThemeToggle } from "./ThemeToggle"

const ParallaxContainer = styled.div`
  position: relative;
  flex-basis: 100%;
  flex-shrink: 2.5;
  height: 100vh;
  overflow-x: hidden;

  //Applying Background
  background: url("/images/me-cover-small.jpg");
  background-size: cover;
  background-attachment: fixed;

  ${props => props.theme.breakpoints.up("md")} {
    background: url("/images/me-cover-medium.jpg");
  }

  ${props => props.theme.breakpoints.up("lg")} {
    background: url("/images/me-cover-large.jpg");
    background-size: 100% 150%;
    background-position: 8% 8%;
  }
`

const ParrallaxGradient = styled.div`
  width: 100%;
  min-height: 100%;

  box-sizing: border-box;
  text-align: center;
  background: linear-gradient(rgba(16, 105, 98, 0.8),
  rgba(16, 105, 98, 0.8),
  rgba(40, 59, 110, 0.8),
  rgba(40, 59, 110, 0.8),
  rgba(24, 24, 26, 0.8));
`

const ToggleContainer = styled.div`
  position: fixed;
  bottom :1em;
  right: 2em;
`

export default function Parallax(props) {
  return (
    <ParallaxContainer>
      <ToggleContainer>
        <ThemeToggle />
      </ToggleContainer>
      <ParrallaxGradient>{props.children}</ParrallaxGradient>
    </ParallaxContainer>
  )
}
