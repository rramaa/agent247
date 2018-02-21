import STEPS from 'scripts/services/config/steps'

const commonOptions = [{
  displayText: "Common option"
}]

const options = {
  [STEPS["STEP_1"]]: [
    ...commonOptions,
    {
      displayText: 'step 1',
      nextStep: STEPS["STEP_2"]
    },{
      displayText: 'step 2'
    }
  ],
  [STEPS["STEP_2"]]: [
    ...commonOptions,
    {
      displayText: 'step 2'
    }
  ],
  [STEPS["STEP_3"]]: [
    ...commonOptions,
    {
      displayText: 'step 3'
    }
  ],
  [STEPS["STEP_4"]]: [
    ...commonOptions,
    {
      displayText: 'step 4'
    }
  ]
}

export default options