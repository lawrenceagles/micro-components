import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Flex from './components/Flex';
import Text from './components/Text';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Flex bg={'secondary'} p={6} mx={6} my={4}>
				<Text textAlign="center">
					This is a tomato box, with responsive width, some padding, and margin bottom
				</Text>
			</Flex>

			<Flex bg={'dirtyBrown'} p={6} mx={6} my={4}>
				<Text textAlign="center">
					This is a tomato box, with responsive width, some padding, and margin bottom
				</Text>
			</Flex>

			<Flex bg={'warning'} p={6} mx={6} my={4}>
				<Text textAlign="center">
					This is a tomato box, with responsive width, some padding, and margin bottom
				</Text>
			</Flex>

			<Flex bg={'lightBlue'} p={6} mx={6} my={4}>
				<Text textAlign="center">
					This is a tomato box, with responsive width, some padding, and margin bottom
				</Text>
			</Flex>
		</ThemeProvider>
	);
};

export default App;
