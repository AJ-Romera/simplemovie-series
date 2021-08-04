import axios from 'axios';
import { ActionTypes } from '../types/action-types';

export const fetchMovies = async () => {
	const response = await axios.get(`/?apikey=1d046177&s=avengers`);
	console.log(response);

	return {
		type: ActionTypes.SET_MOVIES,
		payload: response,
	};
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
