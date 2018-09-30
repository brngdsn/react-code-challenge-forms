import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { userPreferences, matches } from './reducers'
import stateData from './initialState'

const storeFactory = (initialState = stateData) =>
  applyMiddleware(thunk)(createStore)(
    combineReducers({ userPreferences, matches }),
    stateData
  )

export default storeFactory
