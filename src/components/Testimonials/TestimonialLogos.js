import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: '3rem',
	},
	testimonialLogo: {
		cursor: 'pointer',
		maxWidth: '60%',
		marginLeft: '2rem',
	},
}));

export const TestimonialLogos = ({
	image,
	company,
	selected,
	index,
	handleTestimonialClick,
}) => {
	const classes = useStyles();
	return (
		<Grid item md={3} xs={12} onClick={(e) => handleTestimonialClick(e, index)}>
			<GatsbyImage
				image={image}
				alt={company}
				className={classes.testimonialLogo}
				imgStyle={{
					filter: selected === index ? 'none' : 'grayscale(100%)',
				}}
			/>
		</Grid>
	);
};
