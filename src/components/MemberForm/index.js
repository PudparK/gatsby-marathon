import React from "react"
import styles from "./styles.module.scss"
import Blurb from "components/Blurb"

export default class IndexPage extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.formWrapper}>
          <form onSubmit={this.handleSubmit}>
            <div>
              <Blurb
                blurbHeader="SIGN UP"
                blurbText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              />
            </div>
            <div>
              <label>
                Physician Name
                <input
                  type="text"
                  name="firstName"
                  value={this.state.physicianName}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>

            <div>
              <label>
                Bio
                <input
                  type="textarea"
                  name="Bio"
                  value={this.state.bio}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>

            <div>
              <label>
                Specialty
                <input
                  type="text"
                  name="firstName"
                  value={this.state.specialty}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>

            <div>
              <label>
                Board Certification
                <input
                  type="text"
                  name="firstName"
                  value={this.state.boardCertification}
                  onChange={this.handleInputChange}
                />
              </label>

              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    )
  }
}
