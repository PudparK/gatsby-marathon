import React from "react"

//Components
import AboutDPCHome from "components/AboutDPCHome"
import AboutHome from "components/AboutHome"
import Hero from "components/hero"
import MapContainer from "components/MapContainer"
import SectionDivider from "components/sectiondivider"
import Faqs from "components/Faqs"

export default () => {
  return (
    <React.Fragment>
      <Hero
        headerText="Patients and Physicians Working Together"
        pText="Direct Primary Care provides solutions for patients seeking primary and specialty care in the Greater&nbsp;Houston&nbsp;area."
        buttonText="Find a Doctor"
      />
      <SectionDivider type="thickBar" />
      <AboutHome />
      <AboutDPCHome />
      <Faqs />
      <MapContainer />
    </React.Fragment>
  )
}
