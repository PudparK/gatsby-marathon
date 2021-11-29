import React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import * as styles from "./styles.module.scss"

const HamburgerButton = ({ toggle, onClick }) => {
  const [isRender, setIsRender] = useState(false)

  const _onClick = () => {
    setIsRender(true)
    onClick()
  }

  return (
    <div
      id="hamburger-button"
      role="button"
      tabIndex="0"
      onClick={_onClick}
      onKeyDown={_onClick}
      className={classNames(styles.hamburgerButton, {
        [styles.isToggled]: isRender && toggle,
        [styles.isNotToggled]: isRender && !toggle,
      })}
    >
      <span />
      <span />
      <span />
    </div>
  )
}

HamburgerButton.propTypes = {
  toggle: PropTypes.bool,
  onClick: PropTypes.func,
}

export default HamburgerButton
