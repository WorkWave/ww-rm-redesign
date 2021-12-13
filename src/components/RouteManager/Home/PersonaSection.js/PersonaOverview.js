import React from 'react';

import { GatsbyImage } from 'gatsby-plugin-image';

import { Grid, Container, Typography, makeStyles } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import check from './img/check.png';

const useStyles = makeStyles((theme) => ({
	text: {
		color: theme.workwaveBlue,
	},
	bullets: {
		fontWeight: 400,
		lineHeight: '32px',
	},
}));

export const PersonaOverview = ({ selectedCard, persona }) => {
	const classes = useStyles();
	return (
		selectedCard === persona.personaTitle && (
			<Grid
				style={{ marginTop: '4rem' }}
				container
				spacing={3}
				direction='row'
				justifyContent='space-between'
				alignItems='center'>
				<Grid item xs={12} md={6} className={classes.text}>
					<Typography variant='h5' style={{ fontWeight: 500 }}>
						{selectedCard}
					</Typography>
					<Typography variant='h3' style={{ fontWeight: 700 }}>
						{persona.personaOverview.header}{' '}
					</Typography>
					<ul style={{ listStyle: 'none', padding: 0 }}>
						{persona.personaOverview.bullets.map((bullet, index) => (
							<li key={index}>
								<Typography variant='body1' className={classes.bullets}>
									<img
										src={check}
										alt='check'
										style={{ marginRight: '.5rem' }}
									/>
									{bullet}
								</Typography>
							</li>
						))}
					</ul>
				</Grid>
				<Grid
					container
					alignItems='center'
					justifyContent='center'
					item
					xs={12}
					md={6}>
					<GatsbyImage
						image={
							persona.personaOverview.personaOverviewImage?.asset
								?.gatsbyImageData
						}
						style={{ borderRadius: '16px' }}
						alt='persona image'
					/>
				</Grid>
			</Grid>
		)
	);
};
