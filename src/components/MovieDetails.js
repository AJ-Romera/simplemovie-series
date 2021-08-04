import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedMovie } from '../redux/actions/movieActions';

function MovieDetails() {
	const movie = useSelector((state) => state.movie);
	const { imdbID } = useParams();
	console.log(movie);
	const dispatch = useDispatch();

	const fetchMovieDetail = async () => {
		const response = await axios
			.get(`https://www.omdbapi.com/?apikey=1d046177&i=${imdbID}`)
			.catch((err) => {
				console.log('Err ', err);
			});
		dispatch(selectedMovie(response.data));
	};

	return (
		<div>
			<h1>MovieDetails</h1>
		</div>
	);
}

export default MovieDetails;
