import React from 'react';
import { Link } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Fade, MenuItem } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import HoverMenu from 'material-ui-popup-state/HoverMenu';
import {
	usePopupState,
	bindHover,
	bindMenu,
} from 'material-ui-popup-state/hooks';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { NoHeadersNavContent } from '../desktop/NoHeadersNavContent';
import { ProductNavContent } from '../desktop/ProductNavContent';
import { IndustryNavContent } from '../desktop/IndustryNavContent';
import { SalesNavContent } from '../desktop/SalesNavContent';
import { SupportNavContent } from '../desktop/SupportNavContent';

const useStyles = makeStyles((theme) => ({
	// options: {
	// 	position: 'relative',
	// 	padding: '.7rem',
	// 	transition: 'all .5s ease',
	// },
	link: {
		color: theme.workwaveBlue,
		textDecoration: 'none',
		transition: 'all .5s ease',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '14px',
		fontWeight: 600,
		'&:hover': {
			color: '#2F7FC1',
		},
	},
	subLink: {
		color: theme.workwaveBlue,
		textDecoration: 'none',
		fontWeight: 600,
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
		paddingTop: '2rem',
		// marginTop: '-.5rem',
		// background:
		// 	'linear-gradient(180deg, rgba(255,255,255,1) 50%, rgba(236,236,238,1) 100%)',
	},
	linkContainer: {
		// height: '64px',
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
}));

export const ResourceLink = ({
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
				<a
					className={classes.link}
					href={`https://www.workwave.com/${header}`}
					target='_blank'
					rel='noopener'>
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
				</a>
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
					{' '}
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
								<NoHeadersNavContent
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
