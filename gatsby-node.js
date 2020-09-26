const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
const getPlaceDetails = require("./getPlaceDetails")
const nodeFactory = require("./nodeFactory")
const { request, gql } = require("graphql-request")

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

const createBlogPostPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query content for WordPress posts
  const {
    data: {
      allWpPost: { nodes: allPosts },
    },
  } = await graphql(`
    query {
      allWpPost {
        nodes {
          uri
          title
          content
          excerpt
          authorId
          date
          desiredSlug
          tags {
            nodes {
              link
              name
              posts {
                nodes {
                  link
                  uri
                }
              }
            }
          }
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `)
  const postTemplate = path.resolve(`./src/templates/post.js`)
  allPosts.forEach(post => {
    createPage({
      // will be the url for the page
      path: post.uri,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.id,
        title: post.title,
        content: post.content,
        authorId: post.authorId,
        featuredImageUrl: post.featuredImage,
        tags: post.tags.nodes,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPostPages({ graphql, actions })

  const { createPage } = actions
  // query content for WordPress posts
  const {
    data: {
      allWpMemberProfile: { nodes: allMembers },
    },
  } = await graphql(`
    query {
      allWpMemberProfile {
        nodes {
          uri
          member_profile_acf {
            areasOfInterest
            physicianName
            boardCertification
            physicianName
            googlePlacesId
            specialty
            headshot {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  `)

  const memberTemplate = path.resolve(`./src/templates/member-doctor.js`)
  allMembers.forEach(member => {
    createPage({
      // will be the url for the page
      path: member.uri,
      // specify the component template of your choice
      component: slash(memberTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        uri: member.uri,
        areasOfInterest: member.member_profile_acf.areasOfInterest,
        physicianName: member.member_profile_acf.physicianName,
        boardCertification: member.member_profile_acf.boardCertification,
        fieldGroupName: member.member_profile_acf.fieldGroupName,
        physicianName: member.member_profile_acf.physicianName,
        googlePlacesId: member.member_profile_acf.googlePlacesId,
        specialty: member.member_profile_acf.specialty,
        headshot: member.member_profile_acf.headshot,
      },
    })
  })
}

// TODO change member_profiles
// TODO await for member createPages needs cleaning

// const resolvePlace = async ({
//   apiKey,
//   placeId,
//   createNode,
//   createNodeId,
//   createContentDigest,
// }) => {
//   const response = await getPlaceDetails(apiKey, placeId)

//   if (response.data.status !== "OK") {
//     throw Error("Request to Google API failed. " + response.data.error_message)
//   }

//   const place = response.data.result
//   console.log("😥😫😶😚😑place:", place)

//   createNode({
//     place: place.name,
//     id: createNodeId(placeId),
//     internal: {
//       type: "googlePlace",
//       mediaType: "application/json",
//       contentDigest: createContentDigest(place),
//     },
//   })
//   // place.id = placeId

//   // const placeNode = nodeFactory.placeNode(place)
//   // createNode(placeNode)

//   // const placeNode = nodeFactory.placeNode(place)
//   // createNode({
//   //   ...place,
//   //   id: placeId,
//   //   parent: null,
//   //   children: [],
//   //   internal: { type: "place", contentDigest: crypto },
//   // })
//   // delete placeNode.reviews

//   // place.reviews.forEach(review => {
//   //   review.id = review.time
//   //   const placeReviewNode = nodeFactory.reviewNode(review, {
//   //     parent: placeNode.id,
//   //   })
//   //   createNode(placeReviewNode)
//   // })

//   return
// }

// const createSourceNode = async (
//   { actions, createNodeId, createContentDigest },
//   { apiKey, placeIds, placeId }
// ) => {
//   try {
//     // Backwards compatibility
//     if (!placeIds) {
//       console.warn(
//         "gatsby-source-google-places has deprecated placeId. Use placeIds instead."
//       )
//       placeIds = placeId
//     }

//     const { createNode } = actions

//     // Single Place Id
//     if (typeof placeIds === "string") {
//       placeIds = [placeIds]
//     }

//     await Promise.all(
//       placeIds.map(pid =>
//         resolvePlace({
//           apiKey,
//           placeId: pid,
//           createNode,
//           createNodeId,
//           createContentDigest,
//         })
//       )
//     )
//   } catch (error) {
//     console.error(error)
//     process.exit(1)
//   }
// }

// exports.sourceNodes = async ({
//   actions,
//   createNodeId,
//   createContentDigest,
// }) => {
//   const query = gql`
//     query {
//       member_profiles {
//         nodes {
//           member_profile_acf {
//             googlePlacesId
//           }
//         }
//       }
//     }
//   `
//   const data = await request("https://ghdpc.132graphics.com/graphql", query)
//   const nodes = data.member_profiles.nodes
//   const placeIds = nodes.map(node => {
//     return node.member_profile_acf.googlePlacesId
//   })

//   const apiKey = GOOGLE_API_KEY
//   createSourceNode(
//     { actions, createNodeId, createContentDigest },
//     { apiKey, placeIds }
//   )
// }

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  // Data can come from anywhere, but for now create it manually
  const myData = {
    key: 123,
    foo: `The foo field of my node`,
    bar: `Baz`,
    fname: "Paul",
  }

  const nodeContent = JSON.stringify(myData)

  const nodeMeta = {
    id: createNodeId(`my-data-${myData.key}`),
    parent: null,
    children: [],
    internal: {
      type: `MyNodeType`,
      mediaType: `text/html`,
      content: nodeContent,
      contentDigest: createContentDigest(myData),
    },
  }

  const node = Object.assign({}, myData, nodeMeta)
  createNode(node)
}
