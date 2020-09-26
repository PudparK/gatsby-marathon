import React, { useState } from "react"
import styles from "./styles.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import classNames from "classnames"

const DropDownMenu = ({ data, activeClass, onClose }) => {
  const [toggle, setToggle] = useState(false)
  console.log(toggle)
  const _onClick = () => {
    setToggle(!toggle)
  }
  console.log(toggle)
  return (
    <li className={styles.link} onClick={_onClick} onKeyDown={_onClick}>
      {data.label}
      <ul
        className={classNames(styles.dropDownUl, {
          noShow: !toggle,
        })}
      >
        {data.childItems.nodes.map((subLink, i) => {
          return (
            <li className={styles.subLink} key={i}>
              <Link
                to={subLink.path}
                activeClassName={activeClass}
                onClick={onClose}
                tabIndex={0}
              >
                {subLink.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </li>
  )
}

export default function MenuLinks({ activeClass, onClose }) {
  const getMenuItems = (link, i) => {
    console.log("i:", i)
    if (link.childItems.nodes.length === 0 && link.parentId === null) {
      return (
        <li className={styles.link} key={i}>
          <Link activeClassName={activeClass} to={link.path} onClick={onClose}>
            {link.label}
          </Link>
        </li>
      )
    }

    return link.parentId ? null : (
      <DropDownMenu
        data={link}
        activeClass={activeClass}
        key={i}
        onClose={onClose}
      />
    )
  }

  const data = useStaticQuery(graphql`
    query NavBarQuery {
      wpMenu {
        menuItems {
          nodes {
            path
            label
            parentId
            childItems {
              nodes {
                path
                url
                label
              }
            }
          }
        }
      }
    }
  `)

  return (
    <ul className={styles.MenuLinks}>
      <li className={styles.link}>
        <Link activeClassName={activeClass} to="/" onClick={onClose}>
          HOME
        </Link>
      </li>
      {data.wpMenu.menuItems.nodes.map(getMenuItems)}
    </ul>
  )
}
