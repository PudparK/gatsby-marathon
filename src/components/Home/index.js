import React from "react"
import styles from "./styles.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"

//Components
import ContentBox from "components/ContentBox"
import Blurb from "components/Blurb"
import Events from "components/Events"
import Hero from "components/Hero"

//Assets
const bg = require(`../../assets/img/hero-bg.jpg`)

const content = {
  hero: { headerText: `RUN WITH US`, buttonText: `APPLY NOW` },
  blurb: {
    headerText: `WELCOME`,
    pText: ``,
  },
  welcomeBlurb: {
    headerText: `WELCOME`,
    pText: `Marathon Personnel strives to connect individuals to
    their optimal job position by providing essential guidance
    needed to thrive within their industry.`,
  },
  eventsBlurb: {
    headerText: `EVENTS`,
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
                <a className="bold" href="mailto: hr@marathonpersonnel.com">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </a>
              </li>
              <li>
                {" "}
                <a className="bold" href="tel:+2819847309">
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
          <Blurb content={content.welcomeBlurb}>
            <p>
              Marathon Personnel strives to connect individuals to their optimal
              job position by providing essential guidance needed to thrive
              within their industry.
            </p>
          </Blurb>
          <div className={styles.contentBoxesWrapper}>
            {content.contentBoxes.map((box, i) => {
              return <ContentBox content={box} key={i} />
            })}
          </div>
          <Events
            content={content.eventsEvents}
            darkGray={content.eventsBlurb.darkGray}
          ></Events>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
