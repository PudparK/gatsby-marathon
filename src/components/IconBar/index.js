import React from "react"
import styles from "./styles.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

export default ({ size, links }) => {
  return (
    <div className={styles.iconBar}>
      <ul sx={{ color: "primary" }}>
        <li>
          <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </div>
  )
}
