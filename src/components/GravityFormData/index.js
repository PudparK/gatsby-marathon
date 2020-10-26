import { useStaticQuery, graphql } from "gatsby"
export default () => {
  const { allGfForm } = useStaticQuery(
    graphql`
      query {
        allGfForm {
          edges {
            node {
              ...GravityFormComponent
            }
          }
        }
      }
    `
  )
  console.log(allGfForm)
  return allGfForm
}
