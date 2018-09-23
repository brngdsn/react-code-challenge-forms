import React from 'react'
import UserPreferences from './containers/UserPreferences'
import VisibleMatchesList from './containers/VisibleMatchesList'

class App extends React.Component {

  render () {
    return (
      <div>
        <div className="header">
          <h1>Lonely Hearts Dating Service</h1>
        </div>
        <div className="container text-center">
          <div id="root">
            <UserPreferences />
            <VisibleMatchesList />
          </div>
        </div>
      </div>
    )
  }

}

export default App
