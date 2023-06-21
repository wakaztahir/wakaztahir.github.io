import * as React from "react"

import styled from "styled-components"
import { ThemeToggle } from "./ThemeToggle"
import { PropsWithChildren } from "react"
// @ts-ignore
import { setup } from "./coalesce"

const ParallaxContainer = styled.div`
  position: relative;
  flex-basis: 100%;
  flex-shrink: 2.5;
  height: 100vh;
  overflow-x: hidden;
  
  & canvas {
    z-index : -1 !important;
    position:fixed !important;
    width:100% !important;
    left:0 !important;
    height:100% !important;
  }

  & .parallax-content {
    z-index:4;
  }

  //Applying Background
  // background: url("/images/me-cover-small.jpg");
  // background-size: cover;
  // background-attachment: fixed;
  //
  // ${props => props.theme.breakpoints.up("md")} {
  //   background: url("/images/me-cover-medium.jpg");
  // }
  //
  // ${props => props.theme.breakpoints.up("lg")} {
  //   background: url("/images/me-cover-large.jpg");
  //   background-size: 100% 150%;
  //   background-position: 8% 8%;
  // }
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
  bottom: 1em;
  right: 2em;
`

interface ParallaxProps extends PropsWithChildren {
  className?: string
}

export default function Parallax(props: ParallaxProps) {
  return (
    <ParallaxContainer className={props.className} ref={(e) => { setup(e) }}>
      <ToggleContainer>
        <ThemeToggle />
      </ToggleContainer>
      <div className={"parallax-content"}>{props.children}</div>
      {/*<ParrallaxGradient>{props.children}</ParrallaxGradient>*/}
    </ParallaxContainer>
  )
}
