import counterReducer from './counter'
import loggedReducer from './isLogged'
import objectReducer from './objectReducers'
import {combineReducers} from 'redux'
import PlacesReducers from './PlacesReducers'
import FavPRaduser from './FavPReducer'
const allReducers = combineReducers({
    counterReducer,
    loggedReducer,
    objectReducer,
    PlacesReducers,
    FavPRaduser 
})

export default allReducers