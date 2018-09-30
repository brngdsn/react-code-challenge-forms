import c from './constants'

export const setUserPreferences = (userPreferences) => ({
  type: c.SET_USER_PREFERENCES,
  data: userPreferences
})

export const matchesRequest = () => ({
  type: c.MATCHES_REQUEST
})

export const matchesSuccess = (data) => ({
  type: c.MATCHES_SUCCESS,
  data
})

export const matchesFailure = () => ({
  type: c.MATCHES_FAILURE
})

export const fetchMatches = () => {
  return (dispatch) => {
      dispatch(matchesRequest())
      return fetch(`https://randomuser.me/api/?nat=US&results=10`)
          .then(response => response.json())
          .then(json => dispatch(matchesSuccess(json)))
          .catch(error => dispatch(matchesFailure(error)))
  }
}
