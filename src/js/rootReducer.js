import { combineReducers } from 'redux';

import movieSearchReducer from './components/MovieSearch/movieSearchReducer';
import movieDetailReducer from './components/MovieDetail/movieDetailReducer';

const rootReducer = combineReducers({
    movie: movieSearchReducer,
    movieInfo: movieDetailReducer
})

export default rootReducer;