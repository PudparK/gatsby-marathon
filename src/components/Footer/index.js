import React from "react"
import * as styles from "./styles.module.scss"
import logoSrc from "assets/img/logo.png"

import IconBar from "components/IconBar"
import Logo from "components/Logo"

function Footer() {
  return (
    <React.Fragment>
      <footer className={styles.footer}>
        <div className={styles.flex}>
          <div>
            <Logo imageSrc={logoSrc} />
          </div>
          <div className={styles.address}>
            <p>
              2600 South Shore Blvd. Suite 300
              <br />
              League City, Tx 77598
            </p>
          </div>
          <div>
            <IconBar styleClass="borders" />
          </div>
          <div className={styles.small}>
            <p>
              Copyright © 2018 Marathon Personnel, LLC
              <br />
              All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
