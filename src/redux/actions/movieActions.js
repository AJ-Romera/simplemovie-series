import omdbApi from '../../apis/ombdApi';
import { ActionTypes } from '../types/action-types';

export const fetchMovies = () => async (dispatch) => {
	const response = await omdbApi.get(`/?apikey=1d046177&s=avengers`);
	dispatch({ type: ActionTypes.FETCH_MOVIES, payload: response.data });
};

export const fetchMovie = (imdbID) => async (dispatch) => {
	const response = await omdbApi.get(`/?apikey=1d046177&i=${imdbID}`);
	dispatch({ type: ActionTypes.SELECTED_MOVIE, payload: response.data });
};

export const setMovies = (movies) => {
	return {
		type: ActionTypes.SET_MOVIES,
		payload: movies,
	};
};

export const selectedMovie = (movie) => {
	return {
		type: ActionTypes.SELECTED_MOVIE,
		payload: movie,
	};
};

export const removeSelectedMovie = () => {
	return {
		type: ActionTypes.REMOVE_SELECTED_MOVIE,
	};
};
