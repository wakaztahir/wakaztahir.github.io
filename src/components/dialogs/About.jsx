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
        },
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
          I am a software developer , I have experience in different programming
          languages like Javascript,Java,Kotlin & Python.I have made Android
          Apps , Web Apps , Websites & Software.
        </material_1.Typography>
        <material_1.Typography gutterBottom>
          I keep tying to learn more and make myself better and improve my
          skills , I love learning. You can check out my
          <a href="https://gitub.com/wakaztahir/"> Github</a> to see what am I
          working at currently
        </material_1.Typography>
        <material_1.Typography gutterBottom>
          This site is basically my portfolio , You can send me an email by clicking <a href={"mailto:wakazdev@gmail.com"}>here</a> if you would like to contact me
        </material_1.Typography>
      </material_1.DialogContent>
    </BootstrapDialog>);
}
exports.default = CustomizedDialogs;
