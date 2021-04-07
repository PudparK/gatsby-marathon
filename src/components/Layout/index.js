import React from "react"
import { Helmet } from "react-helmet"
import favicon from "../../assets/img/marathon-favicon.png"

// Components
import Header from "components/Header"
import Footer from "components/Footer"

function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
        <link rel="stylesheet" href="https://use.typekit.net/fwb3koz.css" />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
