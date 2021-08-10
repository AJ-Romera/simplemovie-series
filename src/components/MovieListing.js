import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/actions/movieActions';
import MovieComponent from './MovieComponent';

function MovieListing() {
	const movies = useSelector((state) => state);
	const dispatch = useDispatch();
	console.log('Movie list ', movies);

	useEffect(() => {
		dispatch(fetchMovies());
		//eslint-disable-next-line
	}, []);

	return (
		<div>
			{movies.allMovies.movies ? <MovieComponent /> : 'Loading movies...'}
		</div>
	);
}

export default MovieListing;
