const initialState = {
  userPreferences: {
    ageMin: 18,
    ageMax: 90,
    gender: `any`
  },
  matches: {
    busy: false,
    error: false,
    data: {
      results: [],
      info: {}
    }
  }
}

export default initialState
