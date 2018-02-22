import React, { Component } from 'react'
import { connect } from 'react-redux'
import displayFields from "scripts/services/config/display"
import Button from 'scripts/components/Button'
import autobind from 'react-auto-bind'
import cs from 'classnames'
import {talkToMe} from 'scripts/services/utilService'
import MapBox from 'scripts/components/MapBox'
import PropertyCard from 'scripts/components/PropertyCard'
import SimilarCard from 'scripts/components/similarCard'
import LocationTypeahead from 'scripts/components/LocationTypeahead'
import { changeStep } from 'scripts/actions/index'

const SPEECH_DELAY = 100
const OPTIONS_DELAY = 150

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
    this.mute = this.props.mute
  }
  onSpeechEnd(delay) {
    changeSpeakingState(this.props.dispatch, false)
    const {options: opt} = {...displayFields[this.props.step]}
    const { display } = this.state
    if (opt.length - 1 === display) {
      setTimeout(() => {
        showOptions(this.props.dispatch)
      }, OPTIONS_DELAY);
      return
    }
    setTimeout(() => {
      this.setState((prevState) => {
        return {
          ...prevState,
          display: prevState.display + 1
        }
      })
    }, delay || SPEECH_DELAY);
  }

  shouldComponentUpdate(nextProps) {
    if(nextProps.mute !== this.props.mute){
      this.mute = nextProps.mute
      return false
    }
    return true
  }

  componentWillReceiveProps() {
    this.setState({ display: 0 })
  }
  
  getRenderedOptions(opt) {
    const {mute} = this
    const { display } = this.state
    opt = opt.filter((v, i) => {
      return i <= display
    }).map (v => ({...v}))
    if (opt.length === display) {
      return opt
    }
    const lastElem = opt[opt.length - 1]
    lastElem.className = cs(lastElem.className, 'current')
    if(!lastElem.type && !mute){
      const speech = talkToMe(lastElem.displayText)
      speech.onend = this.onSpeechEnd.bind(this, lastElem.variableDelay)
      changeSpeakingState(this.props.dispatch, true)
      speechSynthesis.speak(speech)
    } else {
      this.onSpeechEnd(lastElem.variableDelay)
    }
    return opt
  }
  changeStep(step) {
    changeStep(this.props.dispatch, step)
  }
  render() {
    let allOptions = {...displayFields[this.props.step]}
    if (allOptions.type === 'intro') {
      return null
    }
    let content;
      const opt = this.getRenderedOptions(allOptions.options)
      content = opt.map(v => {
        const cls = cs(v.className, 'statement', {
          'withoptions': v.type === 'similar'
        })
        return (
          <div className={cls} key={v.id}>
            {v.type === 'property-card' &&
              <PropertyCard {...v.data} />
            }
            {v.type === 'map' &&
              <MapBox />
            }
            {v.type === 'similar' && 
              <SimilarCard data={v.data} nextStep={v.nextStep} changeStep={this.changeStep} />
            }
            {v.type === 'location' &&
              <LocationTypeahead />
            }
            {!v.type &&
              v.displayText
            }
          </div>)
      })
    return (
      <div className='sllr-statement-wrap'>
        {content}
      </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    step: state.step,
    mute: state.mute
  }
}

export default connect(mapStateToProps)(MainContent)