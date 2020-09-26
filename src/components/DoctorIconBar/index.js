/** @jsx jsx */
import { jsx } from "theme-ui"
import styles from "./styles.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

export default () => {
  return (
    <div className={styles.iconBar}>
      <ul sx={{ color: "primary" }}>
        <li>
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </li>
        <li>
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </li>
        <li>
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </li>
      </ul>
    </div>
  )
}
