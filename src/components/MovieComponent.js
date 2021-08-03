import React from 'react';
import { useSelector } from 'react-redux';

function MovieComponent() {
	const movies = useSelector((state) => state);
	return (
		<div>
			<h1>MovieComponent</h1>
		</div>
	);
}

export default MovieComponent;
