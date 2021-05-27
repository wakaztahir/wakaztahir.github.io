import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle, Typography,
  useMediaQuery,
  useTheme
} from "@material-ui/core"
import * as React from "react"
import MyButton from "../commons/MyButton"

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
      <DialogTitle id="responsive-dialog-title"><Typography variant={"h4"}>About Me</Typography></DialogTitle>
      <DialogContent>
        <DialogContentText>
          I am a software developer , I have experience in different programming
          languages like Javascript,Java,Kotlin & Python.I have made Android
          Apps , Web Apps , Websites & Software.
        </DialogContentText>
        <DialogContentText>
          I keep tying to learn more and make myself better and improve my
          skills , I love learning. You can check out my
          <a href="https://gitub.com/wakaztahir/"> Github</a> to see what am I
          working at currently
        </DialogContentText>
        <DialogContentText>
          This site is basically my portfolio , You can send me an email by clicking <a
          href={"mailto:wakazdev@gmail.com"}>here</a> if you would like to contact me
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <MyButton autoFocus onClick={props.onClose} color="primary">
          Close
        </MyButton>
      </DialogActions>
    </Dialog>
  )
}
