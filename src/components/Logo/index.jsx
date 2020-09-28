import React from "react"
import PropTypes from "prop-types"

const Logo = ({ className, imageSrc, size, mb, ...otherProps }) => {
  return (
    <img
      src={imageSrc}
      alt="Marathon Logo"
      style={{
        width: "20rem",
      }}
    />
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
