import React from "react"
import { useEffect, useRef } from "react"
import classNames from "classnames"
import * as styles from "./styles.module.scss"

function useOutsideClick(ref, onClickOutside) {
  useEffect(() => {
    const _onClickOutside = e => {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        !e.target.closest("#hamburger-button")
      )
        onClickOutside(e)
    }
    document.addEventListener("mousedown", _onClickOutside)
    return () => {
      document.removeEventListener("mousedown", _onClickOutside)
    }
  }, [ref, onClickOutside])
}

//

export default function Sidebar({ toggle, setToggle, content }) {
  const sidebarRef = useRef(null)

  useOutsideClick(sidebarRef, () => {
    setToggle(false)
  })

  return (
    <div
      ref={sidebarRef}
      id="main-sidemenu"
      className={classNames(styles.sidebar, {
        [styles.slideIn]: toggle,
      })}
    >
      {content}
    </div>
  )
}
