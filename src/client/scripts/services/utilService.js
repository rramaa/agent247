import localStorageService from "scripts/services/localStorageService"

export function talkToMe(text){
	var msg = new SpeechSynthesisUtterance();
	msg.text = text || 'Did you miss me?';
	speechSynthesis.speak(msg);
}