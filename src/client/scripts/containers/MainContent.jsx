import React, { Component } from 'react'
import { connect } from 'react-redux'
import displayFields from "scripts/services/config/display"
import Button from 'scripts/components/Button'
import autobind from 'react-auto-bind'
import cs from 'classnames'

class MainContent extends Component {
  constructor(props) {
    super(props)
    autobind(this)
    this.state = {
      display: 0
    }
  }
  onClick(data) {
    console.log(data)
  }
  componentWillReceiveProps() {
    this.setState({ display: 0 })
  }
  getRenderedOptions() {
    let opt = displayFields[this.props.step]
    const { display } = this.state
    opt = opt.filter((v, i) => {
      return i <= display
    })
    const lastElem = opt[opt.length - 1]
    lastElem.className = cs(lastElem.className, 'current')
    setTimeout(() => {
      this.setState((prevState) => {
        return {
          ...prevState,
          display: prevState.display + 1
        }
      })
    }, 1000);
    return opt
  }
  render() {
    const opt = this.getRenderedOptions(opt)
    return opt.map(v => {
      return (
        <p>
          {v.displayText}
        </p>)
    })
  }
}

const mapStateToProps = (state) => {
  return {
    step: state.step
  }
}

export default connect(mapStateToProps)(MainContent)