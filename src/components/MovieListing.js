import React from 'react';
import { useSelector } from 'react-redux';
import MovieComponent from './MovieComponent';

function MovieListing() {
	const movies = useSelector((state) => state);
	console.log(movies);
	return (
		<div>
			<MovieComponent />
		</div>
	);
}

export default MovieListing;
