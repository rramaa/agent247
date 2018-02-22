import localStorageService from "scripts/services/localStorageService"

var speech = new SpeechSynthesisUtterance();

export function talkToMe(text){
	speech.text = text
	return speech
}

export function loadMap() {
	var mapScript = document.getElementById('map-script')
	if (mapScript) {
		return window.initMap()
	}
	mapScript = document.createElement('script');
	mapScript.async = true;
	mapScript.defer = true;
	mapScript.setAttribute('id', 'map-script')
	mapScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCM65ffwx1b7S_WBQsd3mhgk8n4UDO1INM&callback=initMap&libraries=places'
	document.getElementById('scriptArea').appendChild(mapScript);
}

export function startMapAutocomplete(){
	if(!window.GMAPS) window.alert('Yeh kya hua?')
		var card = document.getElementById('pac-card');
	    var input = document.getElementById('pac-input');
	    var map = new window.GMAPS.Map(document.getElementById('map'), {
          center: {lat: -33.8688, lng: 151.2195},
          zoom: 13
        });
	    map.controls[window.GMAPS.ControlPosition.TOP_RIGHT].push(card);

	    var autocomplete = new window.GMAPS.places.Autocomplete(input);
		autocomplete.bindTo('bounds', map);

	    var infowindow = new window.GMAPS.InfoWindow();
	    var infowindowContent = document.getElementById('infowindow-content');
	    infowindow.setContent(infowindowContent);
	    
	    var marker = new window.GMAPS.Marker({
	      map: map,
	      anchorPoint: new window.GMAPS.Point(0, -29)
	    });
}

export function calculateAndDisplayRoute(origin , destination, waypoints) {
	if(!window.GMAPS) window.alert('Kaise hua?')

	var directionsService =  new window.GMAPS.DirectionsService,
		directionsDisplay = new window.GMAPS.DirectionsRenderer,

		tempDest='',
		tempWayPts=[],
		currWayPt=-1,

		map = new window.GMAPS.Map(document.getElementById('map'), {
	  	  zoom: 15,
	  	  scrollwheel: false,
	  	  navigationControl: false,
	  	  mapTypeControl: false,
	  	  scaleControl: false,
	  	  draggable: false,
	  	  center: {lat: 28.4439267, lng: 77.10113164}
	  	}),

	  	looperPromise = function() {
	  	return new Promise((resolve, reject)=>{
	  		if(tempDest != '') tempWayPts.push({location:tempDest, stopover:true});

	  		if(currWayPt < waypoints.length-1){
	  			tempDest = waypoints[++currWayPt].location;
	  		} else if (currWayPt == waypoints.length-1) {
	  			currWayPt++;
	  			tempDest = destination;
	  		} else {
	  			return reject('Finished Routing');
	  		}

	  		directionsService.route({
	  		  origin: origin,
	  		  destination: tempDest,
	  		  waypoints: tempWayPts,
	  		  optimizeWaypoints: true,
	  		  travelMode: 'DRIVING'
	  		}, function(response, status) {
	  		  if (status === 'OK') {
	  		    directionsDisplay.setDirections(response);
	  		    return resolve();
	  		    var route = response.routes[0];
	  		  } else {
	  		    window.alert('Directions request failed due to ' + status);
	  		    return reject();
	  		  }
	  		});
	  	});
	  	},
	  	looper = function (){
	  		looperPromise().then(()=>{setTimeout(looper,1000)});
	  	};

	  	directionsDisplay.setMap(map);
		setTimeout(looper,1000);
}