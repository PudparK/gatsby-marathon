/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import styles from "./styles.module.scss"
import defaultFeaturedImage from "assets/img/defaultFeaturedImage.jpg"

export default props => {
  const content = props.content
  console.log("content:", content)

  const imgSrc = content.featuredImage
    ? content.featuredImage.node.sourceUrl
    : defaultFeaturedImage

  return (
    <div className="styles.blogPost" style={{ margin: "5rem auto 10rem auto" }}>
      <header>
        <div className={styles.featuredImageWrapper}>
          <div
            className={styles.featuredImage}
            style={{
              backgroundImage: "url(" + imgSrc + ")",
            }}
          ></div>
        </div>
      </header>
      <div className={styles.post}>
        <div className={styles.title}>
          <h1 sx={{ color: "primary", fontWeight: "bold" }}>{content.title}</h1>
        </div>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: content.content }}
        ></div>
        <div>
          <Link to="/"> Go to homepage</Link>
        </div>
      </div>
    </div>
  )
}
