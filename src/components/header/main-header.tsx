import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import { IconButton, Typography } from "@mui/material"
import { Menu } from "@mui/icons-material"
import MyButton from "../commons/MyButton"
import About from "../dialogs/About"

const Header = styled.header`
  display: flex;
  width: 100vw;
  height: 4rem;
  background: ${props => props.theme.palette.mode === "light" ? `rgba(255, 255, 255, .4)` : `rgba(0, 0, 0, .4)`};
  position: fixed;
  top: 0;
  z-index: 9;
  align-items: center;
  transition: background .5s ease-in-out;
`

const HeaderTitle = styled.span`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  font-size: 1.5rem;

  ${props => props.theme.breakpoints.up("sm")} {
    position: static;
    left: 0;
    transform: translate(0%);
    font-size: 1.2rem;
    margin-left: 1em;
  }
`

const HeaderNav = styled.nav`

`

const MobileMenuToggle = styled((props) =>
  <IconButton {...props} size="large"><Menu /></IconButton>)`
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1em;

  ${props => props.theme.breakpoints.up("sm")} {
    display: none;
  }
`

const DesktopMenu = styled.div`
  display: none;
  position: absolute;
  top: 2rem;
  right: 2em;
  transform: translateY(-50%);

  & > * {
    margin-left: 0.2em;
    margin-right: 0.2em;
  }

  ${props => props.theme.breakpoints.up("sm")} {
    display: block;
  }
`

const MobileMenu = styled.div<{ isOpen: boolean }>`
  width: 100vw;
  max-height: ${props => props.isOpen ? `400px` : `0px`};
  position: absolute;
  top: 4rem;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: max-height 0.3s ease-out;
  overflow: hidden;

  & > * {
    width: 100%;
    padding-top: 0.75em;
    padding-bottom: 0.75em;
    text-align: center;
    background: ${props => props.theme.palette.mode === "dark" ? `rgba(0, 0, 0, .4)` : `rgba(255, 255, 255, .4)`};
    transition: background 0.3s ease-out;
  }

  & > *:hover {
    background: ${props => props.theme.palette.mode === "dark" ? `rgba(0, 0, 0, .5)` : `rgba(255, 255, 255, .5)`};
  }

  & a {
    text-decoration: none;
  }

  ${props => props.theme.breakpoints.up("sm")} {
    max-height: 0;
  }
`

interface HeaderProps {
  onAboutDialog : ()=>void
}

export default function MainHeader(props : HeaderProps) {

  let [menuOpen, setMenuOpen] = useState(false)

  return (
    <Header>
      <HeaderTitle><Typography color={"textPrimary"}>Waqas Tahir</Typography></HeaderTitle>
      <HeaderNav>
        <MobileMenuToggle onClick={() => setMenuOpen(!menuOpen)} />
        <DesktopMenu>
          <SiteMenu useButtons={true} onAboutDialog={props.onAboutDialog} />
        </DesktopMenu>
        <MobileMenu isOpen={menuOpen}>
          <SiteMenu  onAboutDialog={props.onAboutDialog}/>
        </MobileMenu>
      </HeaderNav>
    </Header>
  )
}

interface SiteMenuProps {
  useButtons?: boolean
  onAboutDialog : ()=>void
}

export function SiteMenu(props: SiteMenuProps) {


  let Wrapper = (wProps) => props.useButtons != null && props.useButtons === true ? (<MyButton {...wProps} />) : (
    <Typography {...wProps} color={"textPrimary"} />)

  return (
    <React.Fragment>
      {/*<a href="/#home"><Wrapper>Home</Wrapper></a>*/}
      <div onClick={props.onAboutDialog}><Wrapper>About</Wrapper></div>
      {/*<a href="/#projects"><Wrapper>Projects</Wrapper></a>*/}
      <a href={"/WaqasTahirCV.pdf"} download={"waqas-tahir-cv.pdf"}><Wrapper>Download CV</Wrapper></a>
    </React.Fragment>
  )
}
