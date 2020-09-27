import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import styles from "./styles.module.css"

const Logo = ({ className, imageSrc, size, mb, ...otherProps }) => {
  return (
    <div
      {...otherProps}
      className={classNames(className, styles.logo)}
      style={{
        backgroundImage: `url(${imageSrc})`,
        height: size,
        width: size,
        marginBottom: mb,
      }}
    ></div>
  )
}

Logo.defaultProps = {
  size: "4rem",
}

Logo.propTypes = {
  className: PropTypes.string,
  imageSrc: PropTypes.string,
  size: PropTypes.string,
}

export default Logo
