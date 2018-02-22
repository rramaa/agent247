import React, {Component} from 'react'
import {startMapAutocomplete} from 'scripts/services/utilService'
import autobind from 'react-auto-bind'

class LocationTypeahead extends Component {
  constructor(props) {
    super(props)
    autobind(this)
  }
  onLocationSelect(place) {
    this.props.onLocationSelect(place, this.props.nextStep)
  }
  componentDidMount() {
    startMapAutocomplete(this.onLocationSelect)
  }
  render() {
    return (
      <div id="mapWrap">
        <div className="pac-card" id="pac-card">
            <div id="title"> Autocomplete search </div>
            <div id="pac-container">
              <input id="pac-input" type="text" placeholder="Enter a location" />
            </div>
        </div>

        <div id="map" className="" style={{ width: 'calc(100% + 20px)', height: '400px', marginLeft: '-10px' }}></div>
        
        <div id="infowindow-content">
          <span id="place-name" className="title"></span><br/>
          <span id="place-address"></span>
        </div>

        <div id="scriptArea"></div>
      </div>
    )
  }
}

export default LocationTypeahead