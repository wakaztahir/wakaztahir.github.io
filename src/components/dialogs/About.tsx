import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material"
import * as React from "react"
import MyButton from "../commons/MyButton"
import { Close } from "@mui/icons-material"
import styled from "styled-components"

function About(props) {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("lg"))
  return (
    <Dialog
      fullScreen={fullScreen}
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title"><Typography variant={"h4"}></Typography></DialogTitle>
      <DialogContent>
        <DialogContentText>

        </DialogContentText>
        <DialogContentText>

        </DialogContentText>
        <DialogContentText>

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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2)
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1)
  }
}))

const DialogTitleStyled = styled(Typography)(({ theme }) => ({
  "&": {
    marginLeft: theme.spacing(2),
    marginTop: "8px"
  }
}))

export default function CustomizedDialogs(props) {

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <BootstrapDialog
      fullScreen={fullScreen}
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="customized-dialog-title"
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        <DialogTitleStyled variant={"h4"}>
          About Me
        </DialogTitleStyled>
        {props.onClose ? (
          <IconButton
            aria-label="close"
            onClick={props.onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500]
            }}
          >
            <Close />
          </IconButton>
        ) : null}
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          I am a software developer , I am mainly an Android Developer but I have
          experience in other programming languages as well.
          I use these languages a lot Kotlin,Typescript,Golang,C++ and Java.
          I am familiar with these Technologies : Android, Kotlin, MVVM, Kotlin Flow, Room DB, SQLDelight, Sqlite, Kotlin
          Serialization, Ktor, Jetpack Compose, Web Development with React | Gatsby, JS, HTML & CSS | Sass.
        </Typography>
        <Typography gutterBottom>
          I have built Android Apps,websites,Single Page Applications & PWAs. Backend APIs in Golang , Desktop Applications (JVM) , Kotlin Multiplatform Applications for Android & Desktop.
          Also author of multiple Web & Android Libraries.
        </Typography>
        <Typography gutterBottom>
          I keep tying to learn more and make myself better and improve my
          skills. You can check out my <a href="https://gitub.com/wakaztahir/">Github</a> to see all of my
          projects. Most of which are open source.
        </Typography>
        <Typography gutterBottom>
          You can send me an email by clicking <a href={"mailto:wakaztahir@gmail.com"}>here</a> if you would like to
          contact me
        </Typography>
      </DialogContent>
    </BootstrapDialog>
  )
}