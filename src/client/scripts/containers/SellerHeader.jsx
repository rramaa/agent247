import React, {Component} from 'react'
import {connect} from 'react-redux'
import cs from 'classnames'
import STEPS from 'scripts/services/config/steps'


class SellerHeader extends Component {
  render() {
    if (STEPS['INTRO'] === this.props.step) {
      return null
    }
    const cls = cs("sllr-head", {
      speak: this.props.speaking
    })
    return (
        <div className="sllr-info-wrap">
          <div className={cls}>
            <i className="fa fa-volume-up"></i>
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
    step: state.step
  }
}

export default connect(mapStateToProps)(SellerHeader)