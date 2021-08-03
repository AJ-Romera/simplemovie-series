import { ActionTypes } from '../types/action-types';

const initialState = {
	movies: [
		{
			Title: 'Supernatural',
			Year: '2005–2020',
			Rated: 'TV-14',
			Released: '13 Sep 2005',
			Runtime: '44 min',
			Genre: 'Drama, Fantasy, Horror',
			Director: 'N/A',
			Writer: 'Eric Kripke',
			Actors: 'Jared Padalecki, Jensen Ackles, Jim Beaver',
			Plot: "Two brothers follow their father's footsteps as hunters, fighting evil supernatural beings of many kinds, including monsters, demons and gods that roam the earth.",
			Language: 'English',
			Country: 'United States, Canada',
			Awards: 'Nominated for 3 Primetime Emmys. 37 wins & 127 nominations total',
			Poster: 'https://m.media-amazon.com/images/M/MV5BNzRmZWJhNjUtY2ZkYy00N2MyLWJmNTktOTAwY2VkODVmOGY3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
			Ratings: [
				{
					Source: 'Internet Movie Database',
					Value: '8.4/10',
				},
			],
			Metascore: 'N/A',
			imdbRating: '8.4',
			imdbVotes: '401,412',
			imdbID: 'tt0460681',
			Type: 'series',
			totalSeasons: '15',
			Response: 'True',
		},
	],
};

export const movieReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_MOVIES:
			return state;

		default:
			return state;
	}
};
