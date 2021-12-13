import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/core/styles';
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
	MenuItem,
	Grid,
	Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { FaMobileNavItem } from './MobileNavItems/FaMobileNavItem';
import { MobileProductItem } from './MobileNavItems/MobileProductItem';
import { MobileSalesSupportItem } from './MobileNavItems/MobileSalesSupportItem';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	heading: {
		fontSize: '1.25rem',
		fontWeight: 500,
		color: theme.white,
	},
	summary: {
		background: theme.workwaveBlue,
		borderBottom: `1px ${theme.white} solid`,
		'& .MuiAccordionSummary-content': {
			margin: `15px 0`,
		},
	},

	link: {
		textDecoration: 'none',
		color: theme.workwaveBlue,
	},
	paper: {
		boxShadow: 'none',
	},
}));

export const MobileNavLink = ({ header, links, icon, closeNav }) => {
	const classes = useStyles();
	const [industryLinks, setIndustryLinks] = useState([]);

	useEffect(() => {
		header === 'industries' && setIndustryLinks(links.slice(0, 9));
	}, [links]);

	return (
		<div className={classes.root}>
			<Accordion elevation={0}>
				<AccordionSummary
					className={classes.summary}
					expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
					aria-controls='panel1a-content'
					id='panel1a-header'>
					<Grid container alignItems='center'>
						<FontAwesomeIcon
							icon={['fad', icon]}
							style={{
								marginRight: '.5rem',
								fontSize: '1.25rem',
								color: 'white',
							}}
						/>
						<Typography className={classes.heading}>
							{header[0].toUpperCase() + header.slice(1)}
						</Typography>
					</Grid>
				</AccordionSummary>
				<AccordionDetails style={{ paddingBottom: '8px' }}>
					<Grid
						container
						direction={header === 'products' ? 'row' : 'column'}
						spacing={header === 'products' ? 2 : 0}>
						{industryLinks.length ? (
							<>
								{industryLinks.map((link, index) => (
									<FaMobileNavItem
										link={link}
										closeNav={closeNav}
										index={index}
									/>
								))}
								<Link
									to={`/${industryLinks[0].type}`}
									style={{ textDecoration: 'none' }}>
									<Button variant='contained' color='primary' fullWidth>
										ALL INDUSTRIES
									</Button>
								</Link>
							</>
						) : (
							links.map((link, index) =>
								['products'].includes(link.type) ? (
									<MobileProductItem
										link={link}
										index={index}
										closeNav={closeNav}
									/>
								) : ['sales', 'support'].includes(link.type) ? (
									<MobileSalesSupportItem
										link={link}
										index={index}
										closeNav={closeNav}
									/>
								) : (
									<FaMobileNavItem
										link={link}
										closeNav={closeNav}
										index={index}
									/>
								)
							)
						)}
					</Grid>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};
