import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PortableText from 'react-portable-text';

import { Typography, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	// 	headline: {
	// 		margin: '1rem 0',
	// 		'&:last-of-type': {
	// 			marginBottom: 'none',
	// 		},
	// 	},
	arrow: {
		marginLeft: '.25rem',
		transition: 'transform .25s ease-in-out',
		display: 'inline-block',
	},
	content: {
		'&:hover': {
			transition: 'all 0.25s',
			cursor: 'pointer',
			'& $arrow': { transform: 'translateX(10px)' },
		},
	},
}));

export const NavCallout = ({ calloutIcon, calloutTitle, calloutContent }) => {
	const classes = useStyles();
	const [hovered, setHovered] = useState(null);
	return (
		<Grid
			container
			direction='row'
			justifyContent='flex-start'
			style={{
				background: '#F6F6F8',
				borderRadius: '8px',
				margin: '1rem 0',
				padding: '1rem',
			}}>
			<Grid
				container
				alignItems='flex-end'
				justifyContent='flex-start'
				direction='row'
				item
				xs={12}>
				<FontAwesomeIcon
					icon={['fad', calloutIcon]}
					style={{
						height: '30px',
						width: '30px',
						marginRight: '5px',
						color: '#002D5C',
					}}
				/>{' '}
				<Typography variant='h6' style={{ color: '#002D5C', fontWeight: 700 }}>
					{calloutTitle}
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant='body1'>
					{calloutContent.map((content, index) => (
						<PortableText
							key={index}
							content={content}
							serializers={{
								normal: ({ children }) => (
									<Typography
										onMouseOver={(e) => setHovered(index)}
										className={index === hovered && classes.content}
										style={{
											marginTop: '1rem',

											marginBottom:
												index === calloutContent.length - 1 ? 'none' : '1rem',
										}}>
										{children}
									</Typography>
								),
								internalLink: ({ children, internalSlug }) => {
									return (
										<Link
											to={`/${internalSlug}`}
											style={{ textDecoration: 'none', color: '#002D5C' }}>
											{children}{' '}
											<span className={index === hovered && classes.arrow}>
												→
											</span>
										</Link>
									);
								},
								link: ({ children, href }) => {
									return (
										<a
											href={href}
											target='_blank'
											rel='noopener'
											style={{ textDecoration: 'none', color: '#002D5C' }}>
											{children}{' '}
											<span className={index === hovered && classes.arrow}>
												→
											</span>
										</a>
									);
								},
							}}
						/>
					))}
				</Typography>
			</Grid>
		</Grid>
	);
};
