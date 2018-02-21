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
				{location:'28.43019035, 77.09134694',stopover: true}
				],
			origin: '28.4439267, 77.10113164',
			destination: '28.44226636, 77.07229253'
		});
		var mapScript = document.getElementById('map-script')
		if (mapScript) {
			return calculateAndDisplayRoute()
		}
		mapScript = document.createElement('script');
		mapScript.async = true;
		mapScript.defer = true;
		mapScript.setAttribute('id', 'map-script')
		mapScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCM65ffwx1b7S_WBQsd3mhgk8n4UDO1INM&callback=initMap'
		document.getElementById('scriptArea').appendChild(mapScript);
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