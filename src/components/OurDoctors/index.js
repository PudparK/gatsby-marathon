/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import styles from "./styles.module.scss"
import { useStaticQuery, graphql, Link } from "gatsby"
import defaulImgSrc from "../../assets/img/dpc-logo.svg"

//Components
import IconBar from "components/IconBar"
import Button from "components/Button"

// TODO move IconBar under the Doctor.

export default () => {
  const data = useStaticQuery(graphql`
    {
      allWpMemberProfile {
        nodes {
          uri
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
  const doctors = data.allWpMemberProfile.nodes

  const MemberLogic = () => {
    // const member = {
    //   memberPhoto: doctor.member_profile_acf.headshot.sourceUrl || defaulImgSrc
    // }
    return doctors.map((doctor, i) => {
      return doctor.member_profile_acf.headshot?.sourceUrl ? (
        <React.Fragment key={i}>
          <div className={styles.member}>
            <div
              className={styles.memberPhoto}
              style={{
                backgroundImage: `url(${doctor.member_profile_acf.headshot.sourceUrl})`,
              }}
            ></div>
            <div className={styles.memberText}>
              <div className={styles.memberHeading}>
                <h2 sx={{ fontWeight: "600" }}>
                  {doctor.member_profile_acf.physicianName}
                </h2>
              </div>

              <div className={styles.memberUl}>
                <ul>
                  <li>Family Medicine</li>
                  <li>Accepting new patients </li>
                </ul>
              </div>

              <div className={styles.iconBar}>
                <IconBar size="sm" />
              </div>

              <div className={styles.profileButton}>
                <Link to={doctor.uri}>
                  <Button text="PROFILE" />
                </Link>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment key={i}>
          <div className={styles.member}>
            <div
              className={styles.memberPhoto}
              style={{
                backgroundImage: `url(${defaulImgSrc})`,
              }}
            ></div>
            <div className={styles.memberText}>
              <div className={styles.memberHeading}>
                <h2 sx={{ fontWeight: "600" }}>
                  {doctor.member_profile_acf.physicianName}
                </h2>
              </div>

              <div className={styles.memberUl}>
                <ul>
                  <li>Family Medicine</li>
                  <li>Accepting new patients </li>
                </ul>
              </div>

              <div className={styles.iconBar}>
                <IconBar size="sm" />
              </div>

              <div className={styles.profileButton}>
                <Link to={doctor.uri}>
                  <Button text="PROFILE" />
                </Link>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    })
  }

  return (
    <div className={styles.memberWrapper}>
      <MemberLogic />
    </div>
  )
}
