// YOUR CODE HERE
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import storeFactory from './store/store'
import App from './App'

const store = storeFactory(true)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)