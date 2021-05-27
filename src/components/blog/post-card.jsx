"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var gatsby_1 = require("gatsby");
var core_1 = require("@material-ui/core");
var useStyles = core_1.makeStyles({
    root: {
        maxWidth: 345
    },
    media: {
        height: 140
    },
    footer: {
        marginTop: "20px"
    }
});
function PostCard(_a) {
    var post = _a.post;
    var classes = useStyles();
    return (<core_1.Card className={classes.root}>
      <core_1.CardActionArea component={gatsby_1.Link} to={post.frontmatter.slug} style={{ textDecoration: "none" }}>
        <core_1.CardMedia className={classes.media} image={post.frontmatter.image} title={post.frontmatter.title}/>
        <core_1.CardContent>
          <core_1.Typography gutterBottom variant="h5" component="h2">
            {post.frontmatter.title}
          </core_1.Typography>
          <core_1.Typography variant="body1" color="textSecondary" component="p">
            {post.frontmatter.excerpt}
          </core_1.Typography>
          <div className={classes.footer}>
            <core_1.Typography variant={"caption"} style={{ height: "auto" }}>
              {post.frontmatter.author} - {post.frontmatter.date}
            </core_1.Typography>
          </div>
        </core_1.CardContent>
      </core_1.CardActionArea>
      <core_1.CardActions>
        <core_1.Button size="small" color="primary">
          Share
        </core_1.Button>
        <core_1.Button size="small" color="primary">
          Learn More
        </core_1.Button>
      </core_1.CardActions>
    </core_1.Card>);
}
exports.default = PostCard;
