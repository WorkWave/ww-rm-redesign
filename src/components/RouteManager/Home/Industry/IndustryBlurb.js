import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PortableText from 'react-portable-text';

import { Grid, Typography, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
	fontColor: {
		color: theme.workwaveBlue,
	},
	header: {
		fontWeight: 550,
		color: theme.workwaveBlue,
	},
	body: {
		marginTop: '.5rem',
		color: '#6F6D71',
		lineHeight: '37.4px',
		fontWeight: 400,
		fontSize: '1.3rem',
		fontFamily: ['Roboto', 'sans-serif'].join(),
	},
	icon: {
		border: `1px solid #F1F2F5`,
		background: '#F1F2F5',
		borderRadius: '15px',
		padding: '.5rem',
		maxHeight: '50px',
		maxWidth: '50px',
		marginRight: '12px',
	},
	text: {
		color: theme.workwaveBlue,
		marginBottom: '1rem',
		[theme.breakpoints.down('md')]: {
			textAlign: 'center',
		},
	},
}));

export const IndustryBlurb = ({ blurb }) => {
	const med = useMediaQuery('(max-width: 960px)');
	const classes = useStyles();
	return (
		<div style={{ padding: '1rem 0' }}>
			<Grid
				container
				alignItems='flex-start'
				justifyContent={med ? 'center' : 'flex-start'}
				direction='row'>
				<Grid item xs={1} style={{ maxWidth: '14%' }}>
					<div
						className={classes.icon}
						style={{
							color:
								blurb.icon === 'hand-holding-seedling'
									? '#479659'
									: blurb.icon === 'concierge-bell'
									? '#008ad1'
									: '#002d5c',
						}}>
						<FontAwesomeIcon
							icon={['fad', blurb.icon]}
							style={{ height: '30px', width: '30px' }}
						/>
					</div>
				</Grid>

				<Grid item xs={8} style={{ marginTop: '.5rem' }}>
					{' '}
					<Typography variant='h5' className={classes.header}>
						{blurb.header}
					</Typography>
					<Typography variant='body1' className={classes.body}>
						{blurb.body}
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
};
