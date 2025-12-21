func NotFoundPage(page : &mut HtmlPage) {
    GlobalStyles(page);
    
    var containerClass = #css {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--bg-color);
        padding: 2em;
        box-sizing: border-box;
        text-align: center;
        position: relative;
        overflow: hidden;
    }

    var errorCodeClass = #css {
        font-size: 10rem;
        font-weight: 900;
        margin: 0;
        letter-spacing: -0.05em;
        opacity: 0.03;
        position: absolute;
        z-index: 0;
        user-select: none;
        color: var(--text-color);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    var contentClass = #css {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5em;
    }

    var titleClass = #css {
        font-family: Montserrat, sans-serif;
        font-size: 2rem;
        font-weight: 700;
        margin: 0;
        color: var(--text-color);
        letter-spacing: -1px;
    }

    var descClass = #css {
        font-size: 1.1rem;
        max-width: 450px;
        opacity: 0.7;
        line-height: 1.6;
        margin: 0;
    }

    var buttonWrapperClass = #css {
        margin-top: 1em;
    }

    #html {
        <div class={containerClass}>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="icon" href="assets/images/favicon.png" type="image/png" />
            </head>
            <h1 class={errorCodeClass}>404</h1>
            <div class={contentClass}>
                <h2 class={titleClass}>Lost in Code</h2>
                <p class={descClass}>The page you're looking for doesn't exist or has been moved to another dimension.</p>
                <div class={buttonWrapperClass}>
                    <a href="/">
                        {MyTextButton(page, "Back to Homepage", "")}
                    </a>
                </div>
            </div>
        </div>
    }
}
