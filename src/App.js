import Header from './components/Header';
import styled from '@emotion/styled';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieListing from './components/MovieListing';
import MovieDetails from './components/MovieDetails';

const AppContainer = styled.main`
	width: 80%;
	margin: 0 auto;
`;

function App() {
	return (
		<AppContainer>
			<Router>
				<Header />
				<Switch>
					<Route path='/' exact component={MovieListing} />
					<Route
						path='/movie/:imdbID'
						exact
						component={MovieDetails}
					/>
					<Route>404 not found</Route>
				</Switch>
			</Router>
		</AppContainer>
	);
}

export default App;
