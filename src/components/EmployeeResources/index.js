import React from "react"
import styles from "./styles.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

//Components
import Blurb from "components/Blurb"
import ContentBoxStatic from "components/ContentBoxStatic"
import Hero from "components/Hero"

//Assets
const bg = require(`../../assets/img/about-us.jpg`)

const content = {
  hero: { headerText: `RUN WITH US.`, buttonText: `APPLY NOW` },
  emplyeeResourceBlurb: {
    headerText: `EMPLOYEE RESOURCES`,
  },
  eventsBlurb: {
    headerText: `EVENTS`,
    pText: `With the increasing number of confirmed Coronavirus (COVID-19) cases, we are choosing to put our candidates and staff first by closing our doors temporarily. No walk-ins will be accepted until further notice, to help slow the spread of the virus.`,
    darkGray: true,
  },
  contentBoxesStaticContent: [
    {
      heading: `NEWS`,
      imgSrc: require(`assets/img/news-icon.svg`),
      content: (
        <React.Fragment>
          <p>
            Stay connected with Marathon Personnel and let us know how we are
            doing!
          </p>
          <ul>
            <li>
              Like Our{" "}
              <a href="https://www.facebook.com/pg/247WFP/reviews/?ref=page_internal">
                Facebook
              </a>{" "}
              Page!
            </li>
            <li>
              Leave a Review on{" "}
              <a href="https://www.google.com/search?q=247+workforce+personnel+llc&rlz=1C1CHZL_enUS821US821&oq=247+wor&aqs=chrome.1.69i57j0l2j69i60l3.5071j0j4&sourceid=chrome&ie=UTF-8">
                Google
              </a>
              !
            </li>
          </ul>
        </React.Fragment>
      ),
    },
    {
      heading: `PAYCHECK STUBS`,
      imgSrc: require(`assets/img/paycheck-stub-icon.svg`),
      content: (
        <p>
          We understand finding the right job can be challenging. Allow us to
          assist! Our recruiters can help with job placements, resume editing,
          and interview coaching.
        </p>
      ),
    },
    {
      heading: `INSURANCE`,
      imgSrc: require(`assets/img/insurance-icon.svg`),
      content: (
        <p>
          If you signed up for benefits, be sure to check out
          <br />
          <a href="http://essentialstaffcare.com/">
            www.essentialstaffcare.com
          </a>
          <br />
          for information regarding specific questions.
        </p>
      ),
    },
    {
      heading: `TIMESHEETS`,
      imgSrc: require(`assets/img/timesheets-icon.svg`),
      content: (
        <React.Fragment>
          <p>
            Have questions about the hours submitted at the end of the week?
            Please email:
            <br />
          </p>
          <p>
            <a href="mailto:invoicing@marathon.com">
              <FontAwesomeIcon icon={faEnvelope} /> invoicing@marathon.com
            </a>
          </p>
        </React.Fragment>
      ),
    },
    {
      heading: `PROFILE UPDATE`,
      imgSrc: require(`assets/img/profile-update-icon.svg`),
      content: (
        <React.Fragment>
          <p>To update your direct deposit, W4, etc., email:</p>
          <p>
            <a href="mailto:recruiter@marathon.com">
              <FontAwesomeIcon icon={faEnvelope} /> recruiter@marathon.com
            </a>
          </p>
        </React.Fragment>
      ),
    },
  ],
}

const EmployeeResources = () => {
  console.log("bg:", bg)
  return (
    <React.Fragment>
      <Hero content={content.hero} bgSrc={bg} />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <Blurb content={content.emplyeeResourceBlurb} />
          <div className={styles.contentBoxesWrapper}>
            {content.contentBoxesStaticContent.map((contentBox, i) => {
              console.log("contentBox:", contentBox)
              return <ContentBoxStatic content={contentBox} key={i} />
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

export default EmployeeResources
