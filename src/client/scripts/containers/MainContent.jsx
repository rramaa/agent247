import React, { Component } from 'react'
import { connect } from 'react-redux'
import displayFields from "scripts/services/config/display"
import Button from 'scripts/components/Button'
import autobind from 'react-auto-bind'
import cs from 'classnames'
import {talkToMe} from 'scripts/services/utilService'

class MainContent extends Component {
  constructor(props) {
    super(props)
    autobind(this)
    this.state = {
      display: 0
    }
  }
  onSpeechEnd() {
    const opt = [...displayFields[this.props.step]]
    const { display } = this.state
    if (opt.length - 1 === display) {
      return
    }
    this.setState((prevState) => {
      return {
        ...prevState,
        display: prevState.display + 1
      }
    })
  }
  onClick(data) {
    console.log(data)
  }
  componentWillReceiveProps() {
    this.setState({ display: 0 })
  }
  getRenderedOptions() {
    let opt = [...displayFields[this.props.step]]
    const { display } = this.state
    opt = opt.filter((v, i) => {
      return i <= display
    }).map (v => ({...v}))
    if (opt.length === display) {
      return opt
    }
    const lastElem = opt[opt.length - 1]
    lastElem.className = cs(lastElem.className, 'current')
    const speech = talkToMe(lastElem.displayText)
    speech.onend = this.onSpeechEnd
    speechSynthesis.speak(speech)
    return opt
  }
  render() {
    const opt = this.getRenderedOptions(opt)
    return opt.map(v => {
      return (
        <p className={v.className}>
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