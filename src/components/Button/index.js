import React from "react"
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
      {props.text + " "} {props.children}
    </button>
  )
}
