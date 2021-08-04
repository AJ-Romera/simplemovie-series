import { combineReducers } from 'redux';
import { movieReducer, SelectedMovieReducer } from './movieReducer';

const reducers = combineReducers({
	allMovies: movieReducer,
	movie: SelectedMovieReducer,
});

export default reducers;
