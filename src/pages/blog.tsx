import * as React from "react"
import { graphql } from "gatsby"
import MyApp from "../components/commons/MyApp"
import styled from "styled-components"
import PostsList from "../components/blog/posts-list"
import BlogSidebar from "../components/sidebar/blog-sidebar"
import { Hidden } from "@material-ui/core"

const BoxRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`

const PostsContainer = styled.div`
  background: ${props => props.theme.palette.background.paper}
`

const Blog = ({ data: { allMdx: { edges } } }) => {
  //Posts Component
  const Posts = edges
    .map(edge => edge.node)

  return (
    <MyApp>
      <main>
        <BoxRow>
          <Hidden smDown={true}>
            <BlogSidebar />
          </Hidden>
          <PostsContainer>
            <PostsList
              posts={Posts}
            />
          </PostsContainer>
        </BoxRow>
      </main>
    </MyApp>
  )
}

export default Blog

export interface Post {
  id: number,
  excerpt: string,
  frontmatter: {
    date: string,
    slug: string,
    title: string,
    image: string,
    author: string,
  }
}

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          excerpt(pruneLength: 300)
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
