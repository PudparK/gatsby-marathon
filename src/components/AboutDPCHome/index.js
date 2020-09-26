/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import styles from "./styles.module.scss"

//Components
import Container from "components/Container"
import imgSrc from "../../assets/img/about-ghdpc.jpg"
import Button from "components/Button"
export default () => {
  let bgStyles = {
    backgroundImage: "url(" + imgSrc + ")",
    backgroundPosition: "center center",
    overflow: "hidden",
    backgroundRepeat: "no-repeat",
  }
  return (
    <Container>
      <div className={styles.about}>
        <div className={styles.sectionImage} style={bgStyles}></div>
        <div className={styles.textWrapper}>
          <div className={styles.text}>
            <h2 sx={{ color: "primary", fontWeight: "bold" }}>
              ABOUT DIRECT PRIMARY CARE
            </h2>
            <h3 sx={{ color: "secondary", fontWeight: "600" }}>Our Mission</h3>
            <p>
              Direct primary care is a relatively new model of primary care
              practice that is growing across the nation. Direct primary care
              practices contract directly with patients to provide all of the
              primary care services that they need for one flat monthly fee.
            </p>
            <Link to="/about/about-dpc">
              <Button text="Read More" />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

// TODO Add bottom border
