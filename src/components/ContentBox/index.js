import React from "react"
import propTypes from "prop-types"
import styles from "./styles.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons"

//Components
import Button from "components/Button"

const ContentBox = ({ content }) => {
  console.log("content.imgSrc:", content.imgSrc)
  return (
    <div className={styles.contentBox}>
      <div
        className={styles.bgImage}
        style={{
          backgroundImage: "url(" + content.imgSrc + ")",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className={styles.box}>
        {content.content}
        {content.buttonText ? (
          <div className={styles.boxButton}>
            <a href="https://tfs.avionte.com/247-wfp" rel="noopener noreferrer">
              <Button text={content.buttonText} />
            </a>
          </div>
        ) : null}
      </div>
      <div className={styles.heading}>
        <h2>
          {content.heading}{" "}
          <FontAwesomeIcon icon={faArrowCircleDown} size="sm" />
        </h2>
      </div>
    </div>
  )
}

ContentBox.propTypes = {
  content: propTypes.object,
}
export default ContentBox
