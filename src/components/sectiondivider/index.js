import React from "react"
import styles from "./styles.module.scss"

export default props => {
  return <div className={styles[props.type]}></div>
}
