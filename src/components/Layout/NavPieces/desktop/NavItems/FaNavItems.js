import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/core/styles';
import { MenuItem, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	link: {
		color: theme.workwaveBlue,
		textDecoration: 'none',
		fontWeight: 600,
	},
	item: {
		padding: '.2rem 0',
	},
}));

export const FaNavItems = ({ items, rowWidth }) => {
	const classes = useStyles();
	return (
		<>
			{items.map((item, index) => (
				<Grid item xs={rowWidth} key={index} className={classes.item}>
					<Link to={`/${item.slug.current}`} style={{ textDecoration: 'none' }}>
						<MenuItem style={{ paddingLeft: 0 }}>
							<Grid container alignItems='center'>
								<FontAwesomeIcon
									icon={['fad', item.faIcon]}
									style={{
										height: '25px',
										width: '25px',
										marginRight: '5px',
										border: `1px solid #F1F2F5`,
										background: '#F1F2F5',
										borderRadius: '5px',
										padding: '3px',
										color:
											index % 2 === 0
												? '#002D5C'
												: index % 3 === 0
												? '#0F95A4'
												: index % 4 === 0
												? '#055291'
												: '#2A7ABC',
									}}
								/>{' '}
								<Typography className={classes.link}>{item.title}</Typography>
							</Grid>
						</MenuItem>
					</Link>
				</Grid>
			))}
		</>
	);
};
