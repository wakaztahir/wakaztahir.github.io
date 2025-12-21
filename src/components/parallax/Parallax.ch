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
                    const isDark = html.classList.contains('dark');
                    const newTheme = isDark ? 'light' : 'dark';
                    
                    html.classList.remove('light', 'dark');
                    html.classList.add(newTheme);
                    localStorage.setItem('theme', newTheme);
                }

                // Immediate initialization to prevent flash
                (function() {
                    const savedTheme = localStorage.getItem('theme') || 'dark';
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
        min-height: 100vh;
        overflow-x: hidden;

        @media (min-width: 768px) {
            height: 100vh;
        }

        & canvas {
            z-index: -1 !important;
            position: fixed !important;
            width: 100% !important;
            left: 0 !important;
            height: 100% !important;
        }

        & .parallax-content {
            z-index: 4;
            min-height: 100vh;
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
