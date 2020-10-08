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
      resolve: "gatsby-source-gravityforms",
      options: {
        // Base URL needs to include protocol (http/https)
        baseUrl: "https://marathon.132graphics.com/",
        // Gravity Forms API
        api: {
          key: process.env.CONSUMER_KEY,
          secret: process.env.CONSUMER_SECRET,
        },
        // Basic Auth
        // basicAuth: {
        //   username: "USERNAME",
        //   password: "PASSWORD",
        // },
        // ignoreFields: [
        //   // Top level fields within the Gravity Forms return
        //   // to ignore.
        //   // Default ignore is 'notifications'. To keep this
        //   // as set, remove the ignoreFields setting from here.
        //   // If adding more fields, you will need to include
        //   // notifications to ensure it is ignored.
        // ],
      },
    },
  ],
}
