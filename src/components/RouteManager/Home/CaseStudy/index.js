import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PortableText from 'react-portable-text';
import { GatsbyImage } from 'gatsby-plugin-image';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	container: {
		background: '#f8fbff',
		// padding: '1rem',
		filter: ' drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.05))',
		margin: '2rem 0',
		borderRadius: '15px',
		boxShadow: '10px',
	},
	title: {
		fontWeight: 700,
		lineHeight: '48px',
		color: theme.workwaveBlue,
	},
	content: {
		fontWeight: 400,
		lineHeight: '32px',
		color: '#001C23',
		fontFamily: ['Roboto', 'sans-serif'].join(),
	},
}));

export const CaseStudy = () => {
	const classes = useStyles();

	const {
		cta: { caseStudy },
	} = useStaticQuery(graphql`
		{
			cta: sanityRouteManagerHome {
				caseStudy {
					title
					caseStudyCta
					caseStudySlug {
						current
					}
					caseStudyImage {
						asset {
							gatsbyImageData
						}
					}
					_rawContent
				}
			}
		}
	`);

	return (
		<Grid container className={classes.container} direction='row' spacing={2}>
			<Grid
				container
				direction='column'
				justifyContent='center'
				item
				style={{ paddingLeft: '1rem' }}
				xs={12}
				md={8}>
				<Typography variant='h4' className={classes.title}>
					{caseStudy.title}
				</Typography>
				{caseStudy._rawContent.map((content) => (
					<PortableText
						content={content}
						serializers={{
							strong: ({ children }) => (
								<Typography className={classes.content} variant='body1'>
									{children}
								</Typography>
							),
						}}
					/>
				))}
				<a
					href={caseStudy.caseStudySlug.current}
					target='_blank'
					rel='noopener noreferrer'
					style={{ textDecoration: 'none' }}>
					<Button color='primary' variant='contained'>
						{caseStudy.caseStudyCta}
					</Button>
				</a>
			</Grid>
			<Grid item xs={12} md={4} style={{ paddingRight: 0, paddingBottom: 0 }}>
				<GatsbyImage image={caseStudy.caseStudyImage.asset.gatsbyImageData} />
			</Grid>
		</Grid>
	);
};
