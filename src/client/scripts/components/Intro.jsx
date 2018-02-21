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
        <div className="sllr-info-wrap">
          <div className="sllr-head intro">
            <div className="sllr-img-wrap"></div>
          </div>
          <div className="sllr-name">John Mathewz</div>
          <div className="sllr-loc">Rai Realtors, Gurgaon</div>
        </div>

        <div className="progress-wrap ta-c">
          <div className="txt">Initializing...</div>
        </div>

        <div className="logo"></div>
        <div className="footer"></div>
      </div>
    )
  }
}

export default Intro