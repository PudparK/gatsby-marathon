import React from "react"

export default class Iframe extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.ref.current.addEventListener("load", this.props.onLoad)
  }

  render() {
    return <iframe title="iframe" ref={this.ref} {...this.props} />
  }
}
