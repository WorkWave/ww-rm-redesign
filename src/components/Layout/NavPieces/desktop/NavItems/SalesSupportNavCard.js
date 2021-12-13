import React from 'react';
import { Link, navigate } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	card: {
		color: theme.workwaveBlue,
		height: '100%',
		width: '100%',
		textAlign: 'center',
		margin: '0 1rem',
		padding: '2rem 0',
		transition: 'all .5s',
	},
}));

export const SalesSupportNavCard = ({
	cardContent,
	selected,
	handleHover,
	setSelected,
	handleClick,
}) => {
	const { description, faIcon, name } = cardContent;
	const classes = useStyles();

	return (
		<Grid
			container
			item
			xs={6}
			alignItems='center'
			justifyContent='center'
			style={{ marginBottom: '2rem' }}>
			<Card
				className={classes.card}
				onMouseOver={(e) => handleHover(e)}
				onMouseLeave={(e) => setSelected(null)}
				onClick={(e) => handleClick(e)}
				name={name}
				elevation={3}
				style={{
					cursor: 'pointer',
					color: name === selected ? '#2F7FC1' : '#002D5C',
				}}>
				<FontAwesomeIcon
					onMouseOver={(e) => handleHover(e)}
					name={name}
					icon={['fad', faIcon]}
					style={{
						height: '20px',
						width: '20px',
						marginTop: '.5px',
						marginRight: '.5px',
					}}
				/>
				<Typography
					onMouseOver={(e) => handleHover(e)}
					name={name}
					variant='h5'
					style={{ fontWeight: 700 }}>
					{name}
				</Typography>
				<Typography
					onMouseOver={(e) => handleHover(e)}
					name={name}
					variant='body2'>
					{description}
				</Typography>
			</Card>
		</Grid>
	);
};
