import React from "react"
import styles from "./styles.module.scss"

//Components
import Blurb from "components/Blurb"

const content = {
  hero: { headerText: `RUN WITH US.`, buttonText: `APPLY NOW` },
  contactBlurb: {
    headerText: `Contact`,
  },
  eventsBlurb: {
    headerText: `EVENTS`,
    pText: `With the increasing number of confirmed Coronavirus (COVID-19) cases, we are choosing to put our candidates and staff first by closing our doors temporarily. No walk-ins will be accepted until further notice, to help slow the spread of the virus.`,
    darkGray: true,
  },
}

const Contact = () => {
  console.log("content.contactBlurb:", content.contactBlurb)
  return (
    <React.Fragment>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <Blurb content={content.contactBlurb}>
            <React.Fragment>
              <div className={styles.contactContent}>
                <div className={styles.form}></div>
                <div className={styles.sideContent}>
                  <p>
                    With the increasing number of confirmed Coronavirus
                    (COVID-19) cases, we are choosing to put our candidates and
                    staff first by closing our doors temporarily. No walk-ins
                    will be accepted until further notice, to help slow the
                    spread of the virus.
                  </p>

                  <p>
                    If you have any questions or would like to apply, please
                    call or text (832)767-7054.
                  </p>

                  <p>
                    For more information about Coronavirus, please visit
                    www.CDC.gov
                  </p>

                  <ul>
                    <li>Marathon Personnel</li>
                    <li>
                      711 W. Bay Area Blvd. STE. 675, Webster, TX 77598, US
                    </li>

                    <li>
                      <a href="tel:+18327695850">(832) 769-5850</a>
                    </li>
                  </ul>
                </div>
              </div>
            </React.Fragment>
          </Blurb>
          <Blurb
            content={content.eventsBlurb}
            darkGray={content.eventsBlurb.darkGray}
          >
            <p>
              With the increasing number of confirmed Coronavirus (COVID-19)
              cases, we are choosing to put our candidates and staff first by
              closing our doors temporarily. No walk-ins will be accepted until
              further notice, to help slow the spread of the virus.
            </p>
            <p>
              If you have any questions or would like to apply, please call or
              text{" "}
              <a href="tel:+8327677054">
                <strong>(832)767-7054</strong>
              </a>
              .
            </p>
            <p>
              For more information about Coronavirus, please visit{" "}
              <a href="https://www.cdc.gov">www.cdc.gov</a>.
            </p>
          </Blurb>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Contact
