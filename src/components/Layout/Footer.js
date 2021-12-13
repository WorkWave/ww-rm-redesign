import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import {
	AppBar,
	Toolbar,
	Typography,
	Container,
	Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	footer: {
		background: '#F8FBFF',
		color: '#002D5C',
		overflowX: 'hidden',
		marginTop: '-6rem',
	},
	headerText: {
		fontWeight: 'bold',
		marginBottom: '1rem',
		textAlign: 'left',
	},
	linkText: {
		textDecoration: 'none',
		marginBottom: '10px',
		color: '#002D5C',
		fontSize: 16,
		textAlign: 'left',
		opacity: '1',
		transition: 'opacity .25s ease-in-out',
		'&:hover': {
			opacity: '0.6',
		},

		[theme.breakpoints.down('lg')]: {
			minHeight: 'auto',
			minWidth: 'auto',
		},
	},
	linkTextSocial: {
		opacity: '1',
		maxWidth: '25px',
		transition: 'opacity .25s ease-in-out',
		'&:hover': {
			opacity: '0.6',
		},
	},

	footerLogo: {
		[theme.breakpoints.down('lg')]: {
			textAlign: 'center',
		},
	},

	footerSocialContainer: {
		[theme.breakpoints.down('lg')]: {
			textAlign: 'center',
		},
	},
}));

