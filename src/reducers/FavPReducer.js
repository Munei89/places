
const FavPReducer = (state = [], action) => {

    switch (action.type) {
        case 'FAVOURITISE':
        state = action.fav;
        return state;
      default: return state
    }
  }
  
  export default FavPReducer;