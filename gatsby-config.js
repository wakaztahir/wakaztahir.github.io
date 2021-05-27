/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Koop Blog`,
    titleTemplate: `%s | A simple MDX blog`,
    description: `Built using GatsbyJS and serving content using markdown`,
    siteUrl: `https://koop-blog.netlify.app`, // Cannot include a trailing slash
    image: `/images/macbook.jpg`,
    twitterUsername: `@twitter`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        additionalData: `@import "base";`,
        sassOptions: {
          includePaths: [`${__dirname}/src/styles`]
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`
    }
  ]
}
