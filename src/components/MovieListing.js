import React, { useEffect } from 'react';
/* import axios from 'axios'; */
import { useDispatch, useSelector } from 'react-redux';
import { /* setMovies, */ fetchMovies } from '../redux/actions/movieActions';
import MovieComponent from './MovieComponent';

function MovieListing() {
	const movies = useSelector((state) => state);
	const dispatch = useDispatch();
	console.log('Movies ', movies);

	/* const fetchMovies = async () => {
		const response = await axios
			.get('https://www.omdbapi.com/?apikey=1d046177&s=avengers')
			.catch((err) => {
				console.log('Err ', err);
			});
		dispatch(setMovies(response.data));
	}; */

	useEffect(() => {
		dispatch(fetchMovies());
		//eslint-disable-next-line
	}, []);

	return (
		<div>
			<MovieComponent />
		</div>
	);
}

export default MovieListing;
