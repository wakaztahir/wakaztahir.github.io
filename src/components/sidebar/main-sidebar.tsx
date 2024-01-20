import BaseSidebar from "./base-sidebar"
import { SiteMenu } from "../header/main-header"
import FacebookIcon from "../icons/FacebookIcon"
import TwitterIcon from "../icons/TwitterIcon"
import StackoverflowIcon from "../icons/StackoverflowIcon"
import GithubIcon from "../icons/GithubIcon"
import { styled } from "@qinetik/emotion"
import { Icon, IconButton } from "@qinetik/anique"
import LinkedinIcon from "@qinetik/mdi/LinkedinIcon"

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
    display: flex;
    flex-direction: row;
`

const SideFooter = styled.section`
    margin-top: 1em;
`

export function SocialIcons() {
  return (<>
    <a href="https://facebook.com/wakaztahir" target="_blank" rel="noreferrer">
      <IconButton>
        <FacebookIcon />
      </IconButton>
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
    <a href="https://www.linkedin.com/in/wakaztahir/" target="_blank" rel="noreferrer">
      <IconButton>
        <Icon>
          <LinkedinIcon />
        </Icon>
      </IconButton>
    </a>
  </>)
}

interface MainSidebarProps {
  onAboutDialog: () => void
}

export default function MainSidebar(props: MainSidebarProps) {
  return (
    <BaseSidebar>
      <h2>Waqas Tahir</h2>
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
        <span>&copy; {new Date().getFullYear()} | Built with love</span>
      </SideFooter>
    </BaseSidebar>
  )
}
