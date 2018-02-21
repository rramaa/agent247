import STEPS from 'scripts/services/config/steps'

const options = {
  [STEPS["INTRO"]]: {
    type: 'intro'
  },
  [STEPS["STEP_1"]]: {
    type: 'text',
    options: [{
      displayText: 'Hi Mark, sorry I couldn’t pick your call.',
      id: 1
    }, {
      displayText: 'I saw that you have shown interest for rent in DLF Park Place',
      id: 2
    }, {
      type: 'property-card',
      data: {
        imgurl: 'https://content.makaan.com/16/8414681/274/19988787.jpeg?width=90&height=90',
        title: '4 BHK Apartment',
        location: 'DLF Park Place',
        locality: 'Sector 54, Gurgaon',
        price: '85,000'
      },
      id: 3
    }, {
      displayText: 'How may I further assist you today?',
      id: 4
    }]
  },
  [STEPS["STEP_2"]]: {
    type: 'text',
    options: [{
      displayText: 'This apartment is situated in one of the most sought after luxury societies in Gurgaon by DLF.',
      id: 1
    }, {
      displayText: 'It is a meticulously designed 4BHK-Apartment with cut edge innovative interiors and facilities.',
      id: 2
    }, {
      displayText: 'Located off just 200 meters from Golf course road, provides great connectivity.',
      id: 3
    }]
  },
  [STEPS["STEP_3"]]: {
    type: 'text',
    options: [{
      displayText: 'Sure, I can look that up.',
      id: 1
    },{
      displayText: 'Is your budget of 85K a bit flexible on the higher side?',
      id: 2
    }]
  },
  [STEPS["STEP_4"]]: {
    type: 'text',
    options: [{
      displayText: 'There are 2 more properties near buy that you can check out',
      id: 1
    },{
      displayText: 'Tell me which ones you like',
      id: 2
    }, {
      type: 'similar',
      data: [{
        imgurl: 'https://content.makaan.com/16/8414681/274/19988787.jpeg?width=90&height=90',
        title: '4 BHK Apartment',
        location: 'DLF Park Place',
        locality: 'Sector 54, Gurgaon',
        price: '85,000'
      }, {
        imgurl: 'https://content.makaan.com/16/8414681/274/19988787.jpeg?width=90&height=90',
        title: '4 BHK Apartment',
        location: 'DLF Park Place',
        locality: 'Sector 54, Gurgaon',
        price: '85,000'
      }],
      id: 3
    }]
  },
  [STEPS["STEP_5"]]: {
    type: 'text',
    options: [{
      displayText: 'Thank you.',
      id: 1
    },{
      displayText: 'Would you like to schedule a visit to these properties?',
      id: 2
    }]
  },
  [STEPS["STEP_6"]]: {
    type: 'text',
    options: [{
      displayText: 'Cool.',
      id: 1
    },{
      displayText: 'I am free this saturday afternoon and sunday afternoon.',
      id: 2
    },{
      displayText: 'Which one suits you better?',
      id: 3
    }]
  },
  [STEPS["STEP_7"]]: {
    type: 'text',
    options: [{
      displayText: 'UNCHARTED TERRITORY! HOW DID YOU FIND ME?',
      id: 1
    }]
  },
  [STEPS["STEP_8"]]: {
    type: 'text',
    options: [{
      displayText: 'Thanks, I have created a property schedule for you below.',
      id: 1
    }, {
      displayText: 'It should take around 2 hours for the tour.',
      id: 2
    }, {
      type: 'map',
      id: 4,
      variableDelay: 5000
    }, {
      displayText: 'Please confirm if it sounds good?',
      id: 3
    }]
  },
  [STEPS["STEP_9"]]: {
    type: 'text',
    options: [{
      displayText: 'UNCHARTED TERRITORY! HOW DID YOU FIND ME?',
      id: 1
    }]
  },
  [STEPS["STEP_10"]]: {
    type: 'text',
    options: [{
      displayText: 'It was great talking to you Mark.',
      id: 1
    }, {
      displayText: 'Looking forward!',
      id: 2
    }]
  },
  [STEPS["STEP_11"]]: {
    type: 'text',
    options: [{
      displayText: 'Is this the real life?',
      id: 1
    }]
  }
}

export default options