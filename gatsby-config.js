module.exports = {
  siteMetadata: {
    siteUrl: `https://wakaztahir.github.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-styled-components`
    }
  ]
}
