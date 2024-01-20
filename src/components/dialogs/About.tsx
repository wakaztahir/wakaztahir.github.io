import { JSX } from "solid-js"
import { Anique, Dialog, IconButton, Row, ScrollbarArea } from "@qinetik/anique"
import { styled } from "@qinetik/emotion"
import CloseIcon from "@qinetik/mdi/CloseIcon"

interface CustomizedDialogProps {
    open: JSX.Accessor<boolean>,
    onClose: () => void;
}

const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 30em;
    max-height: 32em;
    min-height : 0;

    border-radius: 1em;
    padding: 1.5em;

    background: ${Anique.colors.bg100};

`

const DialogTitleRow = styled.div`
    display : flex;
    flex-direction : row;
    justify-content:space-between;
    align-items:center;
    width : 100%;
    padding-bottom : 1em;
`

const DialogTitle = styled.h4`
    margin: 0;
    font-family: Raleway, sans-serif;
    font-size : 2em;
`

const DialogContent = styled(ScrollbarArea)`
    
    overflow-y: auto;
    
    & > p:first-child {
        margin-top : 0;
    }
    
`

export default function CustomizedDialogs(props: CustomizedDialogProps) {

    return (
        <Dialog
            isVisible={props.open}
            onCloseRequest={props.onClose}
        >
            <Container>
                <DialogTitleRow>
                    <DialogTitle>About Me</DialogTitle>
                    <IconButton onClick={props.onClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitleRow>
                <DialogContent>
                    <p>
                        Greetings ! I'm Waqas Tahir, an enthusiastic Android Developer with a deep passion for mobile
                        development.
                        Constantly driven to enhance my skills and stay updated with the latest technologies, I thrive
                        in
                        the dynamic
                        world of app creation. Proficient in a wide array of programming languages such as Java, Kotlin,
                        Typescript,
                        React, and Golang, I possess a diverse skill set that empowers me to tackle diverse challenges.
                    </p>
                    <p>
                        My expertise extends beyond programming languages to encompass various Android frameworks,
                        including
                        Room,
                        SqlDelight, and Jetpack Compose. With a solid understanding of these frameworks, I excel in
                        crafting
                        efficient
                        and user-friendly Android applications.
                    </p>
                    <p>
                        One aspect that sets me apart is my unwavering commitment to lifelong learning. I firmly believe
                        that growth
                        stems from embracing new technologies and concepts. Consequently, I am always eager to explore
                        emerging trends
                        and innovative tools, which enables me to deliver cutting-edge solutions to complex problems.
                    </p>
                    <p>
                        In addition to honing my craft, I actively engage in personal projects and contribute to
                        open-source
                        endeavors
                        on Github. My <a href={"https://github.com/wakaztahir"} target={"_blank"}>Github
                        profile</a> showcases a range
                        of my work, providing you with
                        insights into my coding style and project involvement.
                    </p>
                    <p>
                        Collaboration and networking are at the core of my professional values. I embrace opportunities
                        to
                        work
                        alongside other talented developers, pooling our skills and knowledge to create remarkable
                        applications. If
                        you
                        have any exciting projects or ideas you'd like to collaborate on, don't hesitate to reach out to
                        me.
                        Together,
                        we can build something extraordinary.
                    </p>
                    <p>
                        Thank you for visiting my page, and I look forward to connecting with you soon!
                    </p>
                </DialogContent>
            </Container>
        </Dialog>
    )
}