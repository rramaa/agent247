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
      <div id="mapWrap" className="location-map-wrap">
        <div className="pac-card" id="pac-card">
            <div id="pac-container">
              <input id="pac-input" type="text" placeholder="Enter your location" />
            </div>
        </div>

        <div id="map" className="location-map"></div>
        
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