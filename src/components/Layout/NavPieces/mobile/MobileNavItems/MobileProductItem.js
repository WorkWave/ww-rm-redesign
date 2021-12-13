import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, MenuItem, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
	link: {
		textDecoration: 'none',
		color: theme.workwaveBlue,
	},
	mobileProductLink: {
		fontSize: '1.25rem',
		fontWeight: '500',
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.02rem',
		},
	},
	item: {
		'&:hover': {
			background: grey[200],
		},
		'&:last-of-type': {
			marginBottom: '1rem',
		},
	}
}));

export const MobileProductItem = ({ link, closeNav, index }) => {
	const classes = useStyles();
	const xs = useMediaQuery('(max-width: 480px)');
	return (
		<Grid item xs={6} key={index} className={classes.item}>
			<a
				href={link.slug.current}
				className={classes.link}
				style={{ textDecoration: 'none' }}
				target='_blank'
				rel='noopener'>
				<Typography
				  className={classes.mobileProductLink}
					onMouseUp={(e) => closeNav(e)}>
					<span>{link.mainName} </span>{' '}
					{link.secondaryName && (
						<span style={{ color: '#2F7FC1', marginLeft: '0px' }}>
							{link.secondaryName}
						</span>
					)}
				</Typography>
				<Typography
					variant='body2'
					style={{
						textDecoration: 'none',
						color: '#6F6D71',
						// marginLeft: xs ? null : '1rem',
						// marginTop: '-.8rem',
					}}>
					{link.description}
				</Typography>
			</a>
		</Grid>
	);
};
