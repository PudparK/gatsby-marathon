import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styles from "./styles.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

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
      uri: `https://tfs.avionte.com/247-wfp`,
      external: true,
    },
  ]

  const getLinkTypes = (link, i) => {
    if (link.external) {
      return (
        <li key={i}>
          <a href={link.uri} target="_blank" rel="noreferrer">
            {link.label} <FontAwesomeIcon icon={faExternalLinkAlt} size="xl" />
          </a>
        </li>
      )
    }
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
  }

  return <ul className={styles.menuLinks}>{links.map(getLinkTypes)}</ul>
}

export default MenuLinks
