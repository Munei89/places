
const PlacesReducers = (state = [], action) => {

  switch (action.type) {
    case 'SAVEPLACES':
      state = action.places;
      return state;
    default: return state
  }
}

export default PlacesReducers;