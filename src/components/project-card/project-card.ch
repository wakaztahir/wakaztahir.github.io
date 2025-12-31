func ProjectCardTitle(page : &mut HtmlPage, text : std::string_view) {
    var className = #css {
        margin-top: 0;
        margin-bottom: 0.5em;
        font-family: Inter, sans-serif;
        font-weight: 700;
        font-size: 1.5rem;
    }
    #html {
        <h4 class={className}>{text}</h4>
    }
}

func ProjectCardDescription(page : &mut HtmlPage, text : std::string_view) {
    var className = #css {
        margin: 1.5em 0 2em;
        line-height: 1.5;
        font-size: 0.95rem;
        opacity: 0.8;
    }
    #html {
        <p class={className}>{text}</p>
    }
}

func ProjectCardLinkWithIcon(page : &mut HtmlPage, path : std::string_view, icon : std::function<(p : &mut HtmlPage)=>void>, _text : std::string_view) {
    var linkClass = #css {
        display: block;
        text-decoration: none;
        &:hover > svg {
            opacity: 0.8;
        }
    }
    var rowClass = #css {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    var buttonFunc : std::function<(p : &mut HtmlPage)=>void> = |rowClass, icon|(page : &mut HtmlPage) => {
        #html {
            <div class={rowClass}>
                {icon(page)}
            </div>
        }
    }
    #html {
        <a href={path} target="_blank" class={linkClass}>
             {MyButton(page, buttonFunc, "")}
        </a>
    }
}

func card_tags(page : &mut HtmlPage, tags : std::span<std::string_view>) {
    var i = 0u;
    const total = tags.size();
    while(i < total) {
        var tag = *tags.get(i);
        #html {
            <p>{tag}</p>
        }
        i++;
    }
}

func ProjectCard(page : &mut HtmlPage, tags : std::span<std::string_view>, content : std::function<(p : &mut HtmlPage) => void>) {
    var cardClass = #css {
        width: calc(100% - 2em);
        margin: 1em auto 0;
        transition: width 0.4s ease-out, height 0.4s ease-out;
        background-color: var(--card-bg);
        transition: width 0.4s ease-out, height 0.4s ease-out, background-color 0.3s ease;
        box-sizing: border-box;
        padding: 1.5em;
        border-radius: 0.5em;
        position: relative;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);

        @media (min-width: 600px) {
            width: 16em;
            margin: 1em;
        }
    }
    
    var footerClass = #css {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 2em;
        gap: 1em;
    }

    var tagsClass = #css {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5em;
        & p {
            margin: 0;
            font-size: 0.8rem;
            color: var(--icon-fill);
            opacity: 0.7;
        }
    }

    #html {
        <div class={cardClass}>
            {content(page)}
            <div class={tagsClass}>
                {card_tags(page, tags)}
            </div>
        </div>
    }
}
