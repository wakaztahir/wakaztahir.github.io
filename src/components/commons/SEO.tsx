import { Meta, Title } from "solid-start"

const SEO = (props: SEOProps) => {
  return (
    <>
      <Title>{props.title}</Title>
      <Meta name="description" content={props.description} />
      <Meta name="image" content={props.image} />
      {props.siteUrl && <Meta property="og:url" content={props.siteUrl} />}
      {props.article && <Meta property="og:type" content="article" />}
      {props.title && <Meta property="og:title" content={props.title} />}
      {props.description && (
        <Meta property="og:description" content={props.description} />
      )}
      {props.image && <Meta property="og:image" content={props.image} />}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:creator" content={"@wakaztahir"} />
      {props.title && <Meta name="twitter:title" content={props.title} />}
      {props.description && (
        <Meta name="twitter:description" content={props.description} />
      )}
      {props.image && <Meta name="twitter:image" content={props.image} />}
    </>
  )
}

interface SEOProps {
  title: string,
  description: string,
  image ?: string,
  article?: boolean
  siteUrl ?: string
}

export default SEO
