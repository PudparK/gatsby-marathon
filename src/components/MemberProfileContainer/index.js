/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import React from "react"
import styles from "./styles.module.scss"

//Components

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt,
  faPhone,
  faLink,
} from "@fortawesome/free-solid-svg-icons"

export default props => {
  return (
    <React.Fragment>
      <div className={styles.practiceBlurb} sx={{ fontSize: 1 }}>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet.
        </p>
      </div>
      <div className={styles.contactBar}>
        <ul sx={{ color: "primary" }}>
          <li>
            <Link to="https://maps.google.com">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
            </Link>
          </li>
          <li>
            <a href="tel:+8326617667">
              <FontAwesomeIcon icon={faPhone} size="2x" />
            </a>
          </li>
          <li>
            <Link to="https://www.vidafamilydpc.com/">
              <FontAwesomeIcon icon={faLink} size="2x" />
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.specialty}>
        <h3 sx={{ fontSize: 2 }}>Specialty</h3>
        <ul>
          <li>Family Medicine</li>
          <li>Woman's Health</li>
        </ul>
      </div>
      <div className={styles.hours}>
        <h3 sx={{ fontSize: 2 }}>Hours</h3>
        <table className="tg">
          <thead>
            <tr>
              <th className="tg-wp8o">Monday - Friday</th>
              <th className="tg-0lax">9am - 5pm</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className={styles.prices}>
        <h3 sx={{ fontSize: 2 }}>Prices and Fees</h3>
        <div className={styles.pricesRow}>
          <p>Age 0-17</p>
          <p>$25</p>
        </div>
        <div className={styles.pricesRow}>
          <p>Age 18-54</p>
          <p>$75</p>
        </div>
        <div className={styles.pricesRow}>
          <p>Age 55+</p>
          <p>$100</p>
        </div>
        <div className={styles.pricesRow}>
          <p>Enrollment Fee</p>
          <p>$50</p>
        </div>
      </div>
    </React.Fragment>
  )
}
