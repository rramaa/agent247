import React, { Component } from 'react'
import autobind from 'react-auto-bind'

class TimeSlotVala extends Component {
  constructor(props) {
    super(props)
    autobind(this)
  }
  selectTimeSlot(data) {
    this.props.timeSelected({
      time: data,
      nextStep: this.props.nextStep
    })
  }
  render() {
    return (
      <div className="timeslot-wrap">
        <div className="title ta-c">Choose Time Slot</div>
        <div className="day-wrap">
          <div className="day">Saturday, 24th February 2018</div>
          <div onClick={() => { this.selectTimeSlot({day: 'Saturday', time: 'Morning'})}} className="timeslot">
              <i className="fa fa-coffee"></i> Morning <span className="ltxt">(11am - 2pm)</span>
          </div>
          <div onClick={() => { this.selectTimeSlot({ day: 'Saturday', time: 'Evening' }) }} className="timeslot">
              <i className="fa fa-moon-o"></i> Evening <span className="ltxt">(5pm - 7pm)</span>
          </div>
        </div>
        <div className="day-wrap">
        <div className="day">Sunday, 25th February 2018</div>
          <div onClick={() => { this.selectTimeSlot({ day: 'Sunday', time: 'Morning' }) }} className="timeslot">
              <i className="fa fa-coffee"></i> Morning <span className="ltxt">(11am - 2pm)</span>
          </div>
          <div onClick={() => { this.selectTimeSlot({ day: 'Sunday', time: 'Afternoon' }) }} className="timeslot">
              <i className="fa fa-sun-o"></i> Afternoon <span className="ltxt">(2pm - 5pm)</span>
          </div>
          <div onClick={() => { this.selectTimeSlot({ day: 'Sunday', time: 'Evening' }) }} className="timeslot">
              <i className="fa fa-moon-o"></i> Evening <span className="ltxt">(5pm - 7pm)</span>
          </div>
        </div>
      </div>
    )
  }
}

export default TimeSlotVala