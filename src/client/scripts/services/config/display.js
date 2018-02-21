import STEPS from 'scripts/services/config/steps'

const options = {
  [STEPS["STEP_1"]]: [
    {
      displayText: 'Hey Mark, whats up?',
      id: 1
    }, {
      displayText: 'Hey man, whats up?',
      id: 2
    }, {
      displayText: 'good good',
      id: 3
    }, {
      displayText: 'Hey Mark, whats up?',
      id: 4
    }
  ],
  [STEPS["STEP_2"]]: [
    {
      displayText: 'step 2'
    }
  ],
  [STEPS["STEP_3"]]: [
    {
      displayText: 'step 3'
    }
  ],
  [STEPS["STEP_4"]]: [
    {
      displayText: 'step 4'
    }
  ]
}

export default options