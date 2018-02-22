import React, {Component} from 'react'
import {connect} from 'react-redux'
import TimeSlotVala from 'scripts/components/TimeSlotVala'
import PropertyDetail from 'scripts/components/PropertyDetail'
import autobind from 'react-auto-bind'

class Popup extends Component {
  constructor(props) {
    super(props)
    autobind(this)
  }
  closePopup(){
    this.props.dispatch({
      type: 'CLOSE_MODAL'
    })
  }
  render(){
    const { modal } = this.props
    let Comp;
    if(!modal) {
      return null
    } else if (modal === 'time-slot-vala') {
      Comp = TimeSlotVala
    } else if (modal === 'property-detail') {
      Comp = PropertyDetail
    }
    return (
      <div className='popup'>
        <div onClick={this.closePopup}>
          Close
        </div>
        <Comp />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal
  }
}

export default connect(mapStateToProps)(Popup)