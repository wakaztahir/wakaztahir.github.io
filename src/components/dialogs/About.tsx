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

const DialogTitleStyled = styled(Typography)(({ theme })=>({
  "&":{
    marginLeft : theme.spacing(2),
    marginTop : "8px"
  },
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
          I am a software developer , I have experience in different programming
          languages like Javascript,Java,Kotlin & Python.I have made Android
          Apps , Web Apps , Websites & Software.
        </Typography>
        <Typography gutterBottom>
          I keep tying to learn more and make myself better and improve my
          skills , I love learning. You can check out my
          <a href="https://gitub.com/wakaztahir/"> Github</a> to see what am I
          working at currently
        </Typography>
        <Typography gutterBottom>
          This site is basically my portfolio , You can send me an email by clicking <a
          href={"mailto:wakazdev@gmail.com"}>here</a> if you would like to contact me
        </Typography>
      </DialogContent>
    </BootstrapDialog>
  )
}