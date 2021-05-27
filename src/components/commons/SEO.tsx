import * as React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"

const SEO = ({ title, description, article, image }: SEOProps) => {
  const { href } = useLocation()


  // Check if data supplied
  // If not, use defaults
  const seo = {
    title: title,
    description: description,
    image: `${href}${image}`,
    siteUrl: `${href}`
  }

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`Waqas Tahir | ${seo.title}`}
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
      <meta name="twitter:creator" content={"@wakaztahir"} />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

interface SEOProps {
  title?: string,
  description?: string,
  image?: string,
  article: boolean
}

SEO.defaultProps = {
  title: "Waqas Tahir",
  description: "Waqas Tahir's Blog",
  image: null,
  article: false
}

export default SEO
