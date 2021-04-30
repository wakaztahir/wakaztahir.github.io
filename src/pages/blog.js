import React from "react"
import { graphql } from "gatsby"
import PostExcerpt from "../components/blog/post-excerpt/post-excerpt"
import Header from "../components/header/header"
import * as css from "../styles/blog.module.scss"

const Blog = ({ data: { allMarkdownRemark: { edges } } }) => {
  //Posts Component
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostExcerpt key={edge.node.id} post={edge.node} />)

  return (
    <main>
      <title>Waqas Tahir - Blog</title>
      <Header />
      <div className="header-margin" />
      <div className="posts-container">
        {Posts}
      </div>
    </main>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            excerpt
            image
            author
          }
        }
      }
    }
  }
`
