import React, { useState, useEffect, forwardRef } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from 'react-material-ui-carousel';
import ReactPlayer from 'react-player/wistia';

import {
	Grid,
	Typography,
	Card,
	CardMedia,
	CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	card: {
		position: 'relative',
		borderRadius: '.25rem',
		backgroundColor: '#fff',
		padding: '0px',
	},
	cardImgTop: {
		width: '100%',
		[theme.breakpoints.up('xs')]: {
			minHeight: '300px',
			height: '80%',
		},
		[theme.breakpoints.up('sm')]: {
			minHeight: '400px',
			height: '80%',
		},
	},
	quote: {
		color: theme.workwaveBlue,
		fontSize: 40,
		marginLeft: '1rem',
		[theme.breakpoints.only('md')]: {
			fontSize: 24,
		},
		[theme.breakpoints.down('sm')]: {
			marginLeft: '.5rem',
			fontSize: 20,
		},
		[theme.breakpoints.down('xs')]: {
			marginLeft: '.5rem',
			fontSize: 18,
		},
	},
	author: {
		color: '#5A7184',
		fontSize: 20,
		marginTop: 10,
		marginLeft: '3rem',
		[theme.breakpoints.down('sm')]: {
			marginLeft: '1.8rem',
			fontSize: 18,
		},
		[theme.breakpoints.down('xs')]: {
			marginLeft: '.5rem',
			fontSize: 14,
		},
	},
	beginQuote: {
		color: theme.workwaveBlue,
		transform: 'scaleX(-1)',
		height: '32px',
		width: '32px !important',
		[theme.breakpoints.down('sm')]: {
			height: '22px',
			width: '22px !important',
		},
		[theme.breakpoints.down('xs')]: {
			height: '18px',
			width: '18px !important',
		},
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
}));

const Slide = ({ slide }) => {
	const classes = useStyles();

	return (
		<>
			{slide.videoVariant ? (
				<div className={classes.playerWrapper}>
					<ReactPlayer
						url={slide.videoVariant}
						className={classes.reactPlayer}
						height='100%'
						width='100%'
						controls={true}
					/>
				</div>
			) : (
				<Card className={classes.card}>
					<CardMedia>
						<GatsbyImage
							image={slide.image?.asset?.gatsbyImageData}
							className={classes.cardImgTop}
						/>
					</CardMedia>
					<CardContent>
						<Grid item style={{ display: 'flex' }}>
							<FontAwesomeIcon
								icon={['fad', 'quote-right']}
								className={classes.beginQuote}
							/>
							<Typography className={classes.quote}>
								{slide.testimonialText}
							</Typography>
						</Grid>
						<Typography className={classes.author}>
							{slide.nameAndTitle} - {slide.company}
						</Typography>
					</CardContent>
				</Card>
			)}
		</>
	);
};

export const TestimonialCarousel = forwardRef(
	({ carouselTestimonialArray }, ref) => {
		const [carouselOptions, setCarouselOptions] = useState({
			autoPlay: true,
			animation: 'slide',
			indicators: true,
			timeout: 500,
			interval: 7000,
			navButtonsAlwaysVisible: false,
			navButtonsAlwaysInvisible: true,
		});

		useEffect(() => {
			if (carouselTestimonialArray.length === 1) {
				setCarouselOptions({
					...carouselOptions,
					navButtonsAlwaysInvisible: true,
					indicators: true,
				});
			} else {
				setCarouselOptions({
					...carouselOptions,
					navButtonsAlwaysVisible: true,
				});
			}
		}, [carouselTestimonialArray]);

		return (
			<>
				<div
					style={{
						marginTop: '35px',
						color: '#494949',
						height: '70%',
						width: '80%',
					}}>
					<Carousel
						style={{ height: '100%', width: '100%' }}
						autoPlay={carouselOptions.autoPlay}
						animation={carouselOptions.animation}
						indicators={carouselOptions.indicators}
						interval={carouselOptions.interval}
						timeout={carouselOptions.timeout}
						navButtonsAlwaysVisible={carouselOptions.navButtonsAlwaysVisible}
						navButtonsAlwaysInvisible={
							carouselOptions.navButtonsAlwaysInvisible
						}
						navButtonsProps={{
							style: {
								backgroundColor: '#989796',
								marginBottom: '5rem',
							},
						}}>
						{carouselTestimonialArray.map((slide, index) => (
							<Slide slide={slide} key={index} />
						))}
					</Carousel>
					<div ref={ref} />
				</div>
			</>
		);
	}
);
