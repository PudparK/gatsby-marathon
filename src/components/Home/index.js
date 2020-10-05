import React from "react"
import styles from "./styles.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"

//Components
import ContentBox from "components/ContentBox"
import Blurb from "components/Blurb"
import Hero from "components/Hero"

//Assets
const bg = require(`../../assets/img/hero-bg.jpg`)

const content = {
  hero: { headerText: `RUN WITH US.`, buttonText: `APPLY NOW` },
  blurb: {
    headerText: `WELCOME`,
    pText: `Marathon Personnel strives to connect individuals to
    their optimal job position by providing essential guidance
    needed to thrive within their industry.`,
  },
  welcomeBlurb: {
    headerText: `WELCOME`,
    pText: `Marathon Personnel strives to connect individuals to
    their optimal job position by providing essential guidance
    needed to thrive within their industry.`,
  },
  eventsBlurb: {
    headerText: `EVENTS`,
    pText: `With the increasing number of confirmed Coronavirus (COVID-19) cases, we are choosing to put our candidates and staff first by closing our doors temporarily. No walk-ins will be accepted until further notice, to help slow the spread of the virus.`,
    darkGray: true,
  },
  contentBoxes: [
    {
      heading: `ABOUT US`,
      imgSrc: require(`assets/img/about-us.jpg`),
      content: (
        <React.Fragment>
          <p>
            Here at Marathon Personnel, we fervently work to provide notable and
            essential support to strengthen our American workforce.
          </p>
          <p>
            We utilize essential tactics to stay ahead of recruiting trends and
            labor markets.
          </p>
          <p>
            <strong className="bold">We specialize in providing:</strong>
          </p>
          <ul>
            <li>• Skilled Trades &#38; Helpers</li>
            <li>• Light Industrial Laborers</li>
            <li>• Administrative Personnel</li>
          </ul>
        </React.Fragment>
      ),
    },
    {
      heading: `JOB SEEKER`,
      imgSrc: require(`assets/img/job-seeker.jpg`),
      content: (
        <p>
          We understand finding the right job can be challenging. Allow us to
          assist! Our recruiters can help with job placements, resume editing,
          and interview coaching.
        </p>
      ),
      buttonText: `Current Openings`,
    },
    {
      heading: `EMPLOYERS`,
      imgSrc: require(`assets/img/employers.jpg`),
      content: (
        <React.Fragment>
          <p>
            Our core principles shape our efforts. Marathon Personnel is
            dedicated to their business partners and their success.
          </p>
          <p>
            We customize hiring programs to best equip workforce needs by
            managing the interview, onboarding, administrative, and exiting
            process. Just need payroll services? We're here to assist!
          </p>
          <p>
            To become a business partner, contact us at: <br />
          </p>
          <div className="flexUl">
            <ul>
              <li>
                <a
                  className="bold"
                  href="mailto: recruiter@marathonpersonnel.com"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </a>
              </li>
              <li>
                {" "}
                <a className="bold" href="tel:+8327695850">
                  <FontAwesomeIcon icon={faPhone} size="lg" />
                </a>
              </li>
            </ul>
          </div>
        </React.Fragment>
      ),
    },
  ],
}

const Home = () => {
  return (
    <React.Fragment>
      <Hero content={content.hero} bgSrc={bg} />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <Blurb content={content.welcomeBlurb} />
          <div className={styles.contentBoxesWrapper}>
            {content.contentBoxes.map((box, i) => {
              return <ContentBox content={box} key={i} />
            })}
          </div>
          <Blurb
            content={content.eventsBlurb}
            darkGray={content.eventsBlurb.darkGray}
          >
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

export default Home
