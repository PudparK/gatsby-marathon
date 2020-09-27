/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { useState } from "react"
import styles from "./styles.module.scss"
import classNames from "classnames"
import PropTypes from "prop-types"
import Logo from "components/Logo"
import logoSrc from "assets/logo.svg"
import { Link } from "gatsby"

//Components
import HamburgerButton from "components/HamburgerButton"
import MenuLinks from "components/MenuLinks"
import Sidebar from "components/Sidebar"

export default function Header({ className }) {
  const [toggle, setToggle] = useState(false)
  const [isToggable, setToggable] = useState(true)

  const toggleFunc = nextState => {
    console.log(nextState)
    if (isToggable) {
      setToggable(false)
      setTimeout(() => {
        setToggle(nextState)
        setToggable(true)
      }, 0)
    }
  }

  return (
    <React.Fragment>
      <div
        className={classNames(className, styles.header)}
        sx={{
          bg: "background",
        }}
      >
        <div className={styles.NavContainer}>
          <div className={styles.Logo}>
            <Link to="/">
              <Logo imageSrc={logoSrc} />
            </Link>
          </div>
          <div className={styles.Navigation}>
            <MenuLinks />
          </div>
          <div></div>
        </div>
        <HamburgerButton
          toggle={toggle}
          onClick={() => {
            setToggle(!toggle)
          }}
        />
        <Sidebar
          toggle={toggle}
          setToggle={() => {
            toggleFunc(false)
          }}
          content={<MenuLinks />}
        />
      </div>
      <div className={styles.headerSpace}></div>
    </React.Fragment>
  )
}

Header.propTypes = {
  className: PropTypes.string,
}
