import * as React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {props.headComponents}
      <link rel="icon" type="image/png" href="images/favicon.png" />
      <meta name="description" content="Software Developer" />
    </head>
    <body {...props.bodyAttributes}>
    {props.preBodyComponents}
    <div
      key={`body`}
      id="___gatsby"
      dangerouslySetInnerHTML={{ __html: props.body }}
    />
    {props.postBodyComponents}

    {/*Google Fonts*/}
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Raleway:wght@300&family=Hind&display=swap"
          rel="stylesheet" />
    </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}
