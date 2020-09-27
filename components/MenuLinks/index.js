import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

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
      uri: `/careers`,
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
    <ul>
      {links.map((link, i) => {
        return (
          <li key={i}>
            {link.anchor ? (
              <AnchorLink to={link.uri}>{link.label}</AnchorLink>
            ) : (
              <Link to={link.uri}>{link.label}</Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default MenuLinks
