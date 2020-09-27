import React from "react"
import styles from "./styles.module.scss"
import logoSrc from "assets/logo.svg"

import Container from "components/Container"
import IconBar from "components/IconBar"
import Logo from "components/Logo"
import SectionDivider from "components/SectionDivider/"

function Footer() {
  return (
    <React.Fragment>
      <SectionDivider type="thickBar"></SectionDivider>
      <footer sx={{ background: "lighterBlue" }} className={styles.footer}>
        <Container>
          <div className={styles.flex}>
            <div>
              <Logo imageSrc={logoSrc} size={"100px"} />
            </div>
            <div>
              <IconBar styleClass="borders" />
            </div>
            <div>
              <p sx={{ color: "primary" }}>
                Copyright © 2020 Direct Care Physicians of Greater Houston - All
                Rights Reserved.
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
