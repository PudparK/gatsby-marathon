/** @jsx jsx */
import { jsx } from "theme-ui"
import styles from "./styles.module.scss"

export default props => {
  return (
    <div className={styles.blurb}>
      <h2 sx={{ color: "primary", fontWeight: "bold" }}>{props.blurbHeader}</h2>
      <p sx={{ color: "secondary" }}>{props.blurbText}</p>
    </div>
  )
}
