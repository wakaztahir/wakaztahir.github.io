"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var material_1 = require("@mui/material");
var createStyles_1 = require("@mui/styles/createStyles");
var makeStyles_1 = require("@mui/styles/makeStyles");
var FacebookIcon_1 = require("../icons/FacebookIcon");
var TwitterIcon_1 = require("../icons/TwitterIcon");
var StackoverflowIcon_1 = require("../icons/StackoverflowIcon");
var GithubIcon_1 = require("../icons/GithubIcon");
var useStyles = (0, makeStyles_1.default)(function (theme) {
    var _a;
    return (0, createStyles_1.default)({
        root: (_a = {
                display: "block",
                marginTop: theme.spacing(6)
            },
            _a[theme.breakpoints.up("md")] = {
                display: "none"
            },
            _a),
        socialLink: {
            margin: "0 1em"
        }
    });
});
function Social() {
    var classes = useStyles();
    return (<section className={"" + classes.root}>
      <a href="https://facebook.com/wakaztahir" target="_blank" rel="noreferrer" className={classes.socialLink}>
        <material_1.IconButton size="large">
          <FacebookIcon_1.default />
        </material_1.IconButton>
      </a>
      <a href="https://twitter.com/wakaztahir" target="_blank" rel="noreferrer" className={classes.socialLink}>
        <TwitterIcon_1.default />
      </a>
      <a href="https://stackoverflow.com/users/3343503/waqas" target="_blank" rel="noreferrer">
        <StackoverflowIcon_1.default />
      </a>
      <a href="https://github.com/wakaztahir" target="_blank" rel="noreferrer" className={classes.socialLink}>
        <GithubIcon_1.default />
      </a>
    </section>);
}
exports.default = Social;
