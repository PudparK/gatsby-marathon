const path = require(`path`)
require("dotenv").config()

// const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY
// console.log("🚀🚀🚀 GOOGLE_API_KEY:", GOOGLE_API_KEY)

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}
