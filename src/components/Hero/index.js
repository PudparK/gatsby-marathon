import React from "react"
import styles from "./styles.module.scss"
import logoSrc from "assets/logo.svg"
import { AnchorLink } from "gatsby-plugin-anchor-links"

//Components
import Button from "components/Button"
import Logo from "components/Logo"

export default props => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.hero}>
        <Logo imageSrc={logoSrc} size={"8rem"} mb={"2.5rem"} />
        <h1
          sx={{
            color: "primary",
            mb: 3,
            fontWeight: "bold",
          }}
        >
          {props.headerText}
        </h1>
        <p
          sx={{
            color: "secondary",
            mb: 3,
          }}
        >
          {props.pText}
        </p>
        <AnchorLink to="#map-container">
          <Button text={props.buttonText} />
        </AnchorLink>
      </div>
    </div>
  )
}
