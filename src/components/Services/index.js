import React from "react"
import styles from "./styles.module.scss"

//Components
import Blurb from "components/Blurb"
import Hero from "components/Hero"

//Assets
const bg = require(`../../assets/img/about-us.jpg`)

const content = {
  hero: { headerText: `RUN WITH US.`, buttonText: `APPLY NOW` },
  servicesBlurb: {
    headerText: `SERVICES`,
  },
  eventsBlurb: {
    headerText: `EVENTS`,
    pText: `With the increasing number of confirmed Coronavirus (COVID-19) cases, we are choosing to put our candidates and staff first by closing our doors temporarily. No walk-ins will be accepted until further notice, to help slow the spread of the virus.`,
    darkGray: true,
  },
  contentBoxesStaticContent: [
    {
      heading: `BILLING`,
      imgSrc: require(`assets/img/billing-sheet-icon.svg`),
      content: (
        <React.Fragment>
          <p>
            247WFP offers flexible payment plans and we offer pre-paid services
            at a reduced price. Our different level mark-ups encompass the level
            of services needed.
          </p>
        </React.Fragment>
      ),
    },
    {
      heading: `HR/PAYROLL FUNCTIONS`,
      imgSrc: require(`assets/img/paycheck-stub-icon.svg`),
      content: (
        <React.Fragment>
          <ul className={styles.servicesListUl}>
            <li>• Recruitment</li>
            <li>• Hiring</li>
            <li>• Compensation</li>
            <li>• Legal Compliance</li>
            <li>• Discipline</li>
            <li>• Employee Terminations</li>
            <li>• Benefits</li>
          </ul>
        </React.Fragment>
      ),
    },
    {
      heading: `EMPLOYEE BENEFITS`,
      imgSrc: require(`assets/img/employee-benefits-icon.svg`),
      content: (
        <React.Fragment>
          <ul className={styles.servicesListUl}>
            <li>Medical/Dental/Vision Plans</li>
            <li>Direct Deposit</li>
            <li>Designated Account Manager</li>
            <li>Employee of the Month</li>
          </ul>
        </React.Fragment>
      ),
    },
  ],
}

const EmployeeResources = () => {
  console.log("content.servicesBlurb:", content.servicesBlurb)
  return (
    <React.Fragment>
      <Hero content={content.hero} bgSrc={bg} />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <Blurb content={content.servicesBlurb}>
            <React.Fragment></React.Fragment>
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

export default EmployeeResources
