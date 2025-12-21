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
    var menuClass = #css {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        align-items: center;
    }
    if(useButtons) {
        var clickLamb : std::function<(page : &mut HtmlPage)=>void> = ||() => {
            #html { <span>About</span> }
        }
        var cvBtnContent : std::function<(page : &mut HtmlPage)=>void> = ||() => {
             #html { <span>Download CV</span> }
        }
        #html {
            <div class={menuClass}>
                {MyButton(page, clickLamb, "showAboutDialog()")}
                <a href="/assets/WaqasTahirCV.pdf" download="waqas-tahir-cv.pdf">
                    {MyButton(page, cvBtnContent, "")}
                </a>
            </div>
        }
    } else {
        #html {
            <div class={menuClass}>
                <span>About</span>
                <a href="assets/WaqasTahirCV.pdf" download="waqas-tahir-cv.pdf">
                    <span>Download CV</span>
                </a>
            </div>
        }
    }
}

func MainSidebar(page : &mut HtmlPage) {
    
    // min-height: auto;
    var asideClass = #css {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 3em 2em;
        background-color: var(--bg-color);
        transition: background-color 0.4s ease;
        
        @media (min-width: 768px) {
            width: 22em;
            height: 100vh;
            overflow-y: hidden;
            position: sticky;
            top: 0;
            border: 1px solid rgba(0,0,0,0.05);
            border-left : 0px;
            border-top : 0px;
            border-bottom : 0px;
        }
    }

    var titleClass = #css {
        font-family: Montserrat, sans-serif;
        font-weight: 700;
        letter-spacing: -2px;
        font-size: 3.5rem;
        text-align: center;
        margin: 0.2em 0 0.5em;
        color: var(--text-color);
    }

    var separatorClass = #css {
        width: 80%;
        margin-top: 1em;
        margin-bottom: 1.5em;
        opacity: 0.2;
    }

    var navClass = #css {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
    }

    var socialClass = #css {
        margin-top: 1.5em;
        display: flex;
        flex-direction: row;
    }

    var footerClass = #css {
        margin-top: 1em;
        font-size: 0.85rem;
        opacity: 0.6;
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
