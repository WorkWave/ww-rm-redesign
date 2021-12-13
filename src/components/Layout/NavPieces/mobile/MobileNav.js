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
	partnerContainer: {
		padding: '15px 0',
		borderBottom: `1px ${theme.white} solid`,
	},
	partners: {
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
						header={nav.industryLinks[0].type}
						links={nav.industryLinks}
						icon={nav.industryMobileFaIcon}
						closeNav={closeNav}
					/>
					<MobileNavLink
						header={nav.productLinks[0].type}
						links={nav.productLinks}
						icon={nav.productMobileFaIcon}
						closeNav={closeNav}
					/>
					<MobileNavLink
						header={nav.companyLinks[0].type}
						links={nav.companyLinks}
						icon={nav.companyMobileFaIcon}
						closeNav={closeNav}
					/>
					<MobileNavLink
						header={nav.salesLinks[0].type}
						links={nav.salesLinks}
						icon={nav.salesMobileFaIcon}
						closeNav={closeNav}
					/>
					<MobileNavLink
						header={nav.supportLinks[0].type}
						links={nav.supportLinks}
						icon={nav.supportMobileFaIcon}
						closeNav={closeNav}
					/>
					<Link to='/partners' className={classes.partners}>
						<Grid
							container
							alignItems='center'
							onMouseUp={(e) => closeNav(e)}
							className={classes.partnerContainer}>
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
								{nav.partnerNavLink.title}
							</Typography>
						</Grid>
					</Link>
					<a
						href='https://marketplace.workwave.com'
						target='_blank'
						rel='noopener'
						className={classes.partners}>
						<Grid
							container
							alignItems='center'
							onMouseUp={(e) => closeNav(e)}
							className={classes.partnerContainer}>
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
