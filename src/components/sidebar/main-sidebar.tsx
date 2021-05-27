import * as React from "react"
import FacebookIcon from "../../../public/icons/FacebookIcon"
import TwitterIcon from "../../../public/icons/TwitterIcon"
import StackoverflowIcon from "../../../public/icons/StackoverflowIcon"
import GithubIcon from "../../../public/icons/GithubIcon"
import { Hidden, Icon, IconButton, Typography } from "@material-ui/core"
import BaseSidebar from "./base-sidebar"
import MyButton from "../commons/MyButton"
import styled from "styled-components"

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

export default function MainSidebar() {
  return (
    <BaseSidebar>
      <Typography variant={"h2"} align={"center"} color={"textPrimary"}>Waqas Tahir</Typography>
      <SideSeparator />
      <SideNav>
        <a href="/#home">
          <MyButton>Home</MyButton>
        </a>
        <a href="/blog">
          <MyButton>Blog</MyButton>
        </a>
        <a href="/#projects">
          <MyButton>Projects</MyButton>
        </a>
      </SideNav>
      <SideSocial>
        <a href="https://facebook.com/wakaztahir" target="_blank" rel="noreferrer">
          <IconButton><FacebookIcon /></IconButton>
        </a>
        <a href="https://twitter.com/wakaztahir" target="_blank" rel="noreferrer">
          <IconButton>
            <TwitterIcon /></IconButton>
        </a>
        <a href="https://stackoverflow.com/users/3343503/waqas" rel="noreferrer" target="_blank">
          <IconButton>
            <StackoverflowIcon /></IconButton>
        </a>
        <a href="https://github.com/wakaztahir" target="_blank" rel="noreferrer">
          <IconButton>
            <GithubIcon />
          </IconButton>
        </a>
      </SideSocial>
      <SideFooter>
        <Typography variant={"caption"} color={"textPrimary"}>&copy; 2020 | Built with love</Typography>
      </SideFooter>
    </BaseSidebar>
  )
}
