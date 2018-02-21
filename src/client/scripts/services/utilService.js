import localStorageService from "scripts/services/localStorageService"

export function talkToMe(text){
	var speech = new SpeechSynthesisUtterance();
	speech.text = text || 'Did you miss me?';
	return speech
}