import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

const PostTemplate = ({ data }) => {
  const { title, date, author, image } = data.mdx.frontmatter
  const { body } = data.mdx
  const img = getImage(image)

  return (
    <React.Fragment>
      <section>
        <Link className="btn" to="/">
          Back to all posts
        </Link>
        <div>
          <h1>{title}</h1>
          <h4>
            <span>Written by {author}</span> & Posted on <span>{date}</span>
          </h4>
        </div>
        <GatsbyImage image={img} alt="Blog Post" />
        <div>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        <h4>
          <span>Written by {author}</span> & Posted on <span>{date}</span>
        </h4>
      </section>
    </React.Fragment>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
        frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            image
            author
        }
      body
    }
  }
`

export default PostTemplate
