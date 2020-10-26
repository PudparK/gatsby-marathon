const path = require("path")
require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Marathon Staffing`,
    description: `Doctors of Direct Care Physicians offer a variety of cost effect services.`,
    //TO DO need to add description
    author: `132 Design`,
  },

  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: process.env.WPGRAPHQL_URL,
        schema: {
          typePrefix: `Wp`,
          timeout: 100000,
        },
      },
    },
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
      resolve: "gatsby-remark-external-links",
      options: {
        target: "_blank",
        rel: "noopener noreferrer",
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpcontent`,
        url: `https://marathon.132graphics.com/graphql`,
      },
    },
    {
      resolve: "gatsby-source-gravityforms",
      options: {
        // Base URL needs to include protocol (http/https)
        baseUrl: "https://marathon.132graphics.com",
        // Gravity Forms API
        api: {
          key: process.env.CONSUMER_KEY,
          secret: process.env.CONSUMER_SECRET,
        },
      },
    },
  ],
}
