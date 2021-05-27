import * as React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { graphql, useStaticQuery } from "gatsby"

const SEO = ({ title, description, lang, image, article }: SEOProps) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  // Deconstruct data
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername
  } = site.siteMetadata

  // Check if data supplied
  // If not, use defaults
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    siteUrl: `${siteUrl}${pathname}`
  }

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={seo.title}
      titleTemplate={titleTemplate}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.siteUrl && <meta property="og:url" content={seo.siteUrl} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

interface SEOProps {
  title: string,
  description: string,
  image: string,
  lang?: string,
  article: boolean
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  lang: `en`,
  article: false
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: siteUrl
        defaultImage: image
        twitterUsername
      }
    }
  }
`

export default SEO