import React from "react"

//Components
import Blog from "components/Blog"
import PageHeading from "components/PageHeading"

export default function About() {
  return (
    <React.Fragment>
      <PageHeading text="Blog" />
      <Blog />
    </React.Fragment>
  )
}
