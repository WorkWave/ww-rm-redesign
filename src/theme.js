import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createTheme({
	palette: {
		primary: {
			main: '#002D5C',
		},
		secondary: {
			main: '#008AD1',
		},
	},
	white: '#FFFFFF',
	black: '#000000',
	workwaveBlue: '#002D5C',
	pestpacBlue: '#1E488A',
	serviceBlue: '#008AD1',
	servmanBlue: '#008AD1',
	routeManagerGreen: '#8CC82D',
	gpsBlue: '#21C2E6',
	workwaveOrange: '#DE6426',
	ifsPurple: '#873E8D',
	darkGray: '#33383B',
	mediumGray: '#5F6972',
	mediumLightGray: '#8d8d8d',
	lightGray: '#ECECEE',
	superlightGray: '#F6F9FC',
	borderLightGray: 'rgba(207, 215, 223, 0.25)',
	typography: {
		fontFamily: ['Poppins', 'sans-serif'].join(','),
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				body: {
					backgroundColor: '#FFFFFF',
				},
			},
		},
		// MuiContainer: {
		// 	disableGutters: false,
		// },
		MuiCard: {
			root: {
				background: '#fff',
				// boxShadow:
				// 	'0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3)',
				padding: '15px',
				borderRadius: '4px',
			},
		},

		MuiButton: {
			contained: {
				root: {
					borderRadius: '4px',
					boxShadow:
						'0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08)',
					transition: 'all 0.15s ease',
					fontWeight: 500,
					textTransform: 'uppercase',
					opacity: 1,
					whiteSpace: 'nowrap',
				},
			},
		},
	},
});

theme = responsiveFontSizes(theme);

export default theme;
