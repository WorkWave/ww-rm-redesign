import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Popper, Button, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {
	usePopupState,
	bindPopper,
	bindToggle,
} from 'material-ui-popup-state/hooks';

import { MobileNavLink } from './MobileNavLink';
import { ResourceBar } from '../ResourceBar';

const useStyles = makeStyles((theme) => ({
	link: {
		color: theme.workwaveBlue,
		textDecoration: 'none',
	},
	cta: {
		margin: '0 1rem',
		[theme.breakpoints.down('xs')]: {
			fontSize: '.8rem',
			padding: '10px 10px',
		},
	},
	standAloneContainer: {
		padding: '15px 0',
		borderBottom: `1px ${theme.white} solid`,
	},
	standAlone: {
		textDecoration: 'none',
		color: theme.white,
	},
}));

export const MobileNav = ({ nav, handleModalClick, mktplcLink }) => {
	const classes = useStyles();
	const popupState = usePopupState({
		variant: 'popper',
		popupId: 'mobileMenu',
	});
	const { isOpen, close } = popupState;

	const body = document.querySelector('body');
	useEffect(() => {
		const popperScroll = () => {
			isOpen
				? (body.style.overflow = 'hidden')
				: (body.style.overflow = 'visible');
		};
		popperScroll();
	}, [isOpen]);

	const closeNav = (e) => {
		e.preventDefault();
		setTimeout(() => {
			close();
		}, 700);
	};

	return (
		<>
			<Button
				variant='contained'
				color='primary'
				size='large'
				onClick={(e) => handleModalClick(e)}
				className={classes.cta}>
				{nav.ctaText}
			</Button>
			<div
				{...bindToggle(popupState)}
				style={{
					height: '64px',
					display: 'flex',
					alignItems: 'center',
				}}>
				{isOpen ? (
					<CloseIcon style={{ color: '#002D5C' }} size='large' />
				) : (
					<MenuIcon style={{ color: '#002D5C' }} size='large' />
				)}
			</div>

			<Popper
				style={{
					marginRight: '-5px',
					width: '100vw',
					overflow: 'scroll',
					height: '100vh',
					background: '#002D5C',
					paddingBottom: '300px',
				}}
				placement='top'
				disablePortal={true}
				modifiers={{
					offset: {
						enabled: true,
						offset: '300,0',
					},
					preventOverflow: {
						enabled: true,
						boundariesElement: 'scrollParent',
					},
				}}
				{...bindPopper(popupState)}>
				<div>
					<MobileNavLink
						header={nav.routingGpsLinks[0].type}
						links={nav.routingGpsLinks}
						icon={nav.routingGpsMobileFaIcon}
						closeNav={closeNav}
					/>
					<MobileNavLink
						header={nav.industryLinks[0].type}
						links={nav.industryLinks}
						icon={nav.industryMobileFaIcon}
						closeNav={closeNav}
					/>
					<MobileNavLink
						header={nav.rmSolutionsLinks[0].type}
						links={nav.rmSolutionsLinks}
						icon={nav.rmSolutionsMobileFaIcon}
						closeNav={closeNav}
					/>
					<Link
						to={nav.pricingNavLink.slug.current}
						className={classes.standAlone}>
						<Grid
							container
							alignItems='center'
							onMouseUp={(e) => closeNav(e)}
							className={classes.standAloneContainer}>
							<FontAwesomeIcon
								icon={['fad', nav.pricingMobileFaIcon]}
								style={{
									marginRight: '.5rem',
									color: 'white',
									marginLeft: '1rem',
									fontSize: '1.25rem',
								}}
							/>
							<Typography style={{ fontSize: '1.25rem', fontWeight: 500 }}>
								{nav.pricingNavLink.title}
							</Typography>
						</Grid>
					</Link>
					<MobileNavLink
						header={nav.resourcesLinks[0].type}
						links={nav.resourcesLinks}
						icon={nav.resourcesMobileFaIcon}
						closeNav={closeNav}
					/>
					<Link
						to={nav.loginNavLink.slug.current}
						className={classes.standAlone}>
						<Grid
							container
							alignItems='center'
							onMouseUp={(e) => closeNav(e)}
							className={classes.standAloneContainer}>
							<FontAwesomeIcon
								icon={['fad', nav.partnerMobileFaIcon]}
								style={{
									marginRight: '.5rem',
									color: 'white',
									marginLeft: '1rem',
									fontSize: '1.25rem',
								}}
							/>
							<Typography style={{ fontSize: '1.25rem', fontWeight: 500 }}>
								{nav.loginNavLink.title}
							</Typography>
						</Grid>
					</Link>
					<a
						href='https://marketplace.workwave.com'
						target='_blank'
						rel='noopener'
						className={classes.standAlone}>
						<Grid
							container
							alignItems='center'
							onMouseUp={(e) => closeNav(e)}
							className={classes.stadnAloneContainer}>
							<Typography style={{ fontSize: '1.25rem', fontWeight: 500 }}>
								<FontAwesomeIcon
									icon={['fad', 'shopping-cart']}
									style={{
										marginRight: '.5rem',
										color: 'white',
										marginLeft: '1rem',
										fontSize: '1.25rem',
									}}
								/>

								{mktplcLink}
							</Typography>
						</Grid>
					</a>
				</div>
			</Popper>
		</>
	);
};
