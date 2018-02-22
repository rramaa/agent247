import React, { Component } from "react"
import autobind from 'react-auto-bind'
import cs from 'classnames'

class Exit extends Component {
  constructor(props) {
    super(props)
    autobind(this)
  }
  render() {
    const cls = cs('button', this.props.className)
    return (
      <div className="exit-page">

        <div className="logo"></div>
        <div className="footer"></div>
      </div>
    )
  }
}

export default Exit