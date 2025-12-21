func ThemeToggle(page : &mut HtmlPage) {
    var toggleClass = #css {
        position: fixed;
        bottom: 1em;
        right: 2em;
        z-index: 10;
    }
    #html {
        <div class={toggleClass}>
             {MyTextButton(page, "Toggle Theme")}
        </div>
    }
}

func Parallax(page : &mut HtmlPage, content : std::function<(p : &mut HtmlPage)=>void>) {
    var containerClass = #css {
        position: relative;
        flex-basis: 100%;
        flex-shrink: 2.5;
        height: 100vh;
        overflow-x: hidden;

        & canvas {
            z-index: -1 !important;
            position: fixed !important;
            width: 100% !important;
            left: 0 !important;
            height: 100% !important;
        }

        & .parallax-content {
            z-index: 4;
        }
    }

    #html {
        <div class={containerClass}>
            {ThemeToggle(page)}
            <div class="parallax-content">
                {content(page)}
            </div>
        </div>
    }
}
