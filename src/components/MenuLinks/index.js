import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styles from "./styles.module.scss"

const MenuLinks = () => {
  const links = [
    {
      label: `HOME`,
      uri: `/`,
    },
    {
      label: `EMPLOYEE RESOURCES`,
      uri: `/employee-resources`,
    },
    {
      label: `SERVICES`,
      uri: `/services`,
    },
    {
      label: `CONTACT`,
      uri: `/contact`,
    },
    {
      label: `CAREERS`,
      uri: `/careers`,
    },
  ]
  return (
    <ul className={styles.menuLinks}>
      {links.map((link, i) => {
        return (
          <li key={i}>
            {link.anchor ? (
              <AnchorLink to={link.uri} activeClassName={styles.active}>
                {link.label}
              </AnchorLink>
            ) : (
              <Link to={link.uri} activeClassName={styles.active}>
                {link.label}
              </Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default MenuLinks
