let stepStack = [];

export function changeStep(dispatch, step) {
	stepStack.push(step);
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