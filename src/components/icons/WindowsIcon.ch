func WindowsIcon(page : &mut HtmlPage, fill : std::string_view = "currentColor") {
    #html {
        <svg viewBox="0 0 24 24" width="24" height="24" fill={fill}>
            <path d="M3 12V6.33L9 5V12M10 12V4.84L21 3V12M21 13V21L10 19.16V13M9 13V19L3 17.67V13"/>
        </svg>
    }
}
