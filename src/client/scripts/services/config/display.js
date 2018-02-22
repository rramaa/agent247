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
        imgurl: 'https://content.makaan.com/16/3566057/274/18812257.jpeg?width=120&height=90',
        title: '4 BHK Apartment',
        location: 'DLF Park Place',
        locality: 'Sector 54, Gurgaon',
        price: '90,000'
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
      displayText: 'Is your budget of 90K a bit flexible on the higher side?',
      id: 2
    }]
  },
  [STEPS["STEP_4"]]: {
    type: 'text',
    options: [{
      displayText: 'There are 2 more properties nearby that you can check out',
      id: 1
    },{
      displayText: 'Tell me which ones you like',
      id: 2
    }, {
      type: 'similar',
      data: [{
        imgurl: 'https://content.makaan.com/16/9284168/274/19512354.jpeg?width=1024&height=576',
        title: '5 BHK Apartment',
        location: 'Builder Project',
        locality: 'Sector 28, Gurgaon',
        price: '80,000',
        id: 1
      }, {
        imgurl: 'https://content.makaan.com/16/6965910/274/9464059.jpeg?width=1024&height=576',
        title: '4 BHK Apartment',
        location: 'DLF Belaire',
        locality: 'Sector 54, Gurgaon',
        price: '95,000',
        id: 2
      }],
      nextStep: STEPS["STEP_5"],
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
    },{
      type: 'image',
      data: {
        class1: 'car-gif',
        class2: 'car'
      },
      id: 3
    }]
  },
  [STEPS["STEP_6"]]: {
    type: 'text',
    options: [{
      displayText: 'Cool.',
      id: 1
    },{
      displayText: 'I am free this saturday afternoon.',
      id: 2
    },{
      displayText: 'Which one suits you better?',
      id: 3
    }]
  },
  [STEPS["STEP_7"]]: {
    type: 'text',
    options: [{
      displayText: 'Thanks, I have created a property schedule for you below.',
      id: 1
    }, {
      type: 'map',
      id: 4,
      variableDelay: 5000
    }, {
      displayText: 'It should take around 2 hours for the tour.',
      id: 2
    }, {
      displayText: 'Please confirm if it sounds good?',
      id: 3
    }]
  },
  [STEPS["STEP_8"]]: {
    type: 'text',
    options: [{
      displayText: 'We also provide a complimentary pick up service from your location.',
      id: 1
    }, {
      displayText: 'If you like, you can tell me pick-up point',
      id: 2
    }]
  },
  [STEPS["STEP_9"]]: {
    options: [{
      type: 'location',
      nextStep: STEPS["STEP_10"],
      id: 1
    }]
  },
  [STEPS["STEP_10"]]: {
    type: 'text',
    options: [{
      displayText: 'Thanks, the car pick up will reach this [day] [morning/afternoon/evening]',
      id: 1
    }, {
      displayText: 'It was great talking to you Mark.',
      id: 2
    }, {
      displayText: 'Looking forward!',
      id: 3
    }]
  },
  [STEPS["STEP_11"]]: {
    type: 'text',
    options: [{
      displayText: 'DLF Park Place, located in Sector 54, offers apartments with the price being on request.',
      id: 1
    }, {
      type: 'image',
      data: {
        class1: 'park-place',
        class2: 'hide'
      }
    }, {
        displayText: 'This area is the leading financial and industrial centre of the city.',
      id: 2
    }, {
        displayText: 'It offers facilities like Gymnasium, swimming pool, childrens play area, club house, and many other luxury amenities.',
      id: 2
      }]
  },
  [STEPS["STEP_12"]]: {
    type: 'text',
    options: [{
      displayText: 'Certainly you can.',
      id: 1
    }, {
        displayText: 'I can also show you some similar properties nearby if you like',
      id: 2
    }]
  },
  [STEPS["STEP_13"]]: {
    type: 'text',
    options: [{
      displayText: 'No worries, I have noted down your interest',
      id: 1
    }, {
      displayText: 'If you have any further queries, you can reach out to me on my cell phone.',
      id: 2
    }, {
      displayText: 'It was great talking to you Mark',
      id: 3
    }, {
        displayText: 'Looking forward!',
      id: 4
    }]
  },
  [STEPS["STEP_14"]]: {
    type: 'text',
    options: [{
      displayText: 'Certainly, let’s catchup at [day] [morning/afternoon/evening]',
      id: 1
    }, {
      displayText: 'It was great talking to you Mark.',
      id: 2
    }, {
      displayText: 'Looking forward!',
      id: 3
    }]
  }
}
export default options