/** @jsx jsx */
import { jsx } from "theme-ui"
import styles from "./styles.module.scss"
import aboutBg from "../../assets/img/about-us.jpg"

//Components
import BackgroundImage from "components/BackgroundImage"
import Container from "components/Container"

export default ({ page }) => {
  return (
    <Container
      bgColor={true}
      content={<BackgroundImage size="80vh" bgImage={aboutBg} />}
    >
      <div className={styles.about}>
        <h1 sx={{ color: "primary", fontSize: 4, fontWeight: "bold" }}>
          OUR MISSION
        </h1>
        <p>
          The Direct Care Physicians of Greater Houston is a nonprofit
          organization of direct primary care physicians and direct care
          specialist physicians in the Houston area. Our mission is to make
          high-quality, physician-led healthcare affordable and accessible to
          all, regardless of insurance status.
        </p>
        <p>
          Through our organization, we provide education to the public about
          direct care options and how to access quality healthcare that is
          affordable. We strive to improve public literacy in not only accessing
          healthcare, but also in how to pay for it so that they are not
          bankrupted by exorbitant prices and surprise bills.
        </p>
        <p>
          We also provide education and support to medical students, residents,
          and fellow physicians who are interested in practicing under a direct
          care model. We believe that by expanding access to direct care options
          with price transparency, we can make accessing healthcare more
          equitable. If you are a medical student, resident, or physician and
          would like more information, contact us here.
        </p>
      </div>
    </Container>
  )
}

// TODO Add bottom border
