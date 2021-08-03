import Header from './components/Header';
import styled from '@emotion/styled';

const AppContainer = styled.main`
	width: 80%;
	margin: 0 auto;
`;

function App() {
	return (
		<AppContainer>
			<Header />
		</AppContainer>
	);
}

export default App;
