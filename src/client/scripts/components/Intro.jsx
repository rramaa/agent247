import React, { Component } from "react"
import autobind from 'react-auto-bind'
import cs from 'classnames'

class Intro extends Component {
  constructor(props) {
    super(props)
    autobind(this)
  }
  render() {
    const cls = cs('button', this.props.className)
    return (
      <div>
        This is intro
      </div>
    )
  }
}

export default Intro