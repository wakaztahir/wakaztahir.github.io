func AboutDialog(page : &mut HtmlPage) {
    // // backdrop-filter: blur(5px);
    var overlayClass = #css {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    var dialogClass = #css {
        background: var(--bg-color);
        color: var(--text-color);
        padding: 2em;
        border-radius: 1em;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        position: relative;
    }

    var closeButtonClass = #css {
        position: absolute;
        top: 1em;
        right: 1em;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--text-color);
    }

    #html {
        <div id="about-dialog" class={overlayClass} onclick="hideAboutDialog(event)">
            <div class={dialogClass} onclick="event.stopPropagation()">
                <button class={closeButtonClass} onclick="hideAboutDialog()">×</button>
                <h2>About Me</h2>
                <p>
                    I am Waqas Tahir, an Android Developer passionate about creating beautiful and functional applications. 
                    I enjoy exploring new technologies and building tools that make people's lives easier.
                </p>
                <p>
                    This website is built with Chemical, my custom programming language designed for efficient web development.
                </p>
                <div style="margin-top:2em; display:flex; justify-content:flex-end;">
                    {MyTextButton(page, "Close", "hideAboutDialog()")}
                </div>
            </div>
        </div>
        <head>
            <script>{"""
                window.showAboutDialog = function() {
                    const dialog = document.getElementById('about-dialog');
                    if (dialog) dialog.style.display = 'flex';
                };
                window.hideAboutDialog = function(event) {
                    const dialog = document.getElementById('about-dialog');
                    if (dialog) dialog.style.display = 'none';
                };
            """}</script>
        </head>
    }
}
