import React, { useEffect } from 'react';
/* import axios from 'axios'; */
import { useDispatch, useSelector } from 'react-redux';
import { /* setMovies, */ fetchMovies } from '../redux/actions/movieActions';
import MovieComponent from './MovieComponent';

function MovieListing() {
	const movies = useSelector((state) => state);
	const dispatch = useDispatch();
	console.log('Movies ', movies);

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
