import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie, removeSelectedMovie } from '../redux/actions/movieActions';

function MovieDetails() {
	const movie = useSelector((state) => state.movie);
	const { imdbID } = useParams();
	const dispatch = useDispatch();
	console.log(movie);

	useEffect(() => {
		if (imdbID && imdbID !== '') dispatch(fetchMovie(imdbID));
		return () => {
			dispatch(removeSelectedMovie());
		};
	}, [imdbID]);

	return (
		<div>
			{Object.keys(movie).length === 0 ? (
				<div>...Loading</div>
			) : (
				<h1>Ok</h1>
			)}
		</div>
	);
}

export default MovieDetails;
