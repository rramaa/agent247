import STEPS from 'scripts/services/config/steps'

const options = {
  [STEPS["STEP_1"]]: {
    type: 'text',
    options: [{
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
    }, {
      type: 'property-card',
      data: {
        title: '4 BHK Apartment',
        location: 'DLF Park Place',
        locality: 'Sector 54, Gurgaon'
      }
    }]
  },
  [STEPS["STEP_2"]]: {
    type: 'map'
  },
  [STEPS["STEP_3"]]: {
    type: 'text'
  },
  [STEPS["STEP_4"]]: {
    type: 'text'
  }
}

export default options