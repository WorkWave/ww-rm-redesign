import React, { useEffect } from 'react';

import { Link } from 'gatsby';
import PortableText from 'react-portable-text';

import { makeStyles } from '@material-ui/core/styles';
import { MenuItem, Typography, Grid } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
	link: {
		color: theme.workwaveBlue,
		textDecoration: 'none',
		fontWeight: 600,
		paddingLeft: 0,
		margin: 0,
	},
	header: {
		fontWeight: 600,
		color: '#595959',
	},
	item: {
		margin: '6px 0',
		'&:hover': {
			background: grey[200],
		},
	},
}));

export const ProductNavItems = ({ items, rowWidth }) => {
	const classes = useStyles();

	// useEffect(() => {
	// 	setTimeout(function () {
	// 		debugger;
	// 	}, 5000);
	// }, []);

	return (
		<>
			{items.map((item, index) => (
				<Grid item xs={rowWidth} key={index} className={classes.item}>
					<a
						href={item.slug.current}
						rel='noopener'
						target='_blank'
						style={{ textDecoration: 'none' }}>
						{/* <MenuItem style={{ paddingLeft: 0 }}> */}
						<Typography className={classes.link}>
							<span>{item.mainName}</span>{' '}
							{item.secondaryName && (
								<span style={{ color: '#2F7FC1' }}>{item.secondaryName}</span>
							)}
						</Typography>
						{/* </MenuItem> */}
						<Typography
							variant='body2'
							style={{ textDecoration: 'none', color: '#6F6D71' }}>
							{item.description}
						</Typography>
					</a>
				</Grid>
			))}
		</>
	);
};
