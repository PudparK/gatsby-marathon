import React from "react"
import styles from "./styles.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  // faTwitter,
  // faInstagram,
} from "@fortawesome/free-brands-svg-icons"

export default ({ size, links }) => {
  return (
    <div className={styles.iconBar}>
      <ul sx={{ color: "primary" }}>
        <li>
          <a href=" https://www.facebook.com/Marathon-Personnel-107691901106648">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        {/* <li>
          <a href="https://www.twitter.com">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li> */}
      </ul>
    </div>
  )
}
