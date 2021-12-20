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

export const ResourceBar = ({ mktplcLink, nav, partner }) => {
	const classes = useStyles();
	const sm = useMediaQuery('(max-width: 630px)');

	console.log(nav.salesHeader, nav.supportHeader);

	return (
		<div className={classes.bar}>
			<Container fixed>
				<Grid
					container
					direction={sm ? 'column' : 'row'}
					justifyContent={sm ? 'center' : 'flex-end'}
					alignItems='center'>
					<ResourceLink
						header={nav.productLinks[0].type}
						links={nav.productLinks}
						calloutIcon={nav.productCalloutIcon}
						calloutTitle={nav.productCalloutTitle}
						calloutContent={nav._rawProductCalloutContent}
					/>
					<ResourceLink
						header={nav.companyLinks[0].type}
						links={nav.companyLinks}
						calloutIcon={nav.companyCalloutIcon}
						calloutTitle={nav.companyCalloutTitle}
						calloutContent={nav._rawCompanyCalloutContent}
					/>
					<ResourceLink
						header={nav.salesLinks[0].type}
						contentHeader={nav.salesHeader}
						links={nav.salesLinks}
					/>
					<ResourceLink
						header={nav.supportLinks[0].type}
						contentHeader={nav.supportHeader}
						links={nav.supportLinks}
					/>
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
