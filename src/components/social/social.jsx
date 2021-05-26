"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var FacebookIcon_1 = require("../../../public/icons/FacebookIcon");
var StackoverflowIcon_1 = require("../../../public/icons/StackoverflowIcon");
var GithubIcon_1 = require("../../../public/icons/GithubIcon");
var TwitterIcon_1 = require("../../../public/icons/TwitterIcon");
var core_1 = require("@material-ui/core");
var useStyles = core_1.makeStyles(function (theme) {
    var _a;
    return core_1.createStyles({
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
        <core_1.IconButton>
          <FacebookIcon_1.default />
        </core_1.IconButton>
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
