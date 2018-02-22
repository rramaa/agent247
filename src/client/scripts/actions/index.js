let stepStack = [];

export function changeStep(dispatch, step, currentStep) {
	stepStack.push(currentStep);
	dispatch({
		type: 'CHANGE_STEP',
		payload: step
	})
}

export function undoChangeStep(dispatch){
	let lastStep = stepStack.pop()
	if(lastStep){
		dispatch({
			type: 'CHANGE_STEP',
			payload: lastStep
		});
	}	
}

export {stepStack}