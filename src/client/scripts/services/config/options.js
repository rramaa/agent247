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

const commonOptions = [{
  displayText: "What were we talking about?",
  nextStep: STEPS["STEP_1"]
}]

const options = {
  [STEPS["STEP_1"]]: [
    {
      displayText: 'Know more on the property.',
      nextStep: STEPS["STEP_2"]
    },{
      displayText: 'Know more about DLF Park Place.'
    }, {
      displayText: 'When can I visit the property?'
    }
  ],
  [STEPS["STEP_2"]]: [
    ...commonOptions,
    {
      displayText: 'Any other similar properties nearby?',
      nextStep: STEPS["STEP_3"]
    }, {
      displayText: 'Who is the owner?'
    }, {
      displayText: 'When can I visit the property?'
    }
  ],
  [STEPS["STEP_3"]]: [
    ...commonOptions,
    {
      displayText: 'I can go upto 1Lac if required.',
      nextStep: STEPS["STEP_4"]
    }, {
      displayText: 'No, that is my upper limit'
    }
  ],
  [STEPS["STEP_4"]]: [
    ...commonOptions,
    {
      displayText: 'Pikachu, I choose you.',
      nextStep: STEPS["STEP_5"]
    }, {
      displayText: 'NO.'
    }
  ],
  [STEPS["STEP_5"]]: [
    ...commonOptions,
    {
      displayText: 'Yes definitely',
      nextStep: STEPS["STEP_6"]
    }, {
      displayText: 'Umm..Not sure yet'
    }
  ],
  [STEPS["STEP_6"]]: [
    ...commonOptions,
    {
      displayText: 'Saturday afternoon',
      nextStep: STEPS["STEP_8"]
    }, {
      displayText: 'Sunday afternoon.'
    }, {
      displayText: 'Some other time.'
    }
  ],
  [STEPS["STEP_7"]]: [
    ...commonOptions,
    {
      displayText: 'Seems that I am lost, show me da wey?',
      nextStep: STEPS["STEP_1"]
    }, {
      displayText: 'NO.'
    }
  ],
  [STEPS["STEP_8"]]: [
    ...commonOptions,
    {
      displayText: 'Yes definitely.',
      nextStep: STEPS["STEP_10"]
    }, {
      displayText: 'Let me get back to you soon.'
    }
  ],
  [STEPS["STEP_9"]]: [
    ...commonOptions,
    {
      displayText: 'Seems that I am lost, show me da wey?',
      nextStep: STEPS["STEP_1"]
    }, {
      displayText: 'NO.'
    }
  ],
  [STEPS["STEP_10"]]: [
    ...commonOptions,
    {
      displayText: 'Thanks, bye!',
      nextStep: STEPS["STEP_11"]
    }
  ],
  [STEPS["STEP_11"]]: [
    ...commonOptions,
    {
      displayText: 'Is it a fantasy?'
    }
  ]
}

export default options