import * as React from "react"
import { graphql } from "gatsby"
import PostExcerpt from "../components/blog/post-excerpt/post-excerpt"
import Header from "../components/header/header"
import * as css from "../styles/blog.module.scss"
import MyApp from "../components/commons/MyApp"

const Blog = ({ data: { allMdx: { edges } } }) => {
  //Posts Component
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostExcerpt key={edge.node.id} post={edge.node} />)

  return (
    <MyApp>
      <main>
        <title>Waqas Tahir - Blog</title>
        <Header />
        <div className={`${css.headerMargin}`} />
        <div className="posts-container">
          {Posts}
        </div>
      </main>
    </MyApp>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
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
