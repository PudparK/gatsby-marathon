import React from "react"
import Container from "components/Container"
import MemberForm from "components/MemberForm"
import PageHeading from "components/PageHeading"
export default () => {
  return (
    <React.Fragment>
      <PageHeading text="Membership" />
      <Container>
        <MemberForm />
      </Container>
    </React.Fragment>
  )
}
