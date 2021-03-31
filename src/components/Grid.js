import styled from 'styled-components';
import { grid, space, color, layout } from 'styled-system';

const Grid = styled.div(
	{
		boxSizing: 'border-box',
		width: 100,
		height: 100
	},
	grid,
	space,
	color,
	layout
);
export default Grid;
