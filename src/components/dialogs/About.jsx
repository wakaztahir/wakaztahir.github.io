"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var React = require("react");
var MyButton_1 = require("../commons/MyButton");
var icons_material_1 = require("@mui/icons-material");
var styled_components_1 = require("styled-components");
function About(props) {
    var theme = (0, material_1.useTheme)();
    var fullScreen = (0, material_1.useMediaQuery)(theme.breakpoints.down("lg"));
    return (<material_1.Dialog fullScreen={fullScreen} open={props.open} onClose={props.onClose} aria-labelledby="responsive-dialog-title">
      <material_1.DialogTitle id="responsive-dialog-title"><material_1.Typography variant={"h4"}></material_1.Typography></material_1.DialogTitle>
      <material_1.DialogContent>
        <material_1.DialogContentText>

        </material_1.DialogContentText>
        <material_1.DialogContentText>

        </material_1.DialogContentText>
        <material_1.DialogContentText>

        </material_1.DialogContentText>
      </material_1.DialogContent>
      <material_1.DialogActions>
        <MyButton_1.default autoFocus onClick={props.onClose} color="primary">
          Close
        </MyButton_1.default>
      </material_1.DialogActions>
    </material_1.Dialog>);
}
var BootstrapDialog = (0, styled_components_1.default)(material_1.Dialog)(function (_a) {
    var theme = _a.theme;
    return ({
        "& .MuiDialogContent-root": {
            padding: theme.spacing(2)
        },
        "& .MuiDialogActions-root": {
            padding: theme.spacing(1)
        }
    });
});
var DialogTitleStyled = (0, styled_components_1.default)(material_1.Typography)(function (_a) {
    var theme = _a.theme;
    return ({
        "&": {
            marginLeft: theme.spacing(2),
            marginTop: "8px"
        }
    });
});
function CustomizedDialogs(props) {
    var theme = (0, material_1.useTheme)();
    var fullScreen = (0, material_1.useMediaQuery)(theme.breakpoints.down("md"));
    return (<BootstrapDialog fullScreen={fullScreen} open={props.open} onClose={props.onClose} aria-labelledby="customized-dialog-title">
      <material_1.DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        <DialogTitleStyled variant={"h4"}>
          About Me
        </DialogTitleStyled>
        {props.onClose ? (<material_1.IconButton aria-label="close" onClick={props.onClose} sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: function (theme) { return theme.palette.grey[500]; }
            }}>
            <icons_material_1.Close />
          </material_1.IconButton>) : null}
      </material_1.DialogTitle>
      <material_1.DialogContent dividers>
        <material_1.Typography gutterBottom>
          I am a software developer , I am mainly an Android Developer but I have
          experience in other programming languages as well.
          I use these languages a lot Kotlin,Typescript,Golang,C++ and Java.
          I am familiar with these Technologies : Android, Kotlin, MVVM, Kotlin Flow, Room DB, SQLDelight, Sqlite, Kotlin
          Serialization, Ktor, Jetpack Compose, Web Development with React | Gatsby, JS, HTML & CSS | Sass.
        </material_1.Typography>
        <material_1.Typography gutterBottom>
          I have built Android Apps,websites,Single Page Applications & PWAs. Backend APIs in Golang , Desktop Applications (JVM) , Kotlin Multiplatform Applications for Android & Desktop.
          Also author of multiple Web & Android Libraries.
        </material_1.Typography>
        <material_1.Typography gutterBottom>
          I keep tying to learn more and make myself better and improve my
          skills. You can check out my <a href="https://github.com/wakaztahir/" target="_blank">Github</a> to see all of my
          projects. Most of which are open source.
        </material_1.Typography>
        <material_1.Typography gutterBottom>
          You can send me an email by clicking <a href={"mailto:wakaztahir@gmail.com"}>here</a> if you would like to
          contact me
        </material_1.Typography>
      </material_1.DialogContent>
    </BootstrapDialog>);
}
exports.default = CustomizedDialogs;
