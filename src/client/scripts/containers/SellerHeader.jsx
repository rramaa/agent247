import React, {Component} from 'react'
import {connect} from 'react-redux'
import autobind from 'react-auto-bind'
import cs from 'classnames'
import STEPS from 'scripts/services/config/steps'
import {undoChangeStep} from 'scripts/actions/index'

function toggleVolume(dispatch) {
  dispatch({
    type: 'TOGGLE_VOLUME'
  })
}

class SellerHeader extends Component {
  constructor(props){
    super(props)
    autobind(this)
  }
  toggleVolume() {
    toggleVolume(this.props.dispatch)
  }
  goBack() {
    undoChangeStep(this.props.dispatch)
  }
  render() {
    if (STEPS['INTRO'] === this.props.step) {
      return null
    }
    const cls = cs("sllr-head", {
      speak: this.props.speaking && !this.props.mute,
    })
    const volumeCls = cs('fa', {
      'fa-volume-up': !this.props.mute,
      'fa-volume-off': this.props.mute,
    })
    return (
        <div className="sllr-info-wrap">
          <div className={cls} onClick={this.goBack}>
            <i className="fa fa-arrow-left"></i>
            <i
              className={volumeCls}
              onClick={this.toggleVolume}
            ></i>
            <div className="sllr-img-wrap"></div>
          </div>
          <div className="sllr-name">John Mathewz</div>
          <div className="sllr-loc">Rai Realtors, Gurgaon</div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    speaking: state.speaking,
    step: state.step,
    mute: state.mute
  }
}

export default connect(mapStateToProps)(SellerHeader)