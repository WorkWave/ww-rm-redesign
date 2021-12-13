import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PortableText from 'react-portable-text';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container } from '@material-ui/core';

import { WaveUpSVG } from '../../WaveSVGs/WaveUpSVG';

const useStyles = makeStyles((theme) => ({
	text: {
		color: theme.white,
		lineHeight: '.7',
		textAlign: 'center',
	},
	imgCont: {
		padding: '12rem 0',
		background: theme.workwaveBlue,

		// [theme.breakpoints.down('sm')]: {
		// 	paddingTop: '2rem',
		// 	paddingBottom: '1rem',
		// },
	},
	imgRight: {
		marginLeft: '-11rem',
		[theme.breakpoints.down('lg')]: {
			marginLeft: '-8rem',
			height: '560px',
		},
		[theme.breakpoints.down('md')]: {
			marginLeft: '-4rem',
			height: '380px',
		},
		[theme.breakpoints.down('sm')]: {
			marginLeft: '-8rem',
			height: '300px',
		},
	},
	star: {
		marginRight: '.5rem',
		color: '#FFCA43',
	},
	wave: {
		marginTop: '-8rem',
		[theme.breakpoints.down('lg')]: {
			marginTop: '-9rem',
		},
		[theme.breakpoints.down('md')]: {
			marginTop: '-8rem',
		},
		[theme.breakpoints.down('sm')]: {
			marginTop: '-7rem',
		},
	},
}));

export const Hero = ({ hero }) => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.imgCont}>
				<Container fixed>
					<Grid
						container
						direction='column'
						justify='center'
						alignItems='center'
						xs={12}>
						{hero._rawContent.map((content, index) => (
							<PortableText
								key={index}
								content={content}
								className={classes.text}
								serializers={{
									h3: ({ children }) => (
										<Typography
											variant='h3'
											style={{ lineHeight: 1.1, margin: '1rem 0' }}>
											{children}
										</Typography>
									),
									h4: ({ children }) => (
										<Typography
											variant='h4'
											style={{
												fontWeight: 400,
												lineHeight: '44px',
												textAlign: 'center',
												fontFamily: ['Roboto', 'sans-serif'].join(),
											}}>
											{children}
										</Typography>
									),
									h1: ({ children }) => {
										return (
											<Typography
												variant='h2'
												style={{ lineHeight: 0.8, margin: '.2rem 0' }}>
												{children}
											</Typography>
										);
									},
								}}
							/>
						))}{' '}
					</Grid>
				</Container>
			</div>
			<div className={classes.wave}>
				<WaveUpSVG height='213' width='100%' fill='white' />
			</div>
		</>
	);
};
