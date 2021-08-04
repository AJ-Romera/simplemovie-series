import { ActionTypes } from '../types/action-types';

const initialState = {
	movies: [],
};

export const movieReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_MOVIES:
			return { ...state, movies: payload };

		default:
			return state;
	}
};

export const SelectedMovieReducer = (state = {}, { type, payload }) => {
	switch (type) {
		case ActionTypes.SELECTED_MOVIE:
			return { ...state, ...payload };

		default:
			return state;
	}
};
