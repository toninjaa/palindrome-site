module.exports = {
  siteMetadata: {
    title: `Palindrome Detector`,
    description: `Enter some text to put it to the palindrome test!`,
    author: `@toninjaa`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `palindrome-detector`,
        short_name: `palindrome`,
        start_url: `/`,
        background_color: `#b3f0ff`,
        theme_color: `#006680`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
