func MainPage(page : &mut HtmlPage) {

    GlobalStyles(page);
    
    var seoProps = SEOProps()
    seoProps.title = std::string("Waqas Tahir | Software Developer")
    seoProps.description = std::string("A portfolio site for Waqas Tahir | Software Developer")
    seoProps.image = std::string("assets/images/icon.png")
    seoProps.siteUrl = std::string("https://wakaztahir.com")
    
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
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        padding: 4em 1em;
        box-sizing: border-box;
        gap: 1em;
    }

    var titleClass = #css {
        color: var(--text-color);
        font-size: 3rem;
        margin: 0.5em 0;
    }

    var descClass = #css {
        color: var(--text-color);
        margin-bottom: 1rem;
    }

    var buttonRowClass = #css {
        display: flex;
        gap: 1em;
        justify-content: center;
        flex-wrap: wrap;
    }

    var parallaxSection : std::function<(page : &HtmlPage) => void> = |homeSectionClass, titleClass, descClass, projectsSectionClass, buttonRowClass|() => {
        #html {
            <section id="projects" class={projectsSectionClass}>
                {ChemicalCard(page)}
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
                <link rel="icon" href="assets/images/favicon.png" type="image/png" />
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            {MainSidebar(page)}
            <div class={mainContentClass}>
                {Parallax(page, parallaxSection)}
            </div>
            {AboutDialog(page)}
        </div>
    }
}

func ChemicalCard(page : &mut HtmlPage) {
    const tags = [ std::string_view("December 2025") ]
    var githubIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { GithubIcon(p2) }
    ProjectCard(page, std::span<std::string_view>(tags), |githubIcon|(page : &mut HtmlPage) => {
        #html {
            { ProjectCardTitle(page, "Chemical Programming Language") }
            { ProjectCardDescription(page, "A high performance native programming language built with LLVM and Tiny CC that supports web development using embedded languages.") }
            <div style="display:flex; flex-wrap:wrap; gap:0.5em;">
                { ProjectCardLinkWithIcon(page, "https://github.com/chemicallang/chemical", githubIcon, "Github") }
            </div>
        }
    })
}

func MindMapCard(page : &mut HtmlPage) {
    const tags = [ std::string_view("July 2022") ]
    var playStoreIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { PlayStoreIcon(p2) }
    var webIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { WebIcon(p2) }
    var windowsIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { WindowsIcon(p2) }
    ProjectCard(page, std::span<std::string_view>(tags), |playStoreIcon, windowsIcon, webIcon|(page : &mut HtmlPage) => {
        #html {
            { ProjectCardTitle(page, "123Mind") }
            { ProjectCardDescription(page, "A Mind Mapping App that that exports high quality PNG,JPG and PDFs , very customizable supporting many features") }
            <div style="display:flex; flex-wrap:wrap; gap:0.5em;">
                { ProjectCardLinkWithIcon(page, "https://qawaz.github.io/mindnode-web", webIcon, "Web App") }
                { ProjectCardLinkWithIcon(page, "https://qawaz.github.io/mindnode-web/latest-windows.html", windowsIcon, "Windows") }
                { ProjectCardLinkWithIcon(page, "https://play.google.com/store/apps/details?id=com.wakaztahir.mindnode", playStoreIcon, "PlayStore") }
            </div>
        }
    })
}

func SketchableCard(page : &mut HtmlPage) {
    const tags = [ std::string_view("July 2022") ]
    var playStoreIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { PlayStoreIcon(p2) }
    var webIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { WebIcon(p2) }
    var windowsIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { WindowsIcon(p2) }
    ProjectCard(page, std::span<std::string_view>(tags), |playStoreIcon, webIcon, windowsIcon|(page : &mut HtmlPage) => {
        #html {
            { ProjectCardTitle(page, "Sketchable") }
            { ProjectCardDescription(page, "A Simple Drawing or Sketching App") }
            <div style="display:flex; flex-wrap:wrap; gap:0.5em;">
                { ProjectCardLinkWithIcon(page, "https://qawaz.github.io/sketchable-web", webIcon, "Web App") }
                { ProjectCardLinkWithIcon(page, "https://qawaz.github.io/sketchable-web/latest-windows.html", windowsIcon, "Windows") }
                { ProjectCardLinkWithIcon(page, "https://play.google.com/store/apps/details?id=com.wakaztahir.sketchapp", playStoreIcon, "PlayStore") }
            </div>
        }
    })
}

func SimpleScannerCard(page : &mut HtmlPage) {
    const tags = [ std::string_view("July 2022") ]
    var playStoreIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { PlayStoreIcon(p2) }
    var webIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { WebIcon(p2) }
    var windowsIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { WindowsIcon(p2) }
    ProjectCard(page, std::span<std::string_view>(tags), |playStoreIcon|(page : &mut HtmlPage) => {
        #html {
            { ProjectCardTitle(page, "Simple Scanner") }
            { ProjectCardDescription(page, "A document scanner app built with OpenCV, Detects cropping and crops it") }
            { ProjectCardLinkWithIcon(page, "https://play.google.com/store/apps/details?id=com.wakaztahir.docscanner", playStoreIcon, "PlayStore") }
        }
    })
}

