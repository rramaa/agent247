import React, { Component } from 'react'
import { connect } from 'react-redux'
import displayFields from "scripts/services/config/display"
import Button from 'scripts/components/Button'
import autobind from 'react-auto-bind'
import cs from 'classnames'
import {talkToMe} from 'scripts/services/utilService'
import MapBox from 'scripts/components/MapBox'

function showOptions(dispatch) {
  dispatch({
    type: 'SHOW_OPTIONS',
    payload: true
  })
}
class MainContent extends Component {
  constructor(props) {
    super(props)
    autobind(this)
    this.state = {
      display: 0
    }
  }
  onSpeechEnd() {
    const {options: opt} = {...displayFields[this.props.step]}
    const { display } = this.state
    if (opt.length - 1 === display) {
      showOptions(this.props.dispatch)
      return
    }
    this.setState((prevState) => {
      return {
        ...prevState,
        display: prevState.display + 1
      }
    })
  }

  componentWillReceiveProps() {
    this.setState({ display: 0 })
  }
  getRenderedOptions(opt) {
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
    let allOptions = {...displayFields[this.props.step]}
    if(allOptions.type === 'map'){
      setTimeout(() => {
        showOptions(this.props.dispatch)
      }, 1000);
      return <MapBox />
    } else {
      const opt = this.getRenderedOptions(allOptions.options)
      return opt.map(v => {
        return (
          <p className={v.className} key={v.id}>
            {v.displayText}
          </p>)
      })
    }
  }
}

const mapStateToProps = (state) => {
  return {
    step: state.step
  }
}

export default connect(mapStateToProps)(MainContent)