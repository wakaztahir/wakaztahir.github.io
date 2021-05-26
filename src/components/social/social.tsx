import * as React from "react"

import FacebookIcon from "../../../public/icons/FacebookIcon"
import StackoverflowIcon from "../../../public/icons/StackoverflowIcon"
import GithubIcon from "../../../public/icons/GithubIcon"
import TwitterIcon from "../../../public/icons/TwitterIcon"
import { createStyles, IconButton, makeStyles, Theme } from "@material-ui/core"

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
