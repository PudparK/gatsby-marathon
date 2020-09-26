import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    {
      allWpMemberProfile {
        nodes {
          id
          member_profile_acf {
            areasOfInterest
            physicianName
            boardCertification
            fieldGroupName
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
  const memberNodes = data.allWpMemberProfile.nodes
  console.log("memberNodes:", memberNodes)

  return memberNodes
}
