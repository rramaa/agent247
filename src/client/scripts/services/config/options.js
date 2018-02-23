import STEPS from 'scripts/services/config/steps'

const options = {
    [STEPS["INTRO"]]: {
        type: 'intro',
        nextStep: STEPS["STEP_1"]
    },
    [STEPS["STEP_1"]]: [{
        displayText: 'Know more about the property',
        nextStep: STEPS["STEP_2"]
    }, {
        displayText: 'Know more about DLF Park Place',
        nextStep: STEPS["STEP_11"]
    }, {
        displayText: 'When can I visit the property?',
        nextStep: STEPS["STEP_12"]
    }],
    [STEPS["STEP_2"]]: [{
        displayText: 'Any other similar properties nearby?',
        nextStep: STEPS["STEP_3"]
    }, {
        displayText: 'When can I visit the property?',
        nextStep: STEPS["STEP_12"]
    }],
    [STEPS["STEP_3"]]: [{
        displayText: 'I can go up 10K if required',
        nextStep: STEPS["STEP_4"]
    }, {
        displayText: 'No, that is my upper limit',
        nextStep: STEPS["STEP_4"]
    }],
    [STEPS["STEP_4"]]: [],
    [STEPS["STEP_5"]]: [
    {
        displayText: 'Yes definitely',
        nextStep: STEPS["STEP_6"]
    }, {
        displayText: 'Umm..not sure yet',
        nextStep: STEPS["STEP_13"]
    }
  ],
  [STEPS["STEP_6"]]: [
    {
      displayText: 'Saturday afternoon',
      nextStep: STEPS["STEP_7"]
    }, {
      displayText: 'Some other time slot',
      action: {
        type: 'OPEN_MODAL',
        payload: {
          name: 'time-slot-vala',
          modalData: {
            nextStep: STEPS["STEP_7"]
          }
        }
      }
    }],
    [STEPS["STEP_7"]]: [{
        displayText: 'Yes definitely',
        nextStep: STEPS["STEP_8"]
    }, {
        displayText: 'Let me get back to you soon',
        nextStep: STEPS["STEP_13"]
    }],
    [STEPS["STEP_8"]]: [{
        displayText: 'Enter location',
        nextStep: STEPS["STEP_9"]
    }, {
        displayText: 'No, I will manage',
        nextStep: STEPS["STEP_14"]
    }],
    [STEPS["STEP_9"]]: [],
    [STEPS["STEP_10"]]: [{
        displayText: 'Thanks, bye!',
        nextStep: STEPS["EXIT"]
    }],
    [STEPS["STEP_11"]]: [{
        displayText: 'Any other similar properties nearby?',
        nextStep: STEPS["STEP_3"]
    }, {
        displayText: 'When can I visit the property?',
        nextStep: STEPS["STEP_12"]
    }],
    [STEPS["STEP_12"]]: [{
        displayText: 'Yes, show me more',
        nextStep: STEPS["STEP_4"]
    }],
    [STEPS["STEP_13"]]: [{
        displayText: 'Thanks, bye!',
        nextStep: STEPS["EXIT"]
    }],
    [STEPS["STEP_14"]]: [{
        displayText: 'Thanks, bye!',
        nextStep: STEPS["EXIT"]
    }],
    [STEPS["EXIT"]]: {
        type: 'exit'
    }
}

export default options