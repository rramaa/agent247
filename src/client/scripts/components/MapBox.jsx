import React, {Component} from "react"
import {calculateAndDisplayRoute} from 'scripts/services/utilService'

class MapBox extends Component{
	constructor(props) {
		super(props)
	}

	componentDidMount(){
		calculateAndDisplayRoute('28.4439267, 77.10113164', '28.44226636, 77.07229253', [{location:'28.43019035, 77.09134694',stopover: true}]);
	}

	componentWillUnmount() {
		document.getElementById('scriptArea').innerHTML='';
	}

	render(){
		return (
			<div id="mapWrap">
				<div id="map" className="" style={{width:'calc(100% + 20px)', height:'200px', marginLeft:'-10px'}}></div>
				<div id="scriptArea"></div>
			</div>
		)
	}
}

export default MapBox