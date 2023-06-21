import * as React from "react"
import { IconButton, Typography } from "@mui/material"
import BaseSidebar from "./base-sidebar"
import styled from "styled-components"
import { SiteMenu } from "../header/main-header"
import FacebookIcon from "../icons/FacebookIcon"
import TwitterIcon from "../icons/TwitterIcon"
import StackoverflowIcon from "../icons/StackoverflowIcon"
import GithubIcon from "../icons/GithubIcon"
import { LinkedIn } from "@mui/icons-material"

const SideNav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;

  & > * {
    margin-top: 0.5em;
  }

`

const SideSeparator = styled.hr`
  width: 80%;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const SideSocial = styled.section`
  margin-top: 2em;
`

const SideFooter = styled.section`
  margin-top: 1em;
`

export function SocialIcons() {
  return (<React.Fragment>
    <a href="https://facebook.com/wakaztahir" target="_blank" rel="noreferrer">
      <IconButton size="large"><FacebookIcon /></IconButton>
    </a>
    <a href="https://twitter.com/wakaztahir" target="_blank" rel="noreferrer">
      <IconButton size="large">
        <TwitterIcon /></IconButton>
    </a>
    <a href="https://stackoverflow.com/users/3343503/waqas" rel="noreferrer" target="_blank">
      <IconButton size="large">
        <StackoverflowIcon /></IconButton>
    </a>
    <a href="https://github.com/wakaztahir" target="_blank" rel="noreferrer">
      <IconButton size="large">
        <GithubIcon />
      </IconButton>
    </a>
    <a href="https://www.linkedin.com/in/wakaztahir/" target="_blank" rel="noreferrer">
      <IconButton size="large">
        <LinkedIn />
      </IconButton>
    </a>
  </React.Fragment>)
}

interface MainSidebarProps {
  onAboutDialog : ()=>void
}

export default function MainSidebar(props : MainSidebarProps) {
  return (
    <BaseSidebar>
      <Typography variant={"h2"} align={"center"} color={"textPrimary"}>Waqas Tahir</Typography>
      <SideSeparator />
      <SideNav>
        <SiteMenu
          useButtons={true}
          onAboutDialog={props.onAboutDialog}
        />
      </SideNav>
      <SideSocial>
        <SocialIcons />
      </SideSocial>
      <SideFooter>
        <Typography variant={"caption"} color={"textPrimary"}>&copy; {new Date().getFullYear()} | Built with love</Typography>
      </SideFooter>
    </BaseSidebar>
  )
}
