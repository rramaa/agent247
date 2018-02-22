import STEPS from 'scripts/services/config/steps'

/*
STEP 0 -> Loading
STEP 1 -> Intro
STEP 2 -> Know more
STEP 3 -> Budget
STEP 4 -> Similar 
STEP 5 -> Schedule
STEP 6 -> Time Select
STEP 7 -> Pickup Time
STEP 8 -> MAP
STEP 9 -> Pickup Location
STEP 10 -> Thanks
STEP 11 -> Kill Me PLEASE
*/

const options = {
  [STEPS["INTRO"]]: {
    type: 'intro',
    nextStep: STEPS["STEP_1"]
  },
  [STEPS["STEP_1"]]: [
    {
      displayText: 'Know more on the property.',
      nextStep: STEPS["STEP_2"]
    },{
      displayText: 'Know more about DLF Park Place',
      nextStep: STEPS["STEP_11"]
    }, {
      displayText: 'When can I visit the property?',
      nextStep: STEPS["STEP_12"]
    }
  ],
  [STEPS["STEP_2"]]: [
    {
      displayText: 'Any other similar properties nearby?',
      nextStep: STEPS["STEP_3"]
    }, {
      displayText: 'When can I visit the property?',
      nextStep: STEPS["STEP_12"]
    }
  ],
  [STEPS["STEP_3"]]: [
    {
      displayText: 'I can go up 10K if required',
      nextStep: STEPS["STEP_4"]
    }, {
      displayText: 'No, that is my upper limit',
      nextStep: STEPS["STEP_4"]
    }
  ],
  [STEPS["STEP_4"]]: [],
  [STEPS["STEP_5"]]: [
    {
      displayText: 'Yes definitely',
      nextStep: STEPS["STEP_6"]
    }, {
      displayText: 'Umm..Not sure yet',
      nextStep: STEPS["STEP_13"]
    }
  ],
  [STEPS["STEP_6"]]: [
    {
      displayText: 'Saturday afternoon',
      nextStep: STEPS["STEP_8"]
    }, {
      displayText: 'Some other time.',
      action: "OPEN_TIME_SLOT"
    }
  ],
  [STEPS["STEP_7"]]: [
    {
      displayText: 'Yes definitely',
      nextStep: STEPS["STEP_8"]
    }, {
      displayText: 'Let me get back to you soon',
      nextStep: STEPS["STEP_13"]
    }
  ],
  [STEPS["STEP_8"]]: [
    {
      displayText: 'Enter location',
      nextStep: STEPS["STEP_9"]
    }, {
      displayText: 'No, I will come on my own',
      nextStep: STEPS["STEP_14"]
    }
  ],
  [STEPS["STEP_9"]]: [],
  [STEPS["STEP_10"]]: [
    {
      displayText: 'Thanks, bye!',
      nextStep: STEPS["EXIT"]
    }
  ],
  [STEPS["STEP_11"]]: [
    {
      displayText: 'Any other similar properties nearby?',
      nextStep: STEPS["STEP_3"]
    }, {
      displayText: 'When can I visit the property?',
      nextStep: STEPS["STEP_12"]
    }
  ],
  [STEPS["STEP_12"]]: [
    {
      displayText: 'Yes, show me more',
      nextStep: STEPS["STEP_4"]
    }
  ],
  [STEPS["STEP_13"]]: [
    {
      displayText: 'Thanks, bye!',
      nextStep: STEPS["EXIT"]
    }
  ],
  [STEPS["STEP_14"]]: [
    {
      displayText: 'Thanks, bye!',
      nextStep: STEPS["EXIT"]
    }
  ],
  [STEPS["EXIT"]]: [
    {
      displayText: 'Thanks, bye!'
    }
  ]
}

export default options