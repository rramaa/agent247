import localStorageService from "scripts/services/localStorageService"
import {getSelectedCategory, getCategories} from "scripts/services/utilService"
import STEPS from 'scripts/services/config/steps'

const NOTE_KEY = "notes"
const CATEGORY_KEY = "category"

export function getInitialState(){
	const newState = {
		step: STEPS["STEP_1"],
		showOptions: false
	}
	return newState
}

export default function rootReducer(state={}, {type, payload}){
	let {step} = state
	let newState = {}
	switch(type){
		case 'CHANGE_STEP':
			newState = {
				...state,
				step: payload,
				showOptions: false
			}
			break;
		case 'SHOW_OPTIONS':
			newState = {
				...state,
				showOptions: payload
			}
			break;
		case 'CHANGE_SPEAKING_STATE':
			newState = {
				...state,
				speaking: payload
			}
			break;
		default:
			newState = {
				...state
			}
	}
	return newState
}
