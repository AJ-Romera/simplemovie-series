import React from 'react';
import { useSelector } from 'react-redux';

function MovieListing() {
	const movies = useSelector((state) => state);
	console.log(movies);
	return (
		<div>
			<h1>MovieListing</h1>
		</div>
	);
}

export default MovieListing;
