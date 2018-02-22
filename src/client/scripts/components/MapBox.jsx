import React, {Component} from "react"
import {loadMap} from 'scripts/services/utilService'

class MapBox extends Component{
	constructor(props) {
		super(props)
		this.updatePath = this.updatePath.bind(this)
	}

	updatePath(params) {
		//{location:'',stopover: true}
		window.waypoints = params.waypoints;
		window.origin=params.origin;
		window.destination=params.destination;
		//window.calculateAndDisplayRoute();
	}

	componentDidMount(){
		this.updatePath({
			waypoints:[
				{location:'montreal, quebec',stopover: true},
				{location:'toronto, ont',stopover: true},
				{location:'chicago, il',stopover: true}
				],
			origin: 'Halifax, NS',
			destination: 'Vancouver, BC'
		});
		loadMap()
		return calculateAndDisplayRoute()
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