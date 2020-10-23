import React from "react"
import styles from "./styles.module.scss"

//Components
import Blurb from "components/Blurb"
import ContentBoxStatic from "components/ContentBoxStatic"
import Events from "components/Events"
import Hero from "components/Hero"

//Assets
const bg = require(`../../assets/img/about-us.jpg`)

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
      heading: `BILLING`,
      imgSrc: require(`assets/img/billing-sheet-icon.svg`),
      content: (
        <React.Fragment>
          <p>
            Marathon Personnel offers flexible payment plans and we offer
            pre-paid services at a reduced price. Our different level mark-ups
            encompass the level of services needed.
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
            <React.Fragment>
              <div className={styles.servicesContent}>
                <div className={styles.pText}>
                  <p>
                    The answer is simple, to maximize your RESOURCES! Marathon
                    Personnel has over 50 years of combined experience. We stay
                    on top of recruiting trends to maximize your return on
                    investment.
                  </p>
                  <p>
                    Marathon Personnel knows that finding the right candidate is
                    essential for production and service needs. We thoroughly
                    evaluate each potential candidate to affirm proficiency and
                    reliability so that they can rhythmically mesh into your
                    companies’ work culture, which in turn reduces your
                    administrative work.
                  </p>
                  <p>
                    Our hiring programs are highly customizable. We offer
                    different types of drug testing and background screening to
                    best fit your employment practices. Marathon Personnel
                    handles account management, unemployment claims, worker’s
                    compensation claims, and payroll.
                  </p>
                  <p>Leaving YOU with more time and resources!</p>
                </div>
                <div className={styles.servicesListWrapper}>
                  <div className={styles.servicesList}>
                    <h3>Services</h3>
                    <ul className={styles.servicesListUl}>
                      <li>• Background Screening</li>
                      <li>• Drug Testing</li>
                      <li>• Worker's Comp Insurance</li>
                      <li>• Weekly Payroll Services</li>
                      <li>• Skilled-based Assessments</li>
                      <li>• Safety Orientation</li>
                      <li>• Human Resource Function</li>
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

export default EmployeeResources
