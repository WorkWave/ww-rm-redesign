import React, { useContext, useRef, useEffect } from 'react';
import { Link } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Grid,
	Container,
	Toolbar,
	Button,
	Typography,
} from '@material-ui/core';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import { NavLink } from './desktop/NavLink';
import FormModalContext from '../../../context/FormModalContext';
import { MobileNav } from './mobile/MobileNav';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	appBar: {
		background: theme.white,
		color: theme.workwaveBlue,
		padding: '0 0',
		borderTop: `1.3px ${theme.lightGray} solid`,
		minHeight: '64px',
		display: 'flex',
		justifyContent: 'center',
	},
	partners: {
		color: theme.workwaveBlue,
		cursor: 'pointer',
		marginRight: '8px',
		height: '64px',
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		// marginTop: '12px',
		textDecoration: 'none',
		position: 'relative',
		transition: 'all .5s',
		'&:hover': {
			color: '#2F7FC1',
		},
	},
	cta: {
		fontSize: '20px',
		marginLeft: '10px',
		[theme.breakpoints.down('md')]: {
			fontSize: '16px',
		},
		'&:hover': {
			background: '#2F7FC1',
		},
	},
	img: {
		height: '3rem',
		marginTop: '.5rem',
		[theme.breakpoints.down('xs')]: {
			height: '2.5rem',
		},
	},
}));

export const Navbar = ({ nav, marketplace, salesNumber, serviceNumber }) => {
	const classes = useStyles();
	const { formModalOpen, handleModalClick, setFormModalOpen } =
		useContext(FormModalContext);

	const med = useMediaQuery('(max-width: 960px)');
	const sm = useMediaQuery('(max-width: 600px)');
	const xs = useMediaQuery('(max-width: 480px)');
	return (
		<>
			<AppBar position='sticky' className={classes.appBar} elevation={0}>
				<Toolbar disableGutters={true}>
					<Container className={classes.root} fixed>
						<Grid container direction='row' alignItems='center'>
							<Grid item xs={6} md={2}>
								<Link to='/'>
									<img
										src={nav.wwNavLogo.asset.url}
										className={classes.img}
										alt='logo'
									/>
								</Link>
							</Grid>
							<Grid
								item
								xs={6}
								md={10}
								container
								direction='row'
								alignItems='center'
								justifyContent='flex-end'>
								{med ? (
									<MobileNav
										nav={nav}
										handleModalClick={handleModalClick}
										mktplcLink={marketplace}
									/>
								) : (
									<>
										<NavLink
											header={nav.industryLinks[0].type}
											links={nav.industryLinks}
											calloutIcon={nav.industryCalloutFaIcon}
											calloutTitle={nav.industryCalloutTitle}
											calloutContent={nav._rawIndustryCalloutContent}
										/>
										<NavLink
											header={nav.productLinks[0].type}
											links={nav.productLinks}
											calloutIcon={nav.productCalloutIcon}
											calloutTitle={nav.productCalloutTitle}
											calloutContent={nav._rawProductCalloutContent}
										/>
										<NavLink
											header={nav.companyLinks[0].type}
											links={nav.companyLinks}
											calloutIcon={nav.companyCalloutIcon}
											calloutTitle={nav.companyCalloutTitle}
											calloutContent={nav._rawCompanyCalloutContent}
										/>
										<NavLink
											header={nav.salesLinks[0].type}
											contentHeader={nav.salesHeader}
											links={nav.salesLinks}
											handleModalClick={handleModalClick}
										/>
										<NavLink
											header={nav.supportLinks[0].type}
											contentHeader={nav.supportHeader}
											links={nav.supportLinks}
										/>
										<Typography style={{}}>
											<Link to='/partners' className={classes.partners}>
												{nav.partnerNavLink.title}
											</Link>
										</Typography>
										<Button
											variant='contained'
											color='primary'
											size='large'
											onClick={(e) => handleModalClick(e)}
											className={classes.cta}>
											{nav.ctaText}
										</Button>
									</>
								)}
							</Grid>
						</Grid>
					</Container>
				</Toolbar>
			</AppBar>
		</>
	);
};
