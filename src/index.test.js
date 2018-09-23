// This unit test spec uses Jest: https://facebook.github.io/jest/docs/en/getting-started.html

import React from 'react'
import { shallow } from 'enzyme'

// Component to be tested
import Match from './components/Match'

// Selector to be tested
import { selectMatches } from './store/reducers'

describe('<Match />', () => {
    const match = {
        picture: {
            large: null
        },
        name: {
            first: null,
            last: null
        },
        dob: {
            age: null
        }
    }
    test('renders the component', () => {
        const onContact = jest.fn()
        const wrapper = shallow(<Match match={match} onContact={onContact} />)

        expect(wrapper.length).toEqual(1)
    })
    test('calls onContact handler', () => {
        const onContact = jest.fn()
        const wrapper = shallow(<Match match={match} onContact={onContact} />)

        wrapper.find('button').simulate('click')

        expect(onContact.mock.calls.length).toEqual(1)
    })
})

const matches = {
    "results": [
      {
        "gender": "male",
        "name": {
          "title": "mr",
          "first": "ian",
          "last": "myers"
        },
        "location": {
          "street": "2978 oak ridge ln",
          "city": "detroit",
          "state": "michigan",
          "postcode": 25793,
          "coordinates": {
            "latitude": "54.3490",
            "longitude": "-57.6633"
          },
          "timezone": {
            "offset": "-5:00",
            "description": "Eastern Time (US & Canada), Bogota, Lima"
          }
        },
        "email": "ian.myers@example.com",
        "login": {
          "uuid": "6a349362-17e2-46e4-8fab-e0522c4fd758",
          "username": "redpeacock936",
          "password": "vaughn",
          "salt": "eC6jx5pY",
          "md5": "4fb8ae047ce28771209b63142a65a227",
          "sha1": "e8f7716499254649b1b45d6040d279d1438f40c0",
          "sha256": "0834477d2b35072edb491c896cfa99be4c773ac36172874166465f747c427525"
        },
        "dob": {
          "date": "1947-09-14T08:40:24Z",
          "age": 71
        },
        "registered": {
          "date": "2008-03-13T12:17:03Z",
          "age": 10
        },
        "phone": "(172)-984-3581",
        "cell": "(454)-872-4245",
        "id": {
          "name": "SSN",
          "value": "827-80-4164"
        },
        "picture": {
          "large": "https:\/\/randomuser.me\/api\/portraits\/men\/12.jpg",
          "medium": "https:\/\/randomuser.me\/api\/portraits\/med\/men\/12.jpg",
          "thumbnail": "https:\/\/randomuser.me\/api\/portraits\/thumb\/men\/12.jpg"
        },
        "nat": "US"
      },
      {
        "gender": "male",
        "name": {
          "title": "mr",
          "first": "pat",
          "last": "peck"
        },
        "location": {
          "street": "850 lovers ln",
          "city": "west valley city",
          "state": "new hampshire",
          "postcode": 27283,
          "coordinates": {
            "latitude": "70.7946",
            "longitude": "-130.9829"
          },
          "timezone": {
            "offset": "-8:00",
            "description": "Pacific Time (US & Canada)"
          }
        },
        "email": "pat.peck@example.com",
        "login": {
          "uuid": "687dc373-68c3-4bd0-b2a6-c7ba217f9356",
          "username": "happyswan210",
          "password": "benjamin",
          "salt": "vATcCc73",
          "md5": "cf712490b7c46da93ff58142ecfdb808",
          "sha1": "41b5bde2446a44492759b034ca7316a3c3bd64cf",
          "sha256": "cbf7a4c18e9e66acd210b591773a812307be717a683994341644229d3be26403"
        },
        "dob": {
          "date": "1973-01-17T19:38:23Z",
          "age": 45
        },
        "registered": {
          "date": "2010-02-01T12:29:49Z",
          "age": 8
        },
        "phone": "(602)-213-8662",
        "cell": "(759)-656-3508",
        "id": {
          "name": "SSN",
          "value": "763-72-5095"
        },
        "picture": {
          "large": "https:\/\/randomuser.me\/api\/portraits\/men\/78.jpg",
          "medium": "https:\/\/randomuser.me\/api\/portraits\/med\/men\/78.jpg",
          "thumbnail": "https:\/\/randomuser.me\/api\/portraits\/thumb\/men\/78.jpg"
        },
        "nat": "US"
      },
      {
        "gender": "female",
        "name": {
          "title": "ms",
          "first": "jane",
          "last": "kelley"
        },
        "location": {
          "street": "1088 lone wolf trail",
          "city": "little rock",
          "state": "maine",
          "postcode": 65778,
          "coordinates": {
            "latitude": "43.5468",
            "longitude": "-167.7843"
          },
          "timezone": {
            "offset": "+5:30",
            "description": "Bombay, Calcutta, Madras, New Delhi"
          }
        },
        "email": "jane.kelley@example.com",
        "login": {
          "uuid": "70fe26d1-87ca-4044-a6d9-a3c9f999681d",
          "username": "whitemeercat371",
          "password": "arizona",
          "salt": "tIh889VC",
          "md5": "8f5d4a6e4268a78053594b965c72e55a",
          "sha1": "ba52fc8ba51135f30ecee95978e3052b90f47d9f",
          "sha256": "359ed8202934c6dbf6dbcd185628121819e79ddc5866f97ad2385f50d32ed12b"
        },
        "dob": {
          "date": "1991-02-22T07:17:56Z",
          "age": 27
        },
        "registered": {
          "date": "2018-05-01T18:40:23Z",
          "age": 0
        },
        "phone": "(251)-469-2239",
        "cell": "(241)-208-1855",
        "id": {
          "name": "SSN",
          "value": "071-05-3239"
        },
        "picture": {
          "large": "https:\/\/randomuser.me\/api\/portraits\/women\/11.jpg",
          "medium": "https:\/\/randomuser.me\/api\/portraits\/med\/women\/11.jpg",
          "thumbnail": "https:\/\/randomuser.me\/api\/portraits\/thumb\/women\/11.jpg"
        },
        "nat": "US"
      }
    ],
    "info": {
      "seed": "67396b6bfb1c3434",
      "results": 3,
      "page": 1,
      "version": "1.2"
    }
}

describe('selectMatches(state)', () => {
    test('filters matches by selected criteria', () => {
        const filtered = selectMatches({ matches: { data: matches }, userPreferences: {
            ageMin: 18,
            ageMax: 90,
            gender: 'female'
        } })
        expect(filtered.length).toBe(1)
    })
})
