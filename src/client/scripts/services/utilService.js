import localStorageService from "scripts/services/localStorageService"

var speech = new SpeechSynthesisUtterance();

export function talkToMe(text){
	speech.text = text
	return speech
}