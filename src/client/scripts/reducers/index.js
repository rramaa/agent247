import localStorageService from "scripts/services/localStorageService"
import {getSelectedCategory, getCategories} from "scripts/services/utilService"

const NOTE_KEY = "notes"
const CATEGORY_KEY = "category"

export function getInitialState(){
	const newState = {
		text: "init Text",
		inputOptions: [
			{
				displayText: "option 1",
				inputText: 'SHOW_STATUS'

			},
			{
				displayText: "option 2",
				inputText: 'SHOW_PATH'
			}
		]
	}
	return newState
}

export default function rootReducer(state={}, {type, payload}){
	let newState = {}
	switch(type){
		case 'UPDATE_OUTPUT': 
			newState = Object.assign({}, state, {outputText: payload})
			break;
		default:
			newState = Object.assign({}, state, {})
			break;
	}
	return newState
}
