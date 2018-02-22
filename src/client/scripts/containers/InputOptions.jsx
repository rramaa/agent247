import React, {Component} from 'react'
import {connect} from 'react-redux'
import options from "scripts/services/config/options"
import Button from 'scripts/components/Button'
import Intro from 'scripts/components/Intro'
import autobind from 'react-auto-bind'
import {changeStep} from 'scripts/actions/index'

const INTRO_TIMER = 5000

class InputOptions extends Component {
  constructor(props) {
    super(props)
    autobind(this)
  }
  onClick(data) {
    if(data.nextStep){
      changeStep(this.props.dispatch, data.nextStep)
    } else if(data.action){
      this.props.dispatch(data.action)
    }
  }
  render() {
    let opt = options[this.props.step]
    if (opt.type === 'intro') {
      setTimeout(() => {
        changeStep(this.props.dispatch, opt.nextStep)
      }, INTRO_TIMER);
      return (
        <Intro />
      )
    }
    if(!this.props.showOptions) {
      return null
    }
    opt = opt.map(v => ({ ...v }))
    return (
      <div className='options-wrap'>
      {opt.map(v => {
        return (
          <Button
            className='btn mb10'
            text={v.displayText}
            data={v}
            key={JSON.stringify(v)}
            onClick={this.onClick}
          />
        )
      })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    step: state.step,
    showOptions: state.showOptions
  }
}

export default connect(mapStateToProps)(InputOptions)