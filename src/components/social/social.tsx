import * as React from "react"
import { createStyles, IconButton, makeStyles, Theme } from "@material-ui/core"
import FacebookIcon from "../icons/FacebookIcon"
import TwitterIcon from "../icons/TwitterIcon"
import StackoverflowIcon from "../icons/StackoverflowIcon"
import GithubIcon from "../icons/GithubIcon"

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: "block",
    marginTop: theme.spacing(6),
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  socialLink: {
    margin: "0 1em"
  }
}))

export default function Social() {

  const classes = useStyles()

  return (
    <section className={`${classes.root}`}>
      <a
        href="https://facebook.com/wakaztahir"
        target="_blank"
        rel="noreferrer"
        className={classes.socialLink}
      >
        <IconButton>
          <FacebookIcon />
        </IconButton>
      </a>
      <a href="https://twitter.com/wakaztahir" target="_blank" rel="noreferrer" className={classes.socialLink}>
        <TwitterIcon />
      </a>
      <a
        href="https://stackoverflow.com/users/3343503/waqas"
        target="_blank"
        rel="noreferrer"
      >
        <StackoverflowIcon />
      </a>
      <a href="https://github.com/wakaztahir" target="_blank" rel="noreferrer" className={classes.socialLink}>
        <GithubIcon />
      </a>
    </section>
  )
}
