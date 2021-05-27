import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Typography } from "@material-ui/core"
import { Post } from "../../pages/blog"
import { FunctionComponent } from "react"

const PostContainer = styled.div`
  padding: 2em;
  margin: 2em;
  border-radius: 4px;
  background: ${props => props.theme.palette.type === "dark" ? `rgba(255, 255, 255, .2)` : `rgba(0, 0, 0, .2)`};
`

const PostTitle = styled((props) => <Typography variant={"h3"} {...props} />)`
  display: block;
`

const PostExcerpt = styled((props) => <Typography variant={"body1"} {...props} />)`
  display: block;
`

const PostDate = styled(Typography)`
  display: block;
`

const PostItem: FunctionComponent<PostItemProps> = ({ post }) => {

  return (
    <PostContainer>
      <PostTitle>{post.frontmatter.title}</PostTitle>
      <PostExcerpt>{post.excerpt}</PostExcerpt>
    </PostContainer>
  )
}

interface PostItemProps {
  post: Post
}

export default PostItem
