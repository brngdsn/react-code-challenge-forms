import React from 'react'
import { connect } from 'react-redux'
import stateData from '../store/initialState'
import { setUserPreferences } from  '../store/actions'
import c from '../store/constants'

class UserPreferences extends React.Component {
  constructor (props) {
    super(props)
    // to avoid global resolution in render()
    this.constants = c
    this.state = {
      ...stateData.userPreferences,
      initialState: {
        ...stateData.userPreferences
      }
    }
  }
  isChecked (target, selectedGender) {
    return target === selectedGender ? true : false
  }
  onReset = () => {
    this.setState({ ...this.state.initialState })
    this.props.onSetUserPreferences(this.state.initialState)
  }
  onSubmit = (event) => {
    event.preventDefault()
    this.props.onSetUserPreferences(this.state)
  }
  render () {
    const isChecked = this.isChecked
    const onReset = this.onReset.bind(this)
    const onSubmit = this.onSubmit.bind(this)
    const { ageMin, ageMax, gender } = this.state
    const { GENDER_ANY, GENDER_MALE, GENDER_FEMALE } = this.constants
    return (
      <div id="userPreferences">
        <h2>Search Criteria</h2>
        <form className="form" onSubmit={onSubmit}>
          
          <div className="form-group">
            <label className="control-label">Age</label>
            <input type="number" name="ageMin" value={ageMin} data-id="ageMin"
              onChange={(event) => this.setState({ ageMin: event.target.value })} /> to
            <input type="number" name="ageMax" value={ageMax} data-id="ageMax"
              onChange={(event) => this.setState({ ageMax: event.target.value })} />
          </div>

          <div className="form-group">
            <label className="control-label">Gender</label>
            <label className="radio-inline">
              <input type="radio" name="gender" data-id="genderAny"
                checked={isChecked(GENDER_ANY, gender)} onChange={() => this.setState({ gender: GENDER_ANY })} />
              Any
            </label>
            <label className="radio-inline">
              <input type="radio" name="gender" data-id="genderMale"
                checked={isChecked(GENDER_MALE, gender)} onChange={() => this.setState({ gender: GENDER_MALE })} />
              Male
            </label>
            <label className="radio-inline">
              <input type="radio" name="gender" data-id="genderFemale"
                checked={isChecked(GENDER_FEMALE, gender)} onChange={() => this.setState({ gender: GENDER_FEMALE })} />
              Female
            </label>
          </div>

          <button type="button" className="btn btn-default" data-id="buttonReset"
            onClick={onReset}>
            Reset
          </button>
          <button type="submit" className="btn btn-primary" data-id="buttonFilter">
            Filter
          </button>

        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onSetUserPreferences: (userPreferences) => dispatch(setUserPreferences(userPreferences))
})

export default connect(
  null,
  mapDispatchToProps
)(UserPreferences)
