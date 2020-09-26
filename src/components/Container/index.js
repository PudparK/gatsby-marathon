import React from "react"
import styles from "./styles.module.scss"
import classNames from "classnames"

export default ({ bgColor, content, children }) => {
  return (
    <div className={styles.containerWrapper}>
      {content}
      <div className={classNames(styles.container, { lightBlue: bgColor })}>
        {children}
      </div>
    </div>
  )
}
