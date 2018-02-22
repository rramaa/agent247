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
    nextStep: STEPS["STEP_4"]
  },
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
    {
      displayText: 'I can go upto 1Lac if required.',
      nextStep: STEPS["STEP_4"]
    }, {
      displayText: 'No, that is my upper limit'
    }
  ],
  [STEPS["STEP_4"]]: [],
  [STEPS["STEP_5"]]: [
    {
      displayText: 'Yes definitely',
      nextStep: STEPS["STEP_6"]
    }, {
      displayText: 'Umm..Not sure yet'
    }
  ],
  [STEPS["STEP_6"]]: [
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
    {
      displayText: 'Seems that I am lost, show me da wey?',
      nextStep: STEPS["STEP_1"]
    }, {
      displayText: 'NO.'
    }
  ],
  [STEPS["STEP_8"]]: [
    {
      displayText: 'Yes definitely.',
      nextStep: STEPS["STEP_9"]
    }, {
      displayText: 'Let me get back to you soon.'
    }
  ],
  [STEPS["STEP_9"]]: [
    {
      displayText: 'Enter location',
      nextStep: STEPS["STEP_10"]
    }, {
      displayText: 'No, I will come on my own'
    }
  ],
  [STEPS["STEP_10"]]: [
    {
      displayText: 'This is a location',
      nextStep: STEPS["STEP_11"]
    }
  ],
  [STEPS["STEP_11"]]: [
    {
      displayText: 'Thanks, bye!'
    }
  ]
}

export default options