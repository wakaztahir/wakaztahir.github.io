func MainPage(page : &mut HtmlPage) {

    GlobalStyles(page);
    
    var seoProps = SEOProps()
    seoProps.title = std::string("Waqas Tahir | Software Developer")
    seoProps.description = std::string("A portfolio site for Waqas Tahir | Software Developer")
    seoProps.image = std::string("/images/feature.png")
    seoProps.siteUrl = std::string("https://wakaztahir.github.io")
    
    SEO(page, seoProps)

    var containerClass = #css {
        display: flex;
        flex-direction: column;
        @media (min-width: 768px) {
            flex-direction: row;
        }
    }

    var mainContentClass = #css {
        flex: 1;
    }

    var homeSectionClass = #css {
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    var projectsSectionClass = #css {
        width: 100%;
        min-height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2em;
        box-sizing: border-box;
        @media (min-width: 768px) {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
        }
    }

    var titleClass = #css {
        color: #fff;
        font-size: 3rem;
        margin: 0.5em 0;
    }

    var descClass = #css {
        color: #fff;
        margin-bottom: 1em;
    }

    var parallaxSection : std::function<(page : &HtmlPage) => void> = |homeSectionClass, titleClass, descClass, projectsSectionClass|() => {
        #html {
            <section id="home" class={homeSectionClass}>
                <h3 class={titleClass}>Hi , I am Waqas.</h3>
                <p class={descClass}>android developer</p>
                {MyTextButton(page, "About Me")}
                <a href="/assets/WaqasTahirCV.pdf" download="waqas-tahir-cv.pdf">
                    {MyTextButton(page, "Download CV")}
                </a>
                {SocialIconsNonColored(page)}
            </section>
            <section id="projects" class={projectsSectionClass}>
                {MindMapCard(page)}
                {SketchableCard(page)}
                {PDFEditorCard(page)}
                {PhotoEditorApp(page)}
                {SimpleScannerCard(page)}
                {EasyToDoCard(page)}
                {TimelineCard(page)}
                {ReactStaggeredGridCard(page)}
                {AcadtableCard(page)}
            </section>
        }
    } 

    #html {
        <div class={containerClass}>
            <head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat&family=Raleway:wght@300&family=Hind&display=swap"
                    rel="stylesheet" />
            </head>
            {MainSidebar(page)}
            <div class={mainContentClass}>
                {Parallax(page, parallaxSection)}
            </div>
        </div>
    }
}

func MindMapCard(page : &mut HtmlPage) {
    const tags = [ std::string_view("July 2022") ]
    var iconLambda : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { PlayStoreIcon(p2) }
    ProjectCard(page, std::span<std::string_view>(tags), |iconLambda|(p : &mut HtmlPage) => {
        #html {
            { ProjectCardTitle(p, "123Mind") }
            { ProjectCardDescription(p, "A Mind Mapping App that that exports high quality PNG,JPG and PDFs , very customizable supporting many features") }
            { ProjectCardLinkWithIcon(p, "https://play.google.com/store/apps/details?id=com.wakaztahir.mindnode", iconLambda, "PlayStore") }
        }
    })
}

func SketchableCard(page : &mut HtmlPage) {
    const tags = [ std::string_view("July 2022") ]
    var iconLambda : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { PlayStoreIcon(p2) }
    ProjectCard(page, std::span<std::string_view>(tags), |iconLambda|(p : &mut HtmlPage) => {
        #html {
            { ProjectCardTitle(p, "Sketchable") }
            { ProjectCardDescription(p, "A Simple Drawing or Sketching App") }
            { ProjectCardLinkWithIcon(p, "https://play.google.com/store/apps/details?id=com.wakaztahir.sketchapp", iconLambda, "PlayStore") }
        }
    })
}

func SimpleScannerCard(page : &mut HtmlPage) {
    const tags = [ std::string_view("July 2022") ]
    var iconLambda : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { PlayStoreIcon(p2) }
    ProjectCard(page, std::span<std::string_view>(tags), |iconLambda|(p : &mut HtmlPage) => {
        #html {
            { ProjectCardTitle(p, "Simple Scanner") }
            { ProjectCardDescription(p, "A document scanner app built with OpenCV, Detects cropping and crops it") }
            { ProjectCardLinkWithIcon(p, "https://play.google.com/store/apps/details?id=com.wakaztahir.docscanner", iconLambda, "PlayStore") }
        }
    })
}

