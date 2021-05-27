import * as React from "react"
import { graphql } from "gatsby"
import PostCard from "../components/blog/post-card"
import MyApp from "../components/commons/MyApp"
import BaseSidebar from "../components/sidebar/base-sidebar"
import styled from "styled-components"

const BoxRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`

const Blog = ({ data: { allMdx: { edges } } }) => {
  //Posts Component
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostCard key={edge.node.id} post={edge.node} />)

  return (
    <MyApp>
      <main>
        <BoxRow>
          <BaseSidebar />
          <div className="posts-container">
            {Posts}
          </div>
        </BoxRow>
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
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            image
            author
          }
        }
      }
    }
  }
`
