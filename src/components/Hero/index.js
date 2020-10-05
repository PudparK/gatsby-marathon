import React from "react"
import styles from "./styles.module.scss"
import PropTypes from "prop-types"

//Components
import Button from "components/Button"

const Hero = ({ content, bgSrc }) => {
  console.log("bgSrc:", bgSrc)
  return (
    <div
      className={styles.heroWrapper}
      style={{ backgroundImage: `url(${bgSrc})` }}
    >
      <div className={styles.hero}>
        <h1>{content.headerText}</h1>
        <Button text={content.buttonText} />
      </div>
    </div>
  )
}

Hero.propTypes = {
  content: PropTypes.object,
}

export default Hero
