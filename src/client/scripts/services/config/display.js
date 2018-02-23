import STEPS from 'scripts/services/config/steps'

const options = {
  [STEPS["INTRO"]]: {
    type: 'intro'
  },
  [STEPS["STEP_1"]]: {
    type: 'text',
    options: [{
      displayText: 'Hi Mark, sorry I couldn’t pick your call',
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
      displayText: 'This apartment is situated in one of the most sought after luxury societies in the city by DLF',
      id: 1
    }, {
      type: 'image',
      data: {
        class1: 'propimg',
        class2: 'hide'
      },
      id: 2
    }, {
        displayText: 'It is a meticulously designed 4BHK apartment with innovative interiors and facilities',
      id: 3
    }, {
        displayText: 'Located just 200 meters off from Golf course road, it provides great connectivity. Sounds interesting?',
      id: 4
    }]
  },
  [STEPS["STEP_3"]]: {
    type: 'text',
    options: [{
      displayText: 'Sure, I can look that up',
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
        id: 1,
        url: 'https://www.makaan.com/lite/gurgaon/builder-project-in-sector-28-4458345/5bhk-4t-1500-sqft-apartment-for-rent'
      }, {
        imgurl: 'https://content.makaan.com/16/6965910/274/9464059.jpeg?width=1024&height=576',
        title: '4 BHK Apartment',
        location: 'DLF Belaire',
        locality: 'Sector 54, Gurgaon',
        price: '95,000',
        id: 2,
        url: 'https://www.makaan.com/lite/gurgaon/dlf-the-belaire-in-sector-54-2844520/4bhk-4t-4200-sqft-apartment-for-rent'
      }],
      nextStep: STEPS["STEP_5"],
      id: 3
    }]
  },
  [STEPS["STEP_5"]]: {
    type: 'text',
    options: [{
      displayText: 'Thank you',
      id: 1
    },{
      displayText: 'Would you also like to schedule a visit to these properties?',
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
      displayText: 'Great!',
      id: 1
    },{
      displayText: 'I am free this saturday afternoon',
      id: 2
    }, {
      type: 'image',
      data: {
        class1: 'calendar',
        class2: 'hide'
      },
      id: 3
    }, {
      displayText: 'Tell me when you are free?',
      id: 4
    }]
  },
  [STEPS["STEP_7"]]: {
    type: 'text',
    options: [{
      displayText: 'Thanks, I have created a personalized property schedule for you',
      id: 1
    }, {
      type: 'map',
      id: 4,
      variableDelay: 5000
    }, {
      displayText: 'It should take around 2 hours for the tour',
      id: 2
    }, {
      displayText: 'Looks alright?',
      id: 3
    }]
  },
  [STEPS["STEP_8"]]: {
    type: 'text',
    options: [{
      displayText: 'Thanks. We also provide a complimentary pick up service from your current residence',
      id: 1
    }, {
      displayText: 'If you want to subscribe, tell me pick up location?',
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
      type: 'dynamic',
      displayFuntion: function({timeData: {day="Saturday", time="afternoon"} = {}}) {
        return `Thanks, the car pick up will reach this ${day} ${time}`
      },
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
      displayText: 'DLF Park Place, located in Sector 54, offers apartments with the price being on request',
      id: 1
    }, {
      type: 'image',
      data: {
        class1: 'park-place',
        class2: 'hide'
      },
      id: 2
    }, {
        displayText: 'This area is the leading financial and industrial centre of the city',
      id: 3
    }, {
        displayText: 'It offers facilities like Gymnasium, swimming pool, childrens play area, club house, and many other luxury amenities',
      id: 4
      }]
  },
  [STEPS["STEP_12"]]: {
    type: 'text',
    options: [{
      displayText: 'Ofcourse',
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
      displayText: 'If you have any further queries, you can reach out to me on my cell phone',
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
      type: 'dynamic',
      displayFuntion: function ({ timeData: { day = "Saturday", time = "afternoon" } = {}}) {
        return `Thanks, the car pick up will reach this ${day} ${time}`
      },
      id: 1
    }, {
      displayText: 'It was great talking to you Mark',
      id: 2
    }, {
      displayText: 'Looking forward!',
      id: 3
    }]
  },
  [STEPS["EXIT"]]: {
    type: 'exit'
  }
}
export default options