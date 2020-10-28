import React from "react"
import classNames from "classnames"
import styles from "./styles.module.scss"
import PropTypes from "prop-types"

//Components
import Button from "components/Button"

const Hero = ({ content, bgSrc, page }) => {
  console.log("page:", page)
  const location = () => {
    if (page) {
      console.log("page:", page)
      return page.pathname === "/services" ? true : false
    }
  }
  return (
    <div
      className={styles.heroWrapper}
      style={{ backgroundImage: `url(${bgSrc})` }}
    >
      <div className={styles.hero}>
        <h1 className={classNames({ [styles.whiteHeader]: location() })}>
          {content.headerText}
        </h1>
        <a
          href="https://tfs.avionte.com/247-wfp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button text={content.buttonText} />
        </a>
      </div>
    </div>
  )
}

Hero.propTypes = {
  content: PropTypes.object,
}

export default Hero
