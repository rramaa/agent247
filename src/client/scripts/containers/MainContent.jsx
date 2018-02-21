import React, { Component } from 'react'
import { connect } from 'react-redux'
import displayFields from "scripts/services/config/display"
import Button from 'scripts/components/Button'
import autobind from 'react-auto-bind'
import cs from 'classnames'
import {talkToMe} from 'scripts/services/utilService'
import MapBox from 'scripts/components/MapBox'
import PropertyCard from 'scripts/components/PropertyCard'

function showOptions(dispatch) {
  dispatch({
    type: 'SHOW_OPTIONS',
    payload: true
  })
}

function changeSpeakingState(dispatch, speaking) {
  dispatch({
    type: 'CHANGE_SPEAKING_STATE',
    payload: speaking
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
    changeSpeakingState(this.props.dispatch, false)
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
    if(!lastElem.type){
      const speech = talkToMe(lastElem.displayText)
      speech.onend = this.onSpeechEnd
      changeSpeakingState(this.props.dispatch, true)
      speechSynthesis.speak(speech)
    } else {
      this.onSpeechEnd()
    }
    return opt
  }
  render() {
    let allOptions = {...displayFields[this.props.step]}
    if (allOptions.type === 'intro') {
      return null
    }
    let content;
    if(allOptions.type === 'map'){
      setTimeout(() => {
        showOptions(this.props.dispatch)
      }, 1000);
      content = <MapBox />
    } else {
      const opt = this.getRenderedOptions(allOptions.options)
      content = opt.map(v => {
        const cls = cs(v.className, 'statement')
        return (
          <div className={cls} key={v.id}>
            {v.type === 'property-card' &&
              <PropertyCard {...v.data} />
            }
            {!v.type &&
              v.displayText
            }
          </div>)
      })
    }
    return (
      <div className='sllr-statement-wrap'>
        {content}
      </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    step: state.step
  }
}

export default connect(mapStateToProps)(MainContent)