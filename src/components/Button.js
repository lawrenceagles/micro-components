// example Button with variants
import styled from 'styled-components';
import { variant, space, border, background } from 'styled-system';

const Button = styled('button')(
	{
		appearance: 'none',
		fontFamily: 'inherit'
	},
	space,
	border,
	background,
	variant({
		variants: {
			primary: {
				color: 'white',
				bg: 'primary'
			},
			secondary: {
				color: 'white',
				bg: 'secondary'
			}
		}
	})
);

export default Button;