func PhotoEditorApp(page : &mut HtmlPage) {
    const tags = [ std::string_view("July 2022") ]
    var playStoreIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { PlayStoreIcon(p2) }
    var webIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { WebIcon(p2) }
    var windowsIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { WindowsIcon(p2) }
    ProjectCard(page, std::span<std::string_view>(tags), |playStoreIcon|(page : &mut HtmlPage) => {
        #html {
            { ProjectCardTitle(page, "Photo Editor") }
            { ProjectCardDescription(page, "A photo editor app that allows editing photos") }
            { ProjectCardLinkWithIcon(page, "https://play.google.com/store/apps/details?id=com.wakaztahir.photoeditor", playStoreIcon, "PlayStore") }
        }
    })
}

func EasyToDoCard(page : &mut HtmlPage) {
    const tags = [ std::string_view("July 2022") ]
    var playStoreIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { PlayStoreIcon(p2) }
    var webIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { WebIcon(p2) }
    var windowsIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { WindowsIcon(p2) }
    ProjectCard(page, std::span<std::string_view>(tags), |playStoreIcon|(page : &mut HtmlPage) => {
        #html {
            { ProjectCardTitle(page, "Easy To Do") }
            { ProjectCardDescription(page, "A Task Management app that allows managing tasks and creating reminders") }
            { ProjectCardLinkWithIcon(page, "https://play.google.com/store/apps/details?id=com.wakaztahir.easytodo", playStoreIcon, "PlayStore") }
        }
    })
}

func PDFEditorCard(page : &mut HtmlPage) {
    const tags = [ std::string_view("July 2022") ]
    var playStoreIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { PlayStoreIcon(p2) }
    var webIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { WebIcon(p2) }
    var windowsIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { WindowsIcon(p2) }
    ProjectCard(page, std::span<std::string_view>(tags), |playStoreIcon|(page : &mut HtmlPage) => {
        #html {
            { ProjectCardTitle(page, "PDFEditor") }
            { ProjectCardDescription(page, "PDF Editor app that allows to view and edit PDF documents") }
            { ProjectCardLinkWithIcon(page, "https://play.google.com/store/apps/details?id=com.wakaztahir.pdfreader", playStoreIcon, "PlayStore") }
        }
    })
}

func ReactStaggeredGridCard(page : &mut HtmlPage) {
    const tags = [ std::string_view("June 2021") ]
    var playStoreIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { PlayStoreIcon(p2) }
    var webIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { WebIcon(p2) }
    var windowsIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { WindowsIcon(p2) }
    var githubIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { GithubIcon(p2) }
    ProjectCard(page, std::span<std::string_view>(tags), |webIcon, githubIcon|(page : &mut HtmlPage) => {
        #html {
            { ProjectCardTitle(page, "React Staggered Grid") }
            { ProjectCardDescription(page, "This is a npm package that creates a staggered grid in React") }
            <div style="display:flex; flex-wrap:wrap; gap:0.5em;">
                { ProjectCardLinkWithIcon(page, "https://wakaztahir.github.io/react-staggered-grid/", webIcon, "Live Demo") }
                { ProjectCardLinkWithIcon(page, "https://github.com/wakaztahir/react-staggered-grid", githubIcon, "Github") }
            </div>
        }
    })
}

func TimelineCard(page : &mut HtmlPage) {
    const tags = [ std::string_view("March 2021") ]
    var playStoreIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { PlayStoreIcon(p2) }
    var webIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { WebIcon(p2) }
    var windowsIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { WindowsIcon(p2) }
    var githubIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { GithubIcon(p2) }
    ProjectCard(page, std::span<std::string_view>(tags), |webIcon, playStoreIcon|(page : &mut HtmlPage) => {
        #html {
            { ProjectCardTitle(page, "Timeline") }
            { ProjectCardDescription(page, "A Material Designed Web & Android App inspired by Google Keep to make notes and organize your information.") }
            <div style="display:flex; flex-wrap:wrap; gap:0.5em;">
                { ProjectCardLinkWithIcon(page, "https://qawaz.github.io/timeline", webIcon, "Website") }
                { ProjectCardLinkWithIcon(page, "https://play.google.com/store/apps/details?id=com.wakaztahir.timeline", playStoreIcon, "PlayStore") }
            </div>
        }
    })
}

func AcadtableCard(page : &mut HtmlPage) {
    const tags = [ std::string_view("August 2020") ]
    var playStoreIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { PlayStoreIcon(p2) }
    var webIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { WebIcon(p2) }
    var windowsIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { WindowsIcon(p2) }
    var githubIcon : std::function<(p2 : &mut HtmlPage) => void> = (p2 : &mut HtmlPage) => { GithubIcon(p2) }
    ProjectCard(page, std::span<std::string_view>(tags), |playStoreIcon, webIcon, githubIcon|(page : &mut HtmlPage) => {
        #html {
            { ProjectCardTitle(page, "Acadtable") }
            { ProjectCardDescription(page, "Online react application that allows the users to make academic time tables.") }
            <div style="display:flex; flex-wrap:wrap; gap:0.5em;">
                { ProjectCardLinkWithIcon(page, "https://wakaztahir.github.io/acadtable/", webIcon, "Live Demo") }
                { ProjectCardLinkWithIcon(page, "https://github.com/wakaztahir/acadtable", githubIcon, "Github") }
            </div>
        }
    })
}