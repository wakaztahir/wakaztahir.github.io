import { ParentProps } from "solid-js"
import Home from "~/pages"

function PageContainer(props: ParentProps) {
    return (
        <>
            {props.children}
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat&family=Raleway:wght@300&family=Hind&display=swap"
                rel="stylesheet" />
        </>
    )
}

export default function HomePage() {
    return (
        <PageContainer>

            <Home />

        </PageContainer>
    )
}