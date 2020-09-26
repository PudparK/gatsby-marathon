import React from "react"
import { Helmet } from "react-helmet"

// Components
import Header from "components/header"
import Footer from "components/footer"

function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/fwb3koz.css" />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
