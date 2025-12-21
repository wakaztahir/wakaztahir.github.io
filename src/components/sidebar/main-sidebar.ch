func SocialIconsNonColored(page : &mut HtmlPage) {
    var iconClass = #css {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
    }
    #html {
        <div class={iconClass}>
            <a href="https://facebook.com/wakaztahir" target="_blank" rel="noreferrer">
                {FacebookIcon(page)}
            </a>
            <a href="https://twitter.com/wakaztahir" target="_blank" rel="noreferrer">
                {TwitterIcon(page)}
            </a>
            <a href="https://stackoverflow.com/users/3343503/waqas" rel="noreferrer" target="_blank">
                {StackoverflowIcon(page)}
            </a>
            <a href="https://github.com/wakaztahir" target="_blank" rel="noreferrer">
                {GithubIcon(page)}
            </a>
        </div>
    }
}

func SocialIcons(page : &mut HtmlPage) {
    var iconClass = #css {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
    }
    #html {
        <div class={iconClass}>
            <a href="https://facebook.com/wakaztahir" target="_blank" rel="noreferrer">
                {FacebookIcon(page)}
            </a>
            <a href="https://twitter.com/wakaztahir" target="_blank" rel="noreferrer">
                {TwitterIcon(page)}
            </a>
            <a href="https://stackoverflow.com/users/3343503/waqas" rel="noreferrer" target="_blank">
                {StackoverflowIcon(page)}
            </a>
            <a href="https://github.com/wakaztahir" target="_blank" rel="noreferrer">
                {GithubIcon(page)}
            </a>
        </div>
    }
}

func SiteMenu(page : &mut HtmlPage, useButtons : bool) {
    if(useButtons) {
        #html {
            <div>
                {MyTextButton(page, "About")}
                <a href="/assets/WaqasTahirCV.pdf" download="waqas-tahir-cv.pdf">
                    {MyTextButton(page, "Download CV")}
                </a>
            </div>
        }
    } else {
        #html {
            <div>
                <span>About</span>
                <a href="/assets/WaqasTahirCV.pdf" download="waqas-tahir-cv.pdf">
                    <span>Download CV</span>
                </a>
            </div>
        }
    }
}

func MainSidebar(page : &mut HtmlPage) {
    
    var asideClass = #css {
        width: 22em;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        float: left;
        overflow-y: hidden;

        .dark & {
            background-color: rgba(43, 58, 66, 0.9);
        }

        .light & {
            background-color: rgba(255, 255, 255, .6);
        }
    }

    var titleClass = #css {
        font-family: Raleway, sans-serif;
        font-weight: normal;
        font-size: 4rem;
        text-align: center;
    }

    var separatorClass = #css {
        width: 80%;
        margin-top: 2em;
        margin-bottom: 2em;
    }

    var navClass = #css {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        & > * {
            margin-top: 0.5em;
        }
    }

    var socialClass = #css {
        margin-top: 2em;
        display: flex;
        flex-direction: row;
    }

    var footerClass = #css {
        margin-top: 1em;
    }

    #html {
        <aside class={asideClass}>
            <h1 class={titleClass}>Waqas Tahir</h1>
            <hr class={separatorClass} />
            <nav class={navClass}>
                {SiteMenu(page, true)}
            </nav>
            <section class={socialClass}>
                {SocialIcons(page)}
            </section>
            <section class={footerClass}>
                <span>&copy; 2024 | Built with love</span>
            </section>
        </aside>
    }
}
