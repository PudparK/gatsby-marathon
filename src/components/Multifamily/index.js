import React from "react"
import styles from "./styles.module.scss"

//Components
import Blurb from "components/Blurb"
import ContentBoxStatic from "components/ContentBoxStatic"
import Events from "components/Events"
import Hero from "components/Hero"

//Assets
const bg = require(`../../assets/img/services.jpg`)

const content = {
  hero: { headerText: `RUN WITH US`, buttonText: `APPLY NOW` },
  servicesBlurb: {
    headerText: `SERVICES`,
  },
  eventsBlurb: {
    headerText: `EVENTS`,
    darkGray: true,
  },
  contentBoxesStaticContent: [
    {
      heading: `CANDIDATE RESOURCES`,
      imgSrc: require(`assets/img/billing-sheet-icon.svg`),
      content: (
        <React.Fragment>
          <p>Marathon Personnel’s user friendly search engine connects job seekers with current openings. Discover jobs in your area today!</p>
        </React.Fragment>
      ),
    },
    {
      heading: `EMPLOYERS`,
      imgSrc: require(`assets/img/paycheck-stub-icon.svg`),
      content: (
        <React.Fragment>
          <p>Our training program ensures consistent personnel with high quality services to meet the needs of each property. We like to hire the best and train them to do precise jobs. Our pipeline employees acquire the skills and values necessary to contribute to a winning team.</p>
          <div>
            <h3>Current Training Programs</h3>
            <ul>
              <li>• Coming Soon</li>
            </ul>
          </div>
        </React.Fragment>
      ),
    },
  ],
}

const Multifamily = ({ page }) => {
  return (
    <React.Fragment>
      <Hero content={content.hero} bgSrc={bg} page={page} />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <Blurb content={content.servicesBlurb}>
            <React.Fragment>
              <div className={styles.servicesContent}>
                <div className={styles.pText}>
                  <p>Marathon Personnel is a full service temp-to-permanent employment agency serving the apartment industry in Houston and surrounding areas. We provide temporary, temp to hire and direct hire services for a variety of careers in the multi-family rental housing industry.</p>
                  <p>
                    Our office staff is knowledgeable in the various career opportunities in the multifamily industry. If you feel you’re a great candidate for employment but have more questions about this industry, give us a call today.</p>
                </div>
                <div className={styles.servicesListWrapper}>
                  <div className={styles.servicesList}>
                    <h3>Where job seekers and employers come together</h3>
                    <ul className={styles.servicesListUl}>
                      <li>• Management & Maintenance</li>
                      <li>• Supervisors</li>
                      <li>• Property managers</li>
                      <li>• Assistant managers/book keepers</li>
                      <li>• Leasing Consultants</li>
                      <li>• Activity Directors/Support Staff</li>
                      <li>• EPA Certified</li>
                      <li>• Maintenance Technicians (Ticket Runners)</li>
                      <li>• Make Ready/Unit Turn/Punch out Personnel</li>
                      <li>• Painters</li>
                      <li>• Groundskeepers/ Housekeepers </li>
                      <li>• Mystery Shoppers</li>
                      <li>• Storm & Disaster Recovery Workers</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.contentBoxesWrapper}>
                {content.contentBoxesStaticContent.map((contentBox, i) => {
                  return <ContentBoxStatic content={contentBox} key={i} />
                })}
              </div>
            </React.Fragment>
          </Blurb>
          <Events
            content={content.eventsEvents}
            darkGray={content.eventsBlurb.darkGray}
          ></Events>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Multifamily
