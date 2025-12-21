func ThemeToggle(page : &mut HtmlPage) {
    var toggleClass = #css {
        position: fixed;
        bottom: 1.5em;
        right: 1.5em;
        z-index: 100;
        
        & .sun-icon { display: block; }
        & .moon-icon { display: none; }

        .dark & .sun-icon { display: none; }
        .dark & .moon-icon { display: block; }
    }

    var buttonContent : std::function<(page : &mut HtmlPage) => void> = (page : &mut HtmlPage) => {
        #html {
            <div class="sun-icon">{SunIcon(page)}</div>
            <div class="moon-icon">{MoonIcon(page)}</div>
        }
    }

    #html {
        <div class={toggleClass}>
             {MyButton(page, buttonContent, "toggleTheme()")}
        </div>
        <head>
            <script>{"""
                function toggleTheme() {
                    const html = document.documentElement;
                    if (html.classList.contains('dark')) {
                        html.classList.remove('dark');
                        html.classList.add('light');
                        localStorage.setItem('theme', 'light');
                    } else {
                        html.classList.remove('light');
                        html.classList.add('dark');
                        localStorage.setItem('theme', 'dark');
                    }
                }

                // Initialize theme
                (function() {
                    const savedTheme = localStorage.getItem('theme') || 'dark';
                    document.documentElement.classList.remove('light', 'dark');
                    document.documentElement.classList.add(savedTheme);
                })();
            """}</script>
        </head>
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
