import Flex from './components/Flex';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const App = (props) => {
	return (
		<ThemeProvider theme={theme}>
			<Flex width={1} bg={'red'}>
				This is a tomato box, with responsive width, some padding, and margin bottom
			</Flex>
		</ThemeProvider>
	);
};

export default App;
