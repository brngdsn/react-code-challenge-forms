import c from './constants'

export const selectMatches = (state = {}) => {
  const matches = state.matches.data.results
    .filter(match => match.dob.age > state.userPreferences.ageMin)
    .filter(match => match.dob.age < state.userPreferences.ageMax)
    .filter(match => {
      if (state.userPreferences.gender === c.GENDER_ANY) {
        return true
      } else {
        return match.gender === state.userPreferences.gender
      }
    })
    .map(match => ({
      ...match,
      name: {
        ...match.name,
        first: match.name.first.charAt(0).toUpperCase() + match.name.first.slice(1),
        last: match.name.last.charAt(0).toUpperCase() + match.name.last.slice(1)
      }
    }))
  return matches
}

export const userPreferences = (state = {}, action) => {
  switch (action.type) {
    case c.SET_USER_PREFERENCES:
      return {
        ...action.data
      }
    default:
      return state
  }
}

export const matches = (state = {}, action) => {
  switch (action.type) {
    case c.MATCHES_REQUEST:
      return {
        ...state,
        error: false,
        busy: true,
        data: {
          results: [],
          info: {}
        }
      }
    case c.MATCHES_SUCCESS:
      return {
        ...state,
        error: false,
        busy: false,
        data: {...action.data}
      }
    case c.MATCHES_ERROR:
      return {
        ...state,
        error: true,
        busy: false,
        data: {
          results: [],
          info: {}
        }
      }
    default:
      return state
  }
}
