/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import styles from "./styles.module.scss"

import { useStaticQuery, graphql } from "gatsby"
import defaultFeaturedImage from "assets/img/defaultFeaturedImage.jpg"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faTag } from "@fortawesome/free-solid-svg-icons"

//Components
import Container from "components/Container"

export default () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost {
        edges {
          node {
            uri
            title
            content
            excerpt
            author {
              node {
                member_profile_acf {
                  physicianName
                  headshot {
                    sourceUrl
                    altText
                  }
                }
                avatar {
                  url
                }
              }
            }
            date
            desiredSlug
            tags {
              nodes {
                name
                link
                uri
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
    }
  `)
  const posts = data.allWpPost.edges

  return (
    <Container>
      <div className={styles.excerptWrapper}>
        {posts.map((post, i) => {
          const excerpt = post.node
          const imgSrc = excerpt.featuredImage
            ? excerpt.featuredImage.node.sourceUrl
            : defaultFeaturedImage

          return (
            <article className={styles.excerpt} key={i}>
              <header>
                <div className={styles.featuredImageWrapper}>
                  <Link to={excerpt.uri}>
                    <div
                      className={styles.featuredImage}
                      style={{
                        backgroundImage: "url(" + imgSrc + ")",
                      }}
                    >
                      <span className={styles.excerptLink}>Read</span>
                    </div>
                  </Link>
                </div>
              </header>
              <div className={styles.excerptBox}>
                <div className={styles.title}>
                  <h1 sx={{ color: "primary" }}>{excerpt.title}</h1>
                </div>
                <div className={styles.meta}>
                  {/* <h2>{excerpt.author.node.member_profile_acf.physicianName}</h2> */}
                </div>
                <div
                  className={styles.post}
                  dangerouslySetInnerHTML={{ __html: excerpt.excerpt }}
                  key={i}
                ></div>
                {/* <div sx={{ color: "lightgray" }} className={styles.tag}>
                <ul>
                  <li>
                    <FontAwesomeIcon
                      className="flipped"
                      icon={faTag}
                      sx={{ fontSize: 0, color: "primary" }}
                    />
                  </li>
                  {excerpt.tags.nodes.map((tag, i) => {
                    return <li key={i}>{tag.name}</li>
                  })}
                </ul>
              </div> */}
              </div>
            </article>
          )
        })}
      </div>
    </Container>
  )
}

// TODO add an hr line under each post.
// TODO share via social media buttons.
// TODO go to top button button
// TODO make newest one be pinned to the top. "Query for it."
