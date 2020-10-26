import React from "react"
import GravityFormData from "components/GravityFormData"
import GravityFormForm from "gatsby-gravityforms-component"

export default () => {
  const handleError = ({ values, error, reset }) => {
    alert("error")
    //handle error
  }

  const handleSuccess = ({ values, reset, confirmations }) => {
    alert("success")
  }

  return (
    <GravityFormForm
      id={1}
      formData={GravityFormData()}
      lambda={process.env.LAMBDA_ENDPOINT}
      successCallback={handleSuccess}
      errorCallback={handleError}
    />
  )
}
