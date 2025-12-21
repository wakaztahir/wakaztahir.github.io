func MyButton(page : &mut HtmlPage, content : std::function<(page : &mut HtmlPage)=>void>) {
    var buttonClass = #css {
        padding: 0.6em 1.2em;
        background: #2b3a42;
        color: #fff;
        border: 0;
        outline: 0;
        cursor: pointer;
        border-radius: 1.4em;
        box-sizing: border-box;
        transition: color 0.3s ease-out, background 0.3s ease-out;

        &:hover {
            color: #2b3a42;
            background: #fff;
        }
        
        .dark & {
            background: #fff;
            color: #2b3a42;
        }
        
        .dark &:hover {
            background: #2b3a42;
            color: #fff;
        }
    }
    #html {
        <button class={buttonClass}>{content(page)}</button>
    }
}

func MyTextButton(page : &mut HtmlPage, content : std::string_view) {
    MyButton(page, |&content|(page : &mut HtmlPage) => {
        #html {
            <span>{content.data()}</span>
        }
    })
}