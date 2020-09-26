/** @jsx jsx */
import { jsx } from "theme-ui"
import styles from "./styles.module.scss"
// import memberImg from "assets/img/suchnsuch.png"
import MemberProfileContainer from "components/MemberProfileContainer"
import defaulImgSrc from "../../assets/img/dpc-logo.svg"

export default props => {
  const content = props.content
  console.log("content:", content)
  return (
    <div className={styles.doctorProfile}>
      <div className={styles.memberPhoto}>
        <img
          src={
            content.headshot == null ? defaulImgSrc : content.headshot.sourceUrl
          }
          alt="Text"
        />
      </div>
      <div className={styles.memberText}>
        <h2 sx={{ fontSize: "1", fontWeight: "600" }}>
          {content.physicianName}
        </h2>
        <ul>
          <li>Family Medicine</li>
          <li>Accepting new patients </li>
        </ul>
        <div>
          <MemberProfileContainer props={props} />
        </div>
      </div>
    </div>
  )
}

// TODO move IconBar under the Doctor.

// Office name
// Address
// Social Links
