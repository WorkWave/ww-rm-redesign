import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import useMediaQuery from '@material-ui/core/useMediaQuery';

// import { Search } from './Search';
import { PromotionBar } from './NavPieces/PromotionBar';
import { ResourceBar } from './NavPieces/ResourceBar';
import { Navbar } from './NavPieces/Navbar';

export const Nav = () => {
	//calculates navbarheight for each element

	const { nav } = useStaticQuery(graphql`
		{
			nav: sanityRouteManagerNav {
				title
				promotionBar {
					_type
					_rawContent
				}
				resourceBar {
					productLinks {
						type
						title
						slug {
							current
						}
					}
					companyLinks {
						type
						title
						slug {
							current
						}
					}
					salesLinks {
						type
						title
						slug {
							current
						}
					}
					supportLinks {
						type
						title
						slug {
							current
						}
					}
					partnerNavLink {
						title
						slug {
							current
						}
					}
					mktplcLink
				}
				wwNavLogo {
					asset {
						gatsbyImageData
						url
					}
				}
				routingGpsMobileFaIcon
				routingGpsLinks {
					title
					type
					faIcon
					name
					category
					slug {
						current
					}
				}
				industryLinks {
					title
					type
					faIcon
					name
					category
					slug {
						current
					}
				}
				industryCalloutFaIcon
				industryCalloutTitle
				_rawIndustryCalloutContent
				rmSolutionsLinks {
					title
					type
					faIcon
					name
					category
					slug {
						current
					}
				}
				pricingNavLink {
					title
					slug {
						current
					}
				}
				resourcesLinks {
					title
					type
					faIcon
					name
					slug {
						current
					}
				}
				resourcesLinks {
					title
					type
					faIcon
					name
					slug {
						current
					}
				}
				loginNavLink {
					title
					slug {
						current
					}
				}
				ctaText
			}
		}
	`);

	const med = useMediaQuery('(max-width: 960px)');
	return (
		<>
			<PromotionBar promotion={nav.promotionBar} />
			{!med && (
				<ResourceBar
					mktplcLink={nav.resourceBar.mktplcLink}
					sales={nav.resourceBar.salesNumber}
					service={nav.resourceBar.serviceNumber}
					product={nav.resourceBar.productLinks}
					company={nav.resourceBar.companyLinks}
					sales={nav.resourceBar.salesLinks}
					support={nav.resourceBar.supportLinks}
					partner={nav.resourceBar.partnerNavLink}
				/>
			)}

			<Navbar nav={nav} marketplace={nav.resourceBar.mktplcLink} />
		</>
	);
};
