import React, {Component} from 'react'
import { loadMap } from 'scripts/services/utilService'

class LocationTypeahead extends Component {
  componentDidMount() {
    loadMap()
  }
  render() {
    return (
      <div id="mapWrap">
        <div id="map" className="" style={{ width: 'calc(100% + 20px)', height: '200px', marginLeft: '-10px' }}></div>
        <div id="scriptArea"></div>
      </div>
    )
  }
}

export default LocationTypeahead