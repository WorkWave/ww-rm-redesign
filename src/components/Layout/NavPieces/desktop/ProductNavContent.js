import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import { NavCallout } from './NavItems/NavCallout';
import { ProductNavItems } from './NavItems/ProductNavItems';

const useStyles = makeStyles((theme) => ({
	header: {
		fontWeight: 600,
		color: '#595959',
	},
}));

export const ProductNavContent = ({
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
		(link) => link.category === 'Transportation & Logistics'
	);
	const additional = links.filter(
		(link) => link.category === 'Additional Solutions'
	);

	return (
		links && (
			<Grid container direction='row' spacing={2}>
				<Grid container item xs={6} spacing={1} direction='row'>
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
						<ProductNavItems items={field} rowWidth={6} />
					</Grid>
				</Grid>
				<Grid container item xs={3} spacing={1} direction='column'>
					<Grid container direction='row'>
						<Typography variant='h6' className={classes.header}>
							{transportation[0].category}
						</Typography>
					</Grid>
					<Grid
						container
						direction='row'
						spacing={1}
						alignItems='flex-start'
						justifyContent='flex-start'>
						<ProductNavItems items={transportation} rowWidth={12} />
					</Grid>
				</Grid>
				<Grid container item xs={3} spacing={1} direction='column'>
					<Grid container direction='row'>
						<Typography variant='h6' className={classes.header}>
							{additional[0].category}
						</Typography>
					</Grid>
					<Grid
						container
						direction='row'
						spacing={1}
						alignItems='flex-start'
						justifyContent='flex-start'>
						<ProductNavItems items={additional} rowWidth={12} />
					</Grid>
				</Grid>
				<NavCallout
					calloutIcon={calloutIcon}
					calloutTitle={calloutTitle}
					calloutContent={calloutContent}
				/>
			</Grid>
		)
	);
};
