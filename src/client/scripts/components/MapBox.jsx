import React, {Component} from "react"

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
		var mapScript = document.createElement('script');
		mapScript.async = true;
		mapScript.defer = true;
		mapScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCM65ffwx1b7S_WBQsd3mhgk8n4UDO1INM&callback=initMap'
		document.getElementById('scriptArea').appendChild(mapScript);
	}

	componentWillUnmount() {
		document.getElementById('scriptArea').innerHTML='';
	}

	render(){
		return (
			<div id="mapWrap">
				<div id="map" style={{width:'600px', height:'400px'}}></div>
				<div id="scriptArea"></div>
			</div>
		)
	}
}

export default MapBox