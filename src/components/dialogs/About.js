import { Dialog, DialogContent, DialogTitle, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import * as React from "react";
import { Close } from "@mui/icons-material";
import styled from "styled-components";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2)
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1)
    }
}));
const DialogTitleStyled = styled(Typography)(({ theme }) => ({
    "&": {
        marginLeft: theme.spacing(2),
        marginTop: "8px"
    }
}));
export default function CustomizedDialogs(props) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
    return (React.createElement(BootstrapDialog, { fullScreen: fullScreen, open: props.open, onClose: props.onClose, "aria-labelledby": "customized-dialog-title" },
        React.createElement(DialogTitle, { sx: { m: 0, p: 2 }, id: "customized-dialog-title" },
            React.createElement(DialogTitleStyled, { variant: "h4" }, "About Me"),
            props.onClose ? (React.createElement(IconButton, { "aria-label": "close", onClick: props.onClose, sx: {
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500]
                } },
                React.createElement(Close, null))) : null),
        React.createElement(DialogContent, { dividers: true },
            React.createElement(Typography, { gutterBottom: true }, "Hello, my name is Waqas Tahir and I am an Android Developer. I have a strong passion for mobile development and constantly strive to improve my skills and stay up-to-date with the latest technologies. I have experience in a variety of programming languages including Java, Kotlin, Typescript, React and Golang. I have a good understanding of various Android frameworks such as Room, SqlDelight, and Jetpack Compose."),
            React.createElement(Typography, { gutterBottom: true },
                "I am always eager to learn and explore new technologies and I believe that a good developer is always learning. In my free time, I like to work on personal projects and contribute to open-source projects on Github. If you are interested in checking out my work, please visit my Github profile at ",
                React.createElement("a", { href: "https://github.com/wakaztahir" }, "https://github.com/wakaztahir"),
                "."),
            React.createElement(Typography, { gutterBottom: true }, "I am always open to collaboration and networking with other developers, so feel free to reach out to me if you have any projects or ideas that you would like to work on together. Thank you for visiting my page and I hope to connect with you soon."))));
}
