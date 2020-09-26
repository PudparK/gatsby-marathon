/** @jsx jsx */
import { jsx } from "theme-ui"
import styles from "./styles.module.scss"

//Components

export default ({ size, bgImage }) => {
  return (
    <div
      className={styles.backgroundImage}
      style={{ height: "50vh", backgroundImage: `url(${bgImage})` }}
    ></div>
  )
}
