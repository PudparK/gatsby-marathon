/** @jsx jsx */
import { jsx } from "theme-ui"
import styles from "./styles.module.scss"

export default props => {
  return (
    <div
      sx={{
        bg: "secondary",
      }}
      className={styles[props.type]}
    ></div>
  )
}
