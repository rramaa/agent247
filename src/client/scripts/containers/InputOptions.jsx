import React, {Component} from 'react'
import {connect} from 'react-redux'
import options from "scripts/services/config/options"
import Button from 'scripts/components/Button'
import autobind from 'react-auto-bind'

function changeStep(dispatch, step) {
  dispatch({
    type: 'CHANGE_STEP',
    payload: step
  })
}

class InputOptions extends Component {
  constructor(props) {
    super(props)
    autobind(this)
  }
  onClick(data) {
    if(data.nextStep){
      changeStep(this.props.dispatch, data.nextStep)
    }
  }
  render() {
    const opt = options[this.props.step]
    return (
      opt.map(v => {
        return (
          <Button
            className='test'
            text={v.displayText}
            data={v}
            key={JSON.stringify(v)}
            onClick={this.onClick}
          />
        )
      })
    )
  }
}

const mapStateToProps = (state) => {
  return {
    step: state.step
  }
}

export default connect(mapStateToProps)(InputOptions)