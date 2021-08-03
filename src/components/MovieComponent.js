import React from 'react';
import { useSelector } from 'react-redux';

function MovieComponent() {
	const movies = useSelector((state) => state.allMovies.movies);
	/* const { imdbID, Title } = movies[0]; */
	return (
		<div>
			{/* <header>{Title}</header>
			<p>{imdbID}</p> */}
		</div>
	);
}

export default MovieComponent;
