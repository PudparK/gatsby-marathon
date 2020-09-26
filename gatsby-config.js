const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Direct Care Physicians of Greater Houston`,
    description: `Doctors of Direct Care Physicians offer a variety of cost effect services.`,
    //TO DO need to add description
    author: `132 Design`,
  },

  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-layouts`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-leaflet`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        root: path.join(__dirname, "src"),
      },
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `https://ghdpc.132graphics.com/graphql`,
        schema: {
          timeout: 100000,
        },
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpcontent`,
        url: `https://ghdpc.132graphics.com/graphql`,
      },
    },
  ],
}
