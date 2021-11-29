import React from "react"
import * as styles from "./styles.module.scss"

//Components
import Container from "components/Container"

export default props => {
  return (
    <div sx={{ background: "lightgray" }} className={styles.practiceHeading}>
      <Container>
        <h1 sx={{ color: "primary", fontSize: "2", fontWeight: "bold" }}>
          {props.text}
        </h1>
      </Container>
    </div>
  )
}
