import * as React from "react"
import { Link } from "gatsby"

import "./"

import {
  Button,
  Card, CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  footer: {
    marginTop: "20px"
  }
})


function PostExcerpt({ post }) {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={post.frontmatter.slug} style={{ textDecoration: "none" }}>
        <CardMedia
          className={classes.media}
          image={post.frontmatter.image}
          title={post.frontmatter.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.frontmatter.title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {post.frontmatter.excerpt}
          </Typography>
          <div className={classes.footer}>
            <Typography variant={"caption"} style={{ height: "auto" }}>
              {post.frontmatter.author} - {post.frontmatter.date}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default PostExcerpt
