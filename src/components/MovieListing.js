import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import MovieComponent from './MovieComponent';

function MovieListing() {
	const movies = useSelector((state) => state);
	console.log(movies);

	const fetchMovies = async () => {
		const response = await axios
			.get('https://www.omdbapi.com/?apikey=1d046177&s=avengers')
			.catch((err) => {
				console.log('Err ', err);
			});
		console.table(response.data);
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	return (
		<div>
			<MovieComponent />
		</div>
	);
}

export default MovieListing;
