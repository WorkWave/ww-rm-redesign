import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
	bar: {
		background: theme.white,
		padding: '1rem',
	},
	numbers: {
		fontSize: '14px',
		fontWeight: 600,
		color: theme.workwaveBlue,
		margin: '0 .75rem',
		transition: 'all .5s',
		'&:hover': {
			color: '#2F7FC1',
		},
	},
}));

export const ResourceBar = ({ link, sales, service }) => {
	const classes = useStyles();
	const sm = useMediaQuery('(max-width: 630px)');

	return (
		<div className={classes.bar}>
			<Container fixed>
				<Grid
					container
					direction={sm ? 'column' : 'row'}
					justifyContent={sm ? 'center' : 'flex-end'}
					alignItems='center'>
					<a
						href='https://marketplace.workwave.com'
						target='_blank'
						rel='noopener'
						style={{ textDecoration: 'none' }}>
						<Typography className={classes.numbers}>
							<FontAwesomeIcon icon={['fad', 'shopping-cart']} /> {link}
						</Typography>
					</a>
					<a href='tel: 866-794-1658' style={{ textDecoration: 'none' }}>
						<Typography className={classes.numbers}>
							<FontAwesomeIcon icon={['fad', 'phone-alt']} /> Sales: {sales}
						</Typography>
					</a>
					<a href='tel:  800-762-0301' style={{ textDecoration: 'none' }}>
						<Typography className={classes.numbers}>
							<FontAwesomeIcon icon={['fad', 'phone-alt']} /> Support: {service}
						</Typography>
					</a>
				</Grid>
			</Container>
		</div>
	);
};
