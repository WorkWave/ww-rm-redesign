import React, { useState, useEffect, useRef, memo, useContext } from 'react';
import { graphql } from 'gatsby';

import { Grid, Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Hero } from '../components/RouteManager/Home/Hero';
import { PersonSection } from '../components/RouteManager/Home/PersonaSection.js';
import { Industry } from '../components/RouteManager/Home/Industry';
import { Testimonials } from '../components/Testimonials';
import { TestimonialLogos } from '../components/Testimonials/TestimonialLogos';
import { TestimonialCarousel } from '../components/Testimonials/TestimonialCarousel';
import { ContactForm } from '../components/ContactForm';
import { ContactFormModal } from '../components/ContactForm/ContactFormModal';
import FormModalContext from '../context/FormModalContext';

const useStyles = makeStyles((theme) => ({
	testimonialTitle: {
		color: theme.workwaveBlue,
		textAlign: 'center',
		fontWeight: 'bold',
		marginBottom: '2rem',
		marginTop: '2rem',
	},
	// testimonialLogo: {
	// 	marginBottom: '1rem',
	// },
	formBackground: {
		background: theme.workwaveBlue,
		paddingBottom: '2rem',
		marginTop: '-7rem',
		[theme.breakpoints.down('md')]: {
			marginTop: '-9rem',
		},
		[theme.breakpoints.down('sm')]: {
			marginTop: '-10rem',
		},
		[theme.breakpoints.down('xs')]: {
			marginTop: '-12rem',
		},
	},
}));

const IndexPage = ({ data }) => {
	const classes = useStyles();
	const routeManager = data.routeManager.edges[0].node;
	const personas = data.personas.edges;
	const formRef = useRef();
	const { formModalOpen, handleModalClick, setFormModalOpen, email } =
		useContext(FormModalContext);
	const MemoizedForm = memo(ContactForm);
	const MemoizedModal = memo(ContactFormModal);
	//tracks the selected testimonial
	const [selected, setSelected] = useState(0);

	//creates an array of testimonials
	const [carouselTestimonialArray, setCarouselTestimonialArray] = useState([]);

	useEffect(() => {
		!carouselTestimonialArray.length &&
			setCarouselTestimonialArray(routeManager.testimonials);
	}, [routeManager.testimonials]);

	//handler for testimonial logo clicks
	const handleTestimonialClick = (event, index) => {
		setSelected(index);
	};

	//callback to prefill marketo forms
	const callback = () => {
		if (email) {
			window.MktoForms2.onFormRender((form) => {
				form.setValues({
					Email: email,
				});
			});
		}
	};

	const med = useMediaQuery('(max-width: 960px)');
	return (
		<>
			<Hero hero={routeManager.hero} />
			<PersonSection personas={personas} />
			<Industry
				title={routeManager.industriesHeader}
				industriesBlurbs={routeManager.blurbs}
			/>
			<div
				style={{
					background: 'transparent',
					padding: '2rem 0',
				}}>
				<Container fixed>
					<Grid container direction='row' justify='center' alignItems='center'>
						<Grid item xs={12} md={8}>
							<Typography variant='h4' className={classes.testimonialTitle}>
								{routeManager.testimonialHeader}
							</Typography>
						</Grid>
					</Grid>

					{med ? (
						<Grid
							container
							direction='row'
							justify='center'
							alignItems='center'>
							<TestimonialCarousel
								carouselTestimonialArray={carouselTestimonialArray}
								ref={formRef}
							/>
						</Grid>
					) : (
						<>
							{routeManager.testimonials.map((testimonial, index) => (
								<Testimonials
									testimonial={testimonial}
									testimonialHeader={routeManager.testimonialHeader}
									key={testimonial._id}
									index={index}
									selected={selected}
									ref={formRef}
								/>
							))}
							<Grid
								container
								direction='row'
								justify='center'
								alignItems='center'
								style={{ marginTop: '3rem' }}
								className={classes.testimonialLogo}>
								{routeManager.testimonials.map((testimonial, index) => (
									<TestimonialLogos
										key={index}
										index={index}
										image={testimonial.testimonialLogo?.asset?.gatsbyImageData}
										company={testimonial.company}
										selected={selected}
										handleTestimonialClick={handleTestimonialClick}
									/>
								))}
							</Grid>
						</>
					)}
				</Container>
			</div>
		</>
	);
};

export const query = graphql`
	query RouteManagerQuery {
		routeManager: allSanityRouteManagerHome {
			edges {
				node {
					metaTitle
					metaDescription
					hero {
						backgroundImage {
							asset {
								gatsbyImageData
							}
						}
						_rawContent
					}
					industriesHeader
					blurbs {
						title
						icon
						header
						body
						slug {
							current
						}
					}
					industriesViewAll
					industriesViewAllSlug {
						current
					}
					testimonialHeader
					testimonials {
						title
						header
						testimonialLogo {
							asset {
								gatsbyImageData
							}
						}
						testimonialText
						nameAndTitle
						videoVariant
						company
						image {
							asset {
								gatsbyImageData(
									fit: FILLMAX
									height: 500
									width: 750
									placeholder: BLURRED
								)
							}
						}
					}
					caseStudy {
						title
						caseStudyCta
						caseStudySlug {
							current
						}
						_rawContent
						caseStudyImage {
							asset {
								gatsbyImageData
							}
						}
					}
					contactForm {
						header
						body
						ctaText
						privacyPolicy
					}
					rmContactFormImage {
						asset {
							gatsbyImageData
						}
					}
					marketoId
				}
			}
		}
		personas: allSanityRouteManagerPersonas {
			edges {
				node {
					personaTitle
					personaSynopsis
					icon
					personaOverview {
						header
						bullets
						ctaText
						personaOverviewImage {
							asset {
								gatsbyImageData(layout: CONSTRAINED, height: 500, width: 500)
							}
						}
					}
				}
			}
		}
	}
`;
export default IndexPage;
