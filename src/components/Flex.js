import styled from 'styled-components';
import { space, color, layout, flex } from 'styled-system';

const Flex = styled.section(
	{
		boxSizing: 'border-box',
		minWidth: 0
	},
	flex,
	space,
	color,
	layout
);

export default Flex;
