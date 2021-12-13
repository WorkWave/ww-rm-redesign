import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import { NavCallout } from './NavItems/NavCallout';
import { FaNavItems } from './NavItems/FaNavItems';

const useStyles = makeStyles((theme) => ({
	link: {
		color: theme.workwaveBlue,
		textDecoration: 'none',
		fontWeight: 600,
	},
	header: {
		fontWeight: 600,
		color: '#595959',
		marginBottom: '.2rem',
	},
	item: {
		padding: '.2rem 0',
	},
}));

export const IndustryNavContent = ({
	links,
	calloutIcon,
	calloutTitle,
	calloutContent,
}) => {
	const classes = useStyles();

	const field = links.filter(
		(link) => link.category === 'Field Service Software'
	);
	const transportation = links.filter(
		(link) => link.category !== 'Field Service Software'
	);

	return (
		<Grid container direction='row' spacing={1}>
			<Grid container item xs={9} direction='row'>
				<Grid container direction='row'>
					<Typography variant='h6' className={classes.header}>
						{field[0].category}
					</Typography>
				</Grid>
				<Grid
					container
					spacing={1}
					direction='row'
					alignItems='flex-start'
					justifyContent='flex-start'>
					<FaNavItems items={field} rowWidth={4} />
				</Grid>
			</Grid>
			<Grid container item xs={3} spacing={1} direction='row'>
				{' '}
				<Grid container direction='row'>
					<Typography variant='h6' className={classes.header}>
						{transportation[0].category}
					</Typography>
				</Grid>
				<Grid
					container
					direction='row'
					alignItems='flex-start'
					justifyContent='flex-start'>
					<FaNavItems items={transportation} rowWidth={12} />
				</Grid>
			</Grid>
			<NavCallout
				calloutIcon={calloutIcon}
				calloutTitle={calloutTitle}
				calloutContent={calloutContent}
			/>
		</Grid>
	);
};
