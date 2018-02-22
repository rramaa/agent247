export function changeStep(dispatch, step) {
  dispatch({
    type: 'CHANGE_STEP',
    payload: step
  })
}