func PhotoEditorApp(page : &mut HtmlPage) {
    const tags = [ std::string_view("July 2022") ]
    var iconLambda : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { PlayStoreIcon(p2) }
    ProjectCard(page, std::span<std::string_view>(tags), |iconLambda|(p : &mut HtmlPage) => {
        #html {
            { ProjectCardTitle(p, "Photo Editor") }
            { ProjectCardDescription(p, "A photo editor app that allows editing photos") }
            { ProjectCardLinkWithIcon(p, "https://play.google.com/store/apps/details?id=com.wakaztahir.photoeditor", iconLambda, "PlayStore") }
        }
    })
}

func EasyToDoCard(page : &mut HtmlPage) {
    const tags = [ std::string_view("July 2022") ]
    var iconLambda : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { PlayStoreIcon(p2) }
    ProjectCard(page, std::span<std::string_view>(tags), |iconLambda|(p : &mut HtmlPage) => {
        #html {
            { ProjectCardTitle(p, "Easy To Do") }
            { ProjectCardDescription(p, "A Task Management app that allows managing tasks and creating reminders") }
            { ProjectCardLinkWithIcon(p, "https://play.google.com/store/apps/details?id=com.wakaztahir.easytodo", iconLambda, "PlayStore") }
        }
    })
}

func PDFEditorCard(page : &mut HtmlPage) {
    const tags = [ std::string_view("July 2022") ]
    var iconLambda : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { PlayStoreIcon(p2) }
    ProjectCard(page, std::span<std::string_view>(tags), |iconLambda|(p : &mut HtmlPage) => {
        #html {
            { ProjectCardTitle(p, "PDFEditor") }
            { ProjectCardDescription(p, "PDF Editor app that allows to view and edit PDF documents") }
            { ProjectCardLinkWithIcon(p, "https://play.google.com/store/apps/details?id=com.wakaztahir.pdfreader", iconLambda, "PlayStore") }
        }
    })
}

func ReactStaggeredGridCard(page : &mut HtmlPage) {
    const tags = [ std::string_view("June 2021") ]
    var iconLambda : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { GithubIcon(p2) }
    ProjectCard(page, std::span<std::string_view>(tags), |iconLambda|(p : &mut HtmlPage) => {
        #html {
            { ProjectCardTitle(p, "React Staggered Grid") }
            { ProjectCardDescription(p, "This is a npm package that creates a staggered grid in React") }
            { ProjectCardLinkWithIcon(p, "https://github.com/wakaztahir/react-staggered-grid", iconLambda, "Github") }
        }
    })
}

func TimelineCard(page : &mut HtmlPage) {
    const tags = [ std::string_view("March 2021") ]
    var iconLambda : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { PlayStoreIcon(p2) }
    ProjectCard(page, std::span<std::string_view>(tags), |iconLambda|(p : &mut HtmlPage) => {
        #html {
            { ProjectCardTitle(p, "Timeline") }
            { ProjectCardDescription(p, "A Material Designed Web & Android App inspired by Google Keep to make notes and organize your information.") }
            { ProjectCardLinkWithIcon(p, "https://play.google.com/store/apps/details?id=com.wakaztahir.timeline", iconLambda, "PlayStore") }
        }
    })
}

func AcadtableCard(page : &mut HtmlPage) {
    const tags = [ std::string_view("August 2020") ]
    var iconLambda : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { GithubIcon(p2) }
    ProjectCard(page, std::span<std::string_view>(tags), |iconLambda|(p : &mut HtmlPage) => {
        #html {
            { ProjectCardTitle(p, "Acadtable") }
            { ProjectCardDescription(p, "Online react application that allows the users to make academic time tables.") }
            { ProjectCardLinkWithIcon(p, "https://github.com/wakaztahir/acadtable", iconLambda, "Github") }
        }
    })
}