import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectedMovie,
	removeSelectedMovie,
} from '../redux/actions/movieActions';

function MovieDetails() {
	const movie = useSelector((state) => state.movie);
	const { imdbID } = useParams();
	const dispatch = useDispatch();
	console.log(movie);

	const fetchMovieDetail = async () => {
		const response = await axios
			.get(`https://www.omdbapi.com/?apikey=1d046177&i=${imdbID}`)
			.catch((err) => {
				console.log('Err ', err);
			});
		dispatch(selectedMovie(response.data));
	};

	useEffect(() => {
		if (imdbID && imdbID !== '') fetchMovieDetail(imdbID);
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
