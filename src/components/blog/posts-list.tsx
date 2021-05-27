import * as React from "react"
import { Post } from "../../pages/blog"
import PostItem from "./post-item"
import styled from "styled-components"

const PostsContainer = styled.div`

`

const PostsList = (props: PostsListProps) => {

  const { posts } = props

  return (
    <PostsContainer>
      {posts.map(post => <PostItem key={post.id} post={post} />)}
    </PostsContainer>
  )
}

interface PostsListProps {
  posts: Post[]
}

export default PostsList
