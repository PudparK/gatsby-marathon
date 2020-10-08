import React from "react"
import styles from "./styles.module.scss"
import classNames from "classnames"
import PropTypes from "prop-types"

const Events = ({ content, darkGray, children }) => {
  return (
    <div
      className={classNames(styles.blurbWrapper, {
        [styles.bgDarkGray]: darkGray,
      })}
    >
      <div className={styles.blurb}>
        <h2>Events</h2>
        <p>
          With the increasing number of confirmed Coronavirus (COVID-19) cases,
          we are choosing to put our candidates and staff first by closing our
          doors temporarily. No walk-ins will be accepted until further notice,
          to help slow the spread of the virus.
        </p>
        <p>
          If you have any questions or would like to apply, please call or text{" "}
          <a href="tel:+2819847309">
            <strong>(281)984-7309</strong>
          </a>
          .
        </p>
        <p>
          For more information about Coronavirus, please visit{" "}
          <a href="https://www.cdc.gov">www.cdc.gov</a>.
        </p>
      </div>
    </div>
  )
}

Events.propTypes = {
  content: PropTypes.object,
}
export default Events
