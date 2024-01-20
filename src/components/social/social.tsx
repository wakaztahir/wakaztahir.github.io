import FacebookIcon from "../icons/FacebookIcon"
import TwitterIcon from "../icons/TwitterIcon"
import StackoverflowIcon from "../icons/StackoverflowIcon"
import GithubIcon from "../icons/GithubIcon"
import { IconButton } from "@qinetik/anique"
import { styled } from "@qinetik/emotion"

const Section = styled.section`
  display: block;
  margin-top: 6em;
  @media screen and (min-width: 720px) {
    display: none;
  }
`

const SocialLink = styled.a`
  margin: 0 1em;
`

export default function Social() {
    return (
        <Section>
            <SocialLink
                href="https://facebook.com/wakaztahir"
                target="_blank"
                rel="noreferrer"
            >
                <IconButton>
                    <FacebookIcon />
                </IconButton>
            </SocialLink>
            <SocialLink href="https://twitter.com/wakaztahir" target="_blank" rel="noreferrer">
                <TwitterIcon />
            </SocialLink>
            <a
                href="https://stackoverflow.com/users/3343503/waqas"
                target="_blank"
                rel="noreferrer"
            >
                <StackoverflowIcon />
            </a>
            <SocialLink href="https://github.com/wakaztahir" target="_blank" rel="noreferrer">
                <GithubIcon />
            </SocialLink>
        </Section>
    )
}
