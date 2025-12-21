func MyButton(page : &mut HtmlPage, content : std::function<(page : &mut HtmlPage)=>void>, onClick : std::string_view = "") {
    var buttonClass = #css {
        padding: 0.8em;
        background: transparent;
        color: var(--text-color);
        border: 0;
        outline: 0;
        cursor: pointer;
        border-radius: 12px;
        box-sizing: border-box;
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.8;

        &:hover {
            opacity: 1;
            background: rgba(0,0,0,0.05);
            transform: translateY(-2px);
        }
        
        .dark &:hover {
            background: rgba(255,255,255,0.05);
        }

        & svg {
            transition: fill 0.25s ease;
        }
    }
    #html {
        <button class={buttonClass} onclick={onClick}>{content(page)}</button>
    }
}

func MyTextButton(page : &mut HtmlPage, content : std::string_view, onClick : std::string_view = "") {
    var textBtnClass = #css {
        padding: 0.8em 1.5em;
        font-weight: 600;
        font-size: 0.9rem;
    }
    var clickLamb : std::function<(page : &mut HtmlPage)=>void> = |&content|() => {
        #html {
            <span>{content.data()}</span>
        }
    }
    #html {
        <div class={textBtnClass}>
            {MyButton(page, clickLamb, onClick)}
        </div>
    }
}