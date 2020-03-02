module.exports = {
  siteMetadata: {
    title: `Do It Mother Fucker!`,
    description: `This is my version of the legendary DO IT MOTHERFUCKER DOT COM,
    I just knew this site from https://resir014.github.io/doitmotherfucker/`,
    author: `@firmanjabar`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0a0a0a`,
        theme_color: `#0a0a0a`,
        display: `stand-alone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}