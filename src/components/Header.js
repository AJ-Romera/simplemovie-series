import React from 'react';
import styled from '@emotion/styled';

const FixedHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 0;
`;

const H1 = styled.h1`
	margin-bottom: 0;
	text-transform: uppercase;
`;

function Header() {
	return (
		<FixedHeader>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M15.535 3.515L7.05005 12L15.535 20.485L16.95 19.071L9.87805 12L16.95 4.929L15.535 3.515Z'
					fill='#2E3A59'
				></path>
			</svg>
			<H1>Movies</H1>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M18.677 19.607L12.962 13.891C10.4196 15.6985 6.91642 15.2564 4.90285 12.8739C2.88929 10.4915 3.03714 6.96361 5.24298 4.75802C7.44824 2.55147 10.9765 2.40298 13.3594 4.41644C15.7422 6.42989 16.1846 9.93347 14.377 12.476L20.092 18.192L18.678 19.606L18.677 19.607ZM9.48498 5.00001C7.58868 4.99958 5.95267 6.3307 5.56745 8.18745C5.18224 10.0442 6.15369 11.9163 7.89366 12.6703C9.63362 13.4242 11.6639 12.8529 12.7552 11.3021C13.8466 9.75129 13.699 7.64734 12.402 6.26402L13.007 6.86402L12.325 6.18402L12.313 6.17202C11.5648 5.4192 10.5464 4.99715 9.48498 5.00001Z'
					fill='#2E3A59'
				></path>
			</svg>
		</FixedHeader>
	);
}

export default Header;
