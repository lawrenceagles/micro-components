const baseTheme = {
	space: [ 4, 8, 12, 16, 32, 64, 128 ],
	fontSizes: [ 13, 16, 20, 24 ],
	fontWeights: [ 100, 200, 300, 400, 500, 600, 700, 800, 900 ],
	fonts: {
		serif: 'athelas, georgia, times, serif',
		sansSerif: 'helvetica neue", helvetica, ubuntu, roboto, noto, sans-serif'
	},
	borders: [ 0, '2px solid', '4px solid', '6px solid', '8px solid', '10px solid' ],
	radii: [ 0, 2, 4, 6, 8, 10, 12, 16 ],
	colors: {
		black: '#000000',
		lightBlue: '#1ecbe1',
		primary: '#1676e9',
		danger: '#e72918',
		dirtyBrown: '#d38a2c',
		success: '#6bc33c',
		warning: '#fff900',
		secondary: ' #777',
		silver: '#999',
		white: '#fff',
		transparent: 'transparent'
	}
};

const theme = {
	...baseTheme,
	buttons: {
		primary: {
			color: baseTheme.colors.white,
			backgroundColor: baseTheme.colors.primary
		},
		success: {
			color: baseTheme.colors.white,
			backgroundColor: baseTheme.colors.success
		},
		danger: {
			color: baseTheme.colors.white,
			backgroundColor: baseTheme.colors.danger
		}
	}
};

export default theme;
