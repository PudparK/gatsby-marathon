/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import styles from "./styles.module.scss"
import imgSrc from "../../assets/img/about-us.jpg"

//Components
import Button from "components/Button"

export default () => {
  let bgStyles = {
    backgroundImage: "url(" + imgSrc + ")",
    backgroundPosition: "center center",
    overflow: "hidden",
    backgroundRepeat: "no-repeat",
  }
  return (
    <div className={styles.about}>
      <div className={styles.sectionImage} style={bgStyles}></div>
      <div className={styles.textWrapper}>
        <div className={styles.text}>
          <h2 sx={{ color: "primary", fontWeight: "bold" }}>ABOUT US</h2>
          <h3 sx={{ color: "secondary", fontWeight: "600" }}>Our Mission</h3>
          <p>
            The Direct Care Physicians of Greater Houston is a nonprofit
            organization of direct primary care physicians and direct care
            specialist physicians in the Houston area. Our mission is to make
            high-quality, physician-led healthcare affordable and accessible to
            all, regardless of insurance status.
          </p>
          <Link to="/about/about-us">
            <Button text="Read More" />
          </Link>
        </div>
      </div>
    </div>
  )
}

// TODO Add bottom border
