/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import styles from "./styles.module.scss"

import Blurb from "components/Blurb"
import Map from "components/map"

export default ({ memberData }) => {
  return (
    <React.Fragment>
      <div id="map-container" className={styles.mapContainer}>
        <div className={styles.mapWrapper}>
          <Blurb
            blurbHeader="Find a Physician"
            blurbText="How does direct primary care work? Our network of physicians are ready to connect with you. "
          />
        </div>
        <div
          sx={{
            bg: "secondary",
          }}
          className={styles.MapBG}
        >
          <Map markers={memberData} />
        </div>
      </div>
    </React.Fragment>
  )
}

// TODO Write
