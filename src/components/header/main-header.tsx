import MyButton from "../commons/MyButton"
import { styled } from "@qinetik/emotion"
import { Anique, IconButton } from "@qinetik/anique"
import MenuIcon from "@qinetik/mdi/MenuIcon"
import { Accessor, createSignal } from "solid-js"

const Header = styled.header`
    display: flex;
    width: 100vw;
    height: 4em;
    position: fixed;
    top: 0;
    z-index: 9;
    align-items: center;
    transition: background .5s ease-in-out;

    .light & {
        background: rgba(255, 255, 255, .4);
    }

    .dark & {
        background: rgba(0, 0, 0, .4);
    }

`

const HeaderTitle = styled.span`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  font-size: 1.5rem;

  ${Anique.breakpoints.up("sm")} {
    position: static;
    left: 0;
    transform: translate(0%);
    font-size: 1.2rem;
    margin-left: 1em;
  }
`

const HeaderNav = styled.nav`

`

const MobileMenuToggle : typeof IconButton = styled((props) => <IconButton {...props} ><MenuIcon /></IconButton>)`
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1em;

  ${Anique.breakpoints.up("sm")} {
    display: none;
  }
`

const DesktopMenu = styled.div`
  display: none;
  position: absolute;
  top: 2em;
  right: 2em;
  transform: translateY(-50%);

  & > * {
    margin-left: 0.2em;
    margin-right: 0.2em;
  }

  ${Anique.breakpoints.up("sm")} {
    display: block;
  }
`

const MobileMenu = styled.div<{ isOpen: Accessor<boolean> }>`
  width: 100vw;
  max-height: ${props => props.isOpen() ? `400px` : `0px`};
  position: absolute;
  top: 4em;
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
    transition: background 0.3s ease-out;
  }
  
  .light & > * {
    background: rgba(255, 255, 255, .4);
  }
  
  .dark & > * {
    background: rgba(0, 0, 0, .4);
  }
  
  .light & > *:hover {
    background: rgba(255, 255, 255, .5);
  }

  .dark & > *:hover {
    background: rgba(0, 0, 0, .5);
  }
  
  & a {
    text-decoration: none;
  }

  ${Anique.breakpoints.up("sm")} {
    max-height: 0;
  }
`

interface HeaderProps {
    onAboutDialog: () => void
}

export default function MainHeader(props: HeaderProps) {

    let [menuOpen, setMenuOpen] = createSignal(false)

    return (
        <Header>
            <HeaderTitle><span>Waqas Tahir</span></HeaderTitle>
            <HeaderNav>
                <MobileMenuToggle onClick={() => setMenuOpen(!menuOpen)} />
                <DesktopMenu>
                    <SiteMenu useButtons={true} onAboutDialog={props.onAboutDialog} />
                </DesktopMenu>
                <MobileMenu isOpen={menuOpen}>
                    <SiteMenu onAboutDialog={props.onAboutDialog} />
                </MobileMenu>
            </HeaderNav>
        </Header>
    )
}

interface SiteMenuProps {
    useButtons?: boolean
    onAboutDialog: () => void
}

export function SiteMenu(props: SiteMenuProps) {

    let Wrapper = (wProps : any) => props.useButtons != null && props.useButtons ? (<MyButton {...wProps} />) : (
        <span {...wProps} />)

    return (
        <>
            {/*<a href="/#home"><Wrapper>Home</Wrapper></a>*/}
            <div onClick={props.onAboutDialog}><Wrapper>About</Wrapper></div>
            {/*<a href="/#projects"><Wrapper>Projects</Wrapper></a>*/}
            <a href={"/WaqasTahirCV.pdf"} download={"waqas-tahir-cv.pdf"}><Wrapper>Download CV</Wrapper></a>
        </>
    )
}
