import React from "react"
import * as styles from "./styles.module.scss"
import classNames from "classnames"
import PropTypes from "prop-types"

const Blurb = ({ content, darkGray, children }) => {
  return (
    <div
      className={classNames(styles.blurbWrapper, {
        [styles.bgDarkGray]: darkGray,
      })}
    >
      <div className={styles.blurb}>
        <h2 className={classNames({ [styles.headingSpace]: children })}>
          {content.headerText}
        </h2>
        {children}
      </div>
    </div>
  )
}

Blurb.propTypes = {
  content: PropTypes.object,
}
export default Blurb
