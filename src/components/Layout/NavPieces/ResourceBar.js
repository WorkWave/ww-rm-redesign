import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { ResourceLink } from './ResourceBarPieces/ResourceLink';

const useStyles = makeStyles((theme) => ({
	bar: {
		background: theme.white,
		padding: '1rem',
	},
	numbers: {
		fontSize: '14px',
		fontWeight: 600,
		color: theme.workwaveBlue,
		marginRight: '1rem',
		transition: 'all .5s',
		'&:hover': {
			color: '#2F7FC1',
		},
	},
}));

export const ResourceBar = ({
	mktplcLink,
	product,
	company,
	sales,
	support,
	partner,
}) => {
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
					<ResourceLink items={product} />
					<ResourceLink items={company} />
					<ResourceLink items={sales} />
					<ResourceLink items={support} />
					<a
						href={partner?.slug?.current}
						target='_blank'
						rel='noopener'
						style={{ textDecoration: 'none' }}>
						<Typography className={classes.numbers}>
							{partner?.title}
						</Typography>
					</a>

					<a
						href='https://marketplace.workwave.com'
						target='_blank'
						rel='noopener'
						style={{ textDecoration: 'none' }}>
						<Typography className={classes.numbers}>
							<FontAwesomeIcon icon={['fad', 'shopping-cart']} /> {mktplcLink}
						</Typography>
					</a>
				</Grid>
			</Container>
		</div>
	);
};
