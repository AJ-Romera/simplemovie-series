import { combineReducers } from 'redux';
import { movieReducer, SelectedMovieReducer } from './movieReducer';

const reducers = combineReducers({
	allMovies: movieReducer,
	Movie: SelectedMovieReducer,
});

export default reducers;
