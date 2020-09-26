/** @jsx jsx */
import { jsx } from "theme-ui"
import styles from "./styles.module.scss"

//Components
import BackgroundImage from "components/BackgroundImage"
import Container from "components/Container"
import bgImage from "../../assets/img/about-ghdpc.jpg"

export default ({ page }) => {
  return (
    <Container bgColor={true} content={<BackgroundImage bgImage={bgImage} />}>
      <div className={styles.about}>
        <h1 sx={{ color: "primary", fontSize: 4, fontWeight: "bold" }}>
          ABOUT DIRECT PRIMARY CARE
        </h1>
        <p>
          Direct primary care is a relatively new model of primary care practice
          that is growing across the nation. Direct primary care practices
          contract directly with patients to provide all of the primary care
          services that they need for one flat monthly fee.
        </p>
        <p>
          This allows patients and physicians to work together for the best
          interest of the patient, without interference from third parties such
          as insurance companies. It also allows patients to save money as they
          do not need to worry about co-pays or deductibles when seeking care,
          and many practices include same-day, next-day, and virtual visits to
          prevent the need to visit urgent cares or emergency rooms for acute
          problems.
        </p>
        <p>
          Many practices also offer discounted lab pricing and work with
          patients to find affordable options for imaging studies and
          procedures.
        </p>
        <p>
          In addition to primary care services, direct care has expanded to
          include specialty physician practices as well. These practices allow
          patients to seek care directly from physician specialists in areas
          such as dermatology, endocrinology, and more. Patients are able to see
          a physician specialist for an affordable, transparent cost without
          having to worry about complicated referral processes through insurance
          carriers.
        </p>
        <p>
          Direct care physicians are committed to providing the highest standard
          of care to all patients with affordable, transparent pricing. Meet our
          physicians to learn more about their practices and find the right
          physician for you!
        </p>
      </div>
    </Container>
  )
}

// TODO Add bottom border
