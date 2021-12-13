import React from 'react';
import { Link } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Fade } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import HoverMenu from 'material-ui-popup-state/HoverMenu';
import {
	usePopupState,
	bindHover,
	bindMenu,
} from 'material-ui-popup-state/hooks';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { ProductNavContent } from './ProductNavContent';
import { IndustryNavContent } from './IndustryNavContent';
import { CompanyNavContent } from './CompanyNavContent';
import { SalesNavContent } from './SalesNavContent';
import { SupportNavContent } from './SupportNavContent';

const useStyles = makeStyles((theme) => ({
	options: {
		position: 'relative',
		padding: '.7rem',
		transition: 'all .5s ease',
	},
	link: {
		color: theme.workwaveBlue,
		textDecoration: 'none',
		transition: 'all .5s ease',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	icon: {
		width: '1rem',
		height: 'auto',
		transition: 'all .5s ease',
	},
	popoverPaper: {
		maxHeight: 'none',
		width: '100%',
		boxShadow: '0px 4px 4px rgba(9, 7, 37, 0.05)',
		paddingTop: '1rem',
		// marginTop: '-.5rem',
		// background:
		// 	'linear-gradient(180deg, rgba(255,255,255,1) 50%, rgba(236,236,238,1) 100%)',
	},
	linkContainer: {
		height: '64px',
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
}));

export const NavLink = ({
	header,
	links,
	calloutIcon,
	calloutTitle,
	calloutContent,
	contentHeader,
}) => {
	const classes = useStyles();
	const popupState = usePopupState({
		variant: 'popover',
		popupId: 'demoMenu',
	});

	const { isOpen } = popupState;

	const lgNav = useMediaQuery('(max-width: 1280px)');
	return (
		<div>
			<div
				className={classes.linkContainer}
				style={{ marginRight: lgNav ? '8px' : '16px' }}
				{...bindHover(popupState)}>
				<Link className={classes.link} to={`/${header}`}>
					<Typography
						className={classes.link}
						style={{ color: isOpen ? '#2F7FC1' : '#002D5C' }}>
						{header[0].toUpperCase() + header.slice(1)}
						<ExpandMore
							className={classes.icon}
							style={{
								transition: 'all .5s ease',
								color: isOpen ? '#2F7FC1' : '#002D5C',
								transform: isOpen ? 'rotateZ(180deg)' : null,
							}}
						/>
					</Typography>
				</Link>
			</div>

			<HoverMenu
				{...bindMenu(popupState)}
				getContentAnchorEl={null}
				PopoverClasses={{
					paper: classes.popoverPaper,
				}}
				TransitionComponent={Fade}
				TransitionProps={{ timeout: 2 }}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
				transformOrigin={{ vertical: 'top', horizontal: 'left' }}>
				<Container fixed>
					{
						{
							industries: (
								<IndustryNavContent
									links={links}
									calloutIcon={calloutIcon}
									calloutTitle={calloutTitle}
									calloutContent={calloutContent}
								/>
							),
							products: (
								<ProductNavContent
									links={links}
									calloutIcon={calloutIcon}
									calloutTitle={calloutTitle}
									calloutContent={calloutContent}
								/>
							),
							company: (
								<CompanyNavContent
									links={links}
									calloutIcon={calloutIcon}
									calloutTitle={calloutTitle}
									calloutContent={calloutContent}
								/>
							),
							sales: (
								<SalesNavContent links={links} contentHeader={contentHeader} />
							),
							support: (
								<SupportNavContent
									links={links}
									contentHeader={contentHeader}
								/>
							),
						}[header]
					}
				</Container>
			</HoverMenu>
		</div>
	);
};
