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
    return (React.createElement(BootstrapDialog, { fullScreen: fullScreen, open: props.open, onClose: props.onClose, keepMounted: true, "aria-labelledby": "customized-dialog-title" },
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
            React.createElement(Typography, { gutterBottom: true }, "Greetings ! I'm Waqas Tahir, an enthusiastic Android Developer with a deep passion for mobile development. Constantly driven to enhance my skills and stay updated with the latest technologies, I thrive in the dynamic world of app creation. Proficient in a wide array of programming languages such as Java, Kotlin, Typescript, React, and Golang, I possess a diverse skill set that empowers me to tackle diverse challenges."),
            React.createElement(Typography, { gutterBottom: true }, "My expertise extends beyond programming languages to encompass various Android frameworks, including Room, SqlDelight, and Jetpack Compose. With a solid understanding of these frameworks, I excel in crafting efficient and user-friendly Android applications."),
            React.createElement(Typography, { gutterBottom: true }, "One aspect that sets me apart is my unwavering commitment to lifelong learning. I firmly believe that growth stems from embracing new technologies and concepts. Consequently, I am always eager to explore emerging trends and innovative tools, which enables me to deliver cutting-edge solutions to complex problems."),
            React.createElement(Typography, { gutterBottom: true },
                "In addition to honing my craft, I actively engage in personal projects and contribute to open-source endeavors on Github. My ",
                React.createElement("a", { href: "https://github.com/wakaztahir", target: "_blank" }, "Github profile"),
                " showcases a range of my work, providing you with insights into my coding style and project involvement."),
            React.createElement(Typography, { gutterBottom: true }, "Collaboration and networking are at the core of my professional values. I embrace opportunities to work alongside other talented developers, pooling our skills and knowledge to create remarkable applications. If you have any exciting projects or ideas you'd like to collaborate on, don't hesitate to reach out to me. Together, we can build something extraordinary."),
            React.createElement(Typography, { gutterBottom: true }, "Thank you for visiting my page, and I look forward to connecting with you soon!"))));
}
