import React, { Component } from 'react'

class TimeSlotVala extends Component {
  render() {
    return (
      <div className="timeslot-wrap">
        <div className="title ta-c">Choose Time Slot</div>
        <div className="day-wrap">
          <div className="day">Saturday, 24th February 2018</div>
          <div className="timeslot">
              <i className="fa fa-coffee"></i> Morning <span className="ltxt">(11am - 2pm)</span>
          </div>
          <div className="timeslot">
              <i className="fa fa-moon-o"></i> Evening <span className="ltxt">(5pm - 7pm)</span>
          </div>
        </div>
        <div className="day-wrap">
        <div className="day">Sunday, 25th February 2018</div>
          <div className="timeslot">
              <i className="fa fa-coffee"></i> Morning <span className="ltxt">(11am - 2pm)</span>
          </div>
          <div className="timeslot">
              <i className="fa fa-sun-o"></i> Afterno0n <span className="ltxt">(2pm - 5pm)</span>
          </div>
          <div className="timeslot">
              <i className="fa fa-moon-o"></i> Evening <span className="ltxt">(5pm - 7pm)</span>
          </div>
        </div>
      </div>
    )
  }
}

export default TimeSlotVala