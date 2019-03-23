module.exports = {
  siteMetadata: {
    title: `Rebound: sci-fi dodgeball`,
    description: `An intense local multiplayer twin-stick dodgeball game. An out of control mess of crazed rebounding action! There is nowhere to hide with the top down camera, so stay on the move! 2-4 players face off in a free-for-all deathmatch arena. One hit and you’re out`,
    author: `Hexterion`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Ball_Logo_Transparent.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Orbitron`,
            variants: [`400`, `700`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`],
          },
          {
            family: `Raleway`,
            variants: [`200`, `400`, `700`],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