export const Footer = () => {
	const classes = useStyles();
	const { footer } = useStaticQuery(graphql`
		query {
			footer: sanityFooterContent {
				productLinks {
					title
					slug {
						current
					}
				}
				industryLinks {
					title
					slug {
						current
					}
				}
				companyLinks {
					title
					slug {
						current
					}
				}
				reachUsContent {
					salesNumber
					supportNumber
					address
				}
				wwFooterLogo {
					asset {
						url
						gatsbyImageData(fit: FILLMAX, placeholder: BLURRED, width: 220)
					}
				}
			}
		}
	`);
	const med = useMediaQuery('(max-width: 960px)');
	return (
		<div>
			<AppBar position='static' className={classes.footer}>
				<Container fixed>
					<Toolbar style={{ padding: '3rem 0' }}>
						<Grid container direction='row'>
							<Grid
								container
								direction='row'
								justify='space-evenly'
								alignItems='flex-start'
								spacing={6}
								style={{ textAlign: 'center', paddingTop: '2rem' }}>
								<Grid item xs={6} md={3}>
									<Grid
										container
										direction='column'
										justify='flex-start'
										alignItems='flex-start'>
										{' '}
										<Typography className={classes.headerText}>
											Products
										</Typography>{' '}
										{footer.productLinks.map((product, index) => (
											<a
												key={index}
												target='_blank'
												rel='noopener'
												href={product.slug.current}
												className={classes.linkText}>
												{product.title}
											</a>
										))}
									</Grid>
								</Grid>
								<Grid item xs={6} md={3}>
									<Grid
										container
										direction='column'
										justify='flex-start'
										alignItems='flex-start'>
										<Typography className={classes.headerText}>
											Industries
										</Typography>{' '}
										{footer.industryLinks.map((industry, index) => (
											<Link
												key={index}
												to={`/${industry.slug.current}`}
												className={classes.linkText}>
												{industry.title}
											</Link>
										))}
									</Grid>
								</Grid>
								<Grid item xs={6} md={3}>
									<Grid
										container
										direction='column'
										justify='flex-start'
										alignItems='flex-start'>
										<Typography className={classes.headerText}>
											Company
										</Typography>{' '}
										{footer.companyLinks.map((company, index) => (
											<Link
												key={index}
												to={`/${company.slug.current}`}
												className={classes.linkText}>
												{company.title}
											</Link>
										))}
									</Grid>
								</Grid>

								<Grid item xs={6} md={3}>
									<Grid
										container
										direction='column'
										justify='flex-start'
										alignItems='flex-start'
										style={{ maxWidth: '350px' }}>
										{' '}
										<Typography className={classes.headerText}>
											Reach Us
										</Typography>{' '}
										<a
											href='tel: 866-794-1658'
											style={{ textDecoration: 'none' }}>
											<Typography className={classes.linkText}>
												Sales: {footer.reachUsContent.salesNumber}
											</Typography>
										</a>
										<a
											href='tel:  800-762-0301'
											style={{ textDecoration: 'none' }}>
											<Typography className={classes.linkText}>
												Service: {footer.reachUsContent.supportNumber}
											</Typography>
										</a>
										<Typography
											className={classes.linkText}
											style={{ textAlign: 'left' }}>
											{footer.reachUsContent.address}
										</Typography>
									</Grid>
								</Grid>
							</Grid>
							<Grid
								container
								direction='row'
								justify='space-evenly'
								alignItems='center'
								spacing={2}
								style={{ marginTop: '4rem' }}>
								<Grid item xs={12} lg={2} className={classes.footerLogo}>
									<a
										href='https://www.workwave.com'
										target='_blank'
										rel='noopener noreferrer'>
										{footer.wwFooterLogo.asset.gatsbyImageData.images?.sources
											.length ? (
											<img
												src={footer.wwFooterLogo.asset.url}
												style={{
													height: '2rem',
													width: '',
													marginTop: '.5rem',
												}}
												alt='logo'
											/>
										) : (
											<GatsbyImage
												image={footer.wwFooterLogo.asset.gatsbyImageData}
												alt='logo'
											/>
										)}
									</a>
								</Grid>
								<Grid
									item
									xs={12}
									lg={2}
									className={classes.footerSocialContainer}>
									<a
										href='#'
										target='_blank'
										rel='noopener noreferrer'
										className={classes.linkText}>
										Copyright© {new Date().getFullYear()}
									</a>
								</Grid>
								<Grid
									item
									xs={12}
									lg={2}
									className={classes.footerSocialContainer}>
									<a
										href='https://www.workwave.com/privacy-policy'
										target='_blank'
										rel='noopener noreferrer'
										className={classes.linkText}>
										Privacy Policy
									</a>
								</Grid>
								<Grid
									item
									xs={12}
									lg={2}
									className={classes.footerSocialContainer}>
									<a
										href='https://www.workwave.com/terms-of-use'
										target='_blank'
										rel='noopener noreferrer'
										className={classes.linkText}>
										Terms of Use
									</a>
								</Grid>
								<Grid
									item
									xs={12}
									lg={2}
									className={classes.footerSocialContainer}>
									<a
										href='https://www.workwave.com/end-of-life-policy'
										target='_blank'
										rel='noopener noreferrer'
										className={classes.linkText}>
										End of Life Policy
									</a>
								</Grid>

								<Grid
									item
									xs={12}
									lg={2}
									className={classes.footerSocialContainer}>
									{' '}
									<a
										className={classes.linkTextSocial}
										href='https://www.facebook.com/WorkWaveCo'
										target='_blank'
										rel='noopener noreferrer'
										style={{ textDecoration: 'none' }}>
										<FontAwesomeIcon
											title='facebook'
											style={{
												height: med ? 'auto' : '25px',
												width: med ? 'auto' : '25px',
												maxWidth: '25px',
												color: '#002D5C',
											}}
											icon={['fab', 'facebook-square']}
										/>
									</a>
									<a
										className={classes.linkTextSocial}
										href='https://twitter.com/WorkWave'
										target='_blank'
										rel='noopener noreferrer'
										style={{ textDecoration: 'none' }}>
										{' '}
										<FontAwesomeIcon
											title='twitter'
											style={{
												height: med ? 'auto' : '25px',
												width: med ? 'auto' : '25px',
												maxWidth: '25px',
												color: '#002D5C',
												marginLeft: med ? '3px' : '5px',
											}}
											icon={['fab', 'twitter-square']}
										/>
									</a>
									<a
										className={classes.linkTextSocial}
										href='https://www.instagram.com/workwave/'
										target='_blank'
										rel='noopener noreferrer'
										style={{ textDecoration: 'none' }}>
										{' '}
										<FontAwesomeIcon
											title='instagram'
											style={{
												height: med ? 'auto' : '25px',
												width: med ? 'auto' : '25px',
												maxWidth: '25px',
												color: '#002D5C',
												marginLeft: med ? '2px' : '5px',
											}}
											icon={['fab', 'instagram-square']}
										/>
									</a>
									<a
										className={classes.linkTextSocial}
										href='https://www.youtube.com/user/MarathonDataLLC'
										target='_blank'
										rel='noopener noreferrer'
										style={{ textDecoration: 'none' }}>
										<FontAwesomeIcon
											title='youtube'
											style={{
												height: med ? 'auto' : '25px',
												width: med ? 'auto' : '25px',
												maxWidth: '25px',
												color: '#002D5C',
												marginLeft: med ? '6px' : '9px',
											}}
											icon={['fab', 'youtube-square']}
										/>
									</a>
									<a
										className={classes.linkTextSocial}
										href='https://www.linkedin.com/company/workwave/'
										target='_blank'
										rel='noopener noreferrer'
										style={{ textDecoration: 'none' }}>
										{' '}
										<FontAwesomeIcon
											title='linkedin'
											style={{
												height: med ? 'auto' : '25px',
												width: med ? 'auto' : '25px',
												maxWidth: '25px',
												color: '#002D5C',
												marginLeft: med ? '3px' : '5px',
											}}
											icon={['fab', 'linkedin']}
										/>
									</a>
								</Grid>
							</Grid>
						</Grid>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
};
