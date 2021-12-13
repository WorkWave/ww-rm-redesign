import React, { forwardRef } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPlayer from 'react-player/wistia';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	quote: {
		color: '#373F41',
		fontSize: '1.75rem',
		lineHeight: '38px',
		fontFamily: ['Roboto', 'sans-serif'].join(),
		fontWeight: 400,
		[theme.breakpoints.only('md')]: {
			fontSize: 20,
			lineHeight: '24px',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: 24,
		},
	},
	heading: {
		marginBottom: '3rem',
		fontWeight: 700,
		color: theme.workwaveBlue,
	},
	author: {
		fontSize: 18,
		marginTop: '1rem',
		fontWeight: 700,
		color: theme.workwaveBlue,
	},
	beginQuote: {
		color: theme.workwaveBlue,
		transform: 'scaleX(-1)',
	},
	playerWrapper: {
		position: 'relative',
		paddingTop: '56.25%',
		minHeight: '100%',
		minWidth: '100%',
		border: '1px solid #d8dee0',
	},
	reactPlayer: {
		position: 'absolute',
		top: 0,
		left: 0,
	},
	testimonialRight: {
		marginLeft: '-10rem',
		zIndex: 4,
	},
	imageLeft: {
		marginTop: '3rem',
		// alignSelf: 'flex-start',
		// justifySelf: 'flex-end',
		// position: 'relative',
		// right: 'calc(-35vw + 50%)',
		// [theme.breakpoints.down('lg')]: {
		// 	marginTop: '-2rem',
		// 	right: 'calc(-40vw + 50%)',
		// },
		// [theme.breakpoints.down('md')]: {
		// 	marginTop: '-2rem',
		// 	right: 'calc(-45vw + 50%)',
		// },
	},
}));

export const Testimonials = forwardRef(
	({ testimonial, testimonialHeader, index, selected }, ref) => {
		const { company, image, nameAndTitle, testimonialText, videoVariant } =
			testimonial;
		const classes = useStyles();

		return (
			selected === index && (
				<>
					<Grid
						container
						direction='row'
						justifyContent='space-evenly'
						alignItems='space-evenly'
						spacing={3}>
						{/* checks if there is a video instead of a text based testimonial */}
						{videoVariant ? (
							<Grid xs={8}>
								<div className={classes.playerWrapper}>
									<ReactPlayer
										url={videoVariant}
										className={classes.reactPlayer}
										height='100%'
										width='100%'
										controls={true}
									/>
								</div>
							</Grid>
						) : (
							<>
								{' '}
								<Grid
									item
									container
									direction='column'
									justifyContent='flex-end'
									alignItems='flex-start'
									className={classes.imageLeft}
									xs={12}
									md={7}>
									<GatsbyImage
										image={image?.asset?.gatsbyImageData}
										alt='testimonial'
										style={{ borderRadius: '16px' }}
									/>
								</Grid>
								<Grid item md={5} className={classes.testimonialRight}>
									<Paper
										style={{ padding: '2rem 1rem', borderRadius: '16px' }}
										elevation={4}>
										<FontAwesomeIcon
											icon={['fad', 'quote-right']}
											className={classes.beginQuote}
											style={{ height: '32px', width: '32px' }}
										/>
										<Grid item style={{ display: 'flex' }}>
											<Typography className={classes.quote}>
												{testimonialText}
											</Typography>
										</Grid>
										<Typography className={classes.author}>
											- {nameAndTitle} {company}
										</Typography>
									</Paper>
								</Grid>
							</>
						)}
						<div ref={ref} />
					</Grid>
				</>
			)
		);
	}
);
