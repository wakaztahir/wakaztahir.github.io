"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
var React = require("react");
var MyButton_1 = require("../commons/MyButton");
function About(props) {
    var theme = core_1.useTheme();
    var fullScreen = core_1.useMediaQuery(theme.breakpoints.down("sm"));
    return (<core_1.Dialog fullScreen={fullScreen} open={props.open} onClose={props.onClose} aria-labelledby="responsive-dialog-title">
      <core_1.DialogTitle id="responsive-dialog-title">{"About Me"}</core_1.DialogTitle>
      <core_1.DialogContent>
        <core_1.DialogContentText>
          I am a software developer , I have experience in different programming
          languages like Javascript,Java,Kotlin & Python.I have made Android
          Apps , Web Apps , Websites & Software.
        </core_1.DialogContentText>
        <core_1.DialogContentText>
          I keep tying to learn more and make myself better and improve my
          skills , I love learning. You can check out my
          <a href="https://gitub.com/wakaztahir/"> Github</a> to see what am I
          working at currently
        </core_1.DialogContentText>
        <core_1.DialogContentText>
          This site is basically my portfolio , You can send me an email by clicking <a href={"mailto:wakazdev@gmail.com"}>here</a> if you would like to contact me
        </core_1.DialogContentText>
      </core_1.DialogContent>
      <core_1.DialogActions>
        <MyButton_1.default autoFocus onClick={props.onClose} color="primary">
          Close
        </MyButton_1.default>
      </core_1.DialogActions>
    </core_1.Dialog>);
}
exports.default = About;
