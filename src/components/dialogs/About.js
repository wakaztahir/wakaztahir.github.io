import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import React from "react"

export default function About(props) {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Dialog
      fullScreen={fullScreen}
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{"About Me"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          I am a software developer , I have experience in different programming
          languages like Javascript,Java,Kotlin & Python.I have made Android
          Apps , Made Softwares using PyQt and websites using frameworks like
          React,NodeJs & even just plain old PHP and SQL.
        </DialogContentText>
        <DialogContentText>
          I keep tying to learn more and make myself better and improve my
          skills , I love learning. You can check out my
          <a href="https://gitub.com/wakaztahir/"> Github</a> to see what am I
          working at currently
        </DialogContentText>
        <DialogContentText>
          You can <a href="#">download my CV</a> which will go in depth about my
          experience in programming and my skills if you are a recruitor. My
          blog posts can be found on this site which is a collection of my
          thoughts and experiences about the programming world
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <button autoFocus onClick={props.onClose} color="primary">
          Close
        </button>
      </DialogActions>
    </Dialog>
  )
}
