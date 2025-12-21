struct SEOProps {
    var title : std::string
    var description : std::string
    var image : std::string
    var article : bool = false
    var siteUrl : std::string
}

func SEO(page : &mut HtmlPage, props : SEOProps) {
    #html {
        <head>
            <title>{props.title.data()}</title>
            <meta name="description" content={props.description.data()}/>
            <meta name="image" content={props.image.data()}/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:creator" content="@wakaztahir"/>
        </head>
    }
    if(!props.siteUrl.empty()) {
        #html {
            <head>
                <meta property="og:url" content={props.siteUrl.data()}/>
            </head>
        }
    }
    if(props.article) {
        #html {
            <head>
                <meta property="og:type" content="article"/>
            </head>
        }
    }
    if(!props.title.empty()) {
        #html {
            <head>
                <meta property="og:title" content={props.title.data()}/>
                <meta name="twitter:title" content={props.title.data()}/>
            </head>
        }
    }
    if(!props.description.empty()) {
        #html {
            <head>
                <meta property="og:description" content={props.description.data()}/>
                <meta name="twitter:description" content={props.description.data()}/>
            </head>
        }
    }
    if(!props.image.empty()) {
        #html {
            <head>
                <meta property="og:image" content={props.image.data()}/>
                <meta name="twitter:image" content={props.image.data()}/>
            </head>
        }
    }
}
