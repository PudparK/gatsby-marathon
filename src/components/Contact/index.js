import React from "react"
import styles from "./styles.module.scss"

//Components
import Blurb from "components/Blurb"
import Events from "components/Events"
import GravityForm from "components/GravityForm"
import Container from "components/Container"
// import GravityForm from "gatsby-gravityforms-component"
import Map from "components/Map"
const content = {
  hero: { headerText: `RUN WITH US`, buttonText: `APPLY NOW` },
  contactBlurb: {
    headerText: `Contact`,
  },
  eventsBlurb: {
    headerText: `EVENTS`,
    darkGray: true,
  },
}

const Contact = () => {
  console.log("content.contactBlurb:", content.contactBlurb)
  return (
    <React.Fragment>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <Blurb content={content.contactBlurb}></Blurb>
          <Container>
            <div className={styles.contactContentWrapper}>
              <div className={styles.form}>
                <GravityForm />
              </div>
              <div className={styles.sideContent}>
                <p>
                  With the increasing number of confirmed Coronavirus (COVID-19)
                  cases, we are choosing to put our candidates and staff first
                  by closing our doors temporarily. No walk-ins will be accepted
                  until further notice, to help slow the spread of the virus.
                </p>

                <p>
                  If you have any questions or would like to apply, please call
                  or text (832)767-7054.
                </p>

                <p>
                  For more information about Coronavirus, please visit
                  www.CDC.gov
                </p>

                <div>
                  <ul>
                    <li>Marathon Personnel</li>
                    <li>
                      2600 South Shore Blvd. Suite 300 League City, Tx 77598
                    </li>

                    <li>
                      <a href="tel:+12819847309">281.984.7309</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
          <Map />
          <Events
            content={content.eventsEvents}
            darkGray={content.eventsBlurb.darkGray}
          ></Events>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Contact
