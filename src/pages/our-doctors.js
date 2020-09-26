import React from "react"

import Container from "components/Container"
import MapContainer from "components/MapContainer"
import OurDoctors from "components/OurDoctors"
import PageHeading from "components/PageHeading"

export default function About() {
  return (
    <React.Fragment>
      <PageHeading text="Our Doctors" />
      <Container>
        <OurDoctors />
      </Container>
      <MapContainer />
    </React.Fragment>
  )
}
