import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MovieComponent = () => {
	const movies = useSelector((state) => state.allMovies.movies.Search);
	console.log('Movies ', movies);

	const movieList = movies.map((movie) => {
		const { Title, Year, imdbID, Type, Poster } = movie;
		return (
			<div key={imdbID}>
				<Link to={`/movie/${imdbID}`}>
					<p>{Title}</p>
				</Link>
				<p>{Year}</p>
				<p>{imdbID}</p>
				<p>{Type}</p>
				<p>{Poster}</p>
			</div>
		);
	});

	return <div>{movieList}</div>;
};

export default MovieComponent;
