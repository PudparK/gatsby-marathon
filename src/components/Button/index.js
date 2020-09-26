/** @jsx jsx */
import { jsx } from "theme-ui"
import styles from "./styles.module.scss"

export default props => {
  return (
    <button
      className={styles.Button}
      sx={{
        bg: "primary",
        color: "white",
      }}
    >
      {props.text}
    </button>
  )
}
