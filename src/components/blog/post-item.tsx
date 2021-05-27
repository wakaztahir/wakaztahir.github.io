import * as React from "react"
import { FunctionComponent } from "react"
import styled from "styled-components"
import { Typography } from "@material-ui/core"
import { Post } from "../../pages/blog"

const PostContainer = styled.div`
  padding: 2em;
  margin: 2em;
  border-radius: 4px;
  background: ${props => props.theme.palette.type === "dark" ? `rgba(255, 255, 255, .2)` : `rgba(0, 0, 0, .2)`};
`

const PostTitle = styled((props) => <Typography variant={"h3"} {...props} />)`

`

const PostExcerpt = styled((props) => <Typography variant={"body1"} {...props} />)`

`

const PostFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const PostCaption = styled((props) => <Typography variant={"subtitle1"} {...props} />)`

`

const PostItem: FunctionComponent<PostItemProps> = ({ post }) => {

  return (
    <PostContainer>
      <PostTitle>{post.frontmatter.title}</PostTitle>
      <PostExcerpt>{post.excerpt}</PostExcerpt>
      <PostFooter>
        <PostCaption>{post.frontmatter.date}</PostCaption>
        <PostCaption>{post.frontmatter.author}</PostCaption>
      </PostFooter>
    </PostContainer>
  )
}

interface PostItemProps {
  post: Post
}

export default PostItem
