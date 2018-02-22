import localStorageService from "scripts/services/localStorageService"

export function talkToMe(text){
	var speech = new SpeechSynthesisUtterance();
	speech.text = text || 'Did you miss me?';
	return speech
}

export function loadMap() {
	var mapScript = document.getElementById('map-script')
	if (mapScript) {
		return
	}
	mapScript = document.createElement('script');
	mapScript.async = true;
	mapScript.defer = true;
	mapScript.setAttribute('id', 'map-script')
	mapScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCM65ffwx1b7S_WBQsd3mhgk8n4UDO1INM&callback=initMap&libraries=places'
	document.getElementById('scriptArea').appendChild(mapScript);
}