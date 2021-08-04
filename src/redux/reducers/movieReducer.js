import { ActionTypes } from '../types/action-types';

export const movieReducer = (state = [], { type, payload }) => {
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
		case ActionTypes.REMOVE_SELECTED_MOVIE:
			return {};

		default:
			return state;
	}
};
