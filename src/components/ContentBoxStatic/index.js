import React from "react"
import propTypes from "prop-types"
import * as styles from "./styles.module.scss"

//Components
import Button from "components/Button"

const ContentBox = ({ content }) => {
  return (
    <div className={styles.contentBox}>
      <img
        className={styles.bgImage}
        src={content.imgSrc}
        alt="Marathon Personnel News"
      />
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
        <h2>{content.heading}</h2>
      </div>
    </div>
  )
}

ContentBox.propTypes = {
  content: propTypes.object,
}
export default ContentBox

// TODO h2 not sitting at the bottom.
