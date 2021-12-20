import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import useMediaQuery from '@material-ui/core/useMediaQuery';

// import { Search } from './Search';
import { PromotionBar } from './NavPieces/PromotionBar';
import { ResourceBar } from './NavPieces/ResourceBar';
import { Navbar } from './NavPieces/Navbar';

export const Nav = () => {
	const { nav, homeNav } = useStaticQuery(graphql`
		{
			nav: sanityRouteManagerNav {
				title
				promotionBar {
					_type
					_rawContent
				}
				resourceBar {
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
			homeNav: sanityNav {
				productLinks {
					title
					type
					mainName
					secondaryName
					category
					description
					slug {
						current
					}
				}
				productCalloutIcon
				productCalloutTitle
				_rawProductCalloutContent
				companyLinks {
					title
					type
					faIcon
					name
					slug {
						current
					}
				}
				companyCalloutIcon
				companyCalloutTitle
				_rawCompanyCalloutContent
				salesMobileFaIcon
				salesHeader
				salesLinks {
					title
					type
					faIcon
					name
					description
					slug {
						current
					}
				}
				supportMobileFaIcon
				supportHeader
				supportLinks {
					title
					type
					faIcon
					name
					description
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
					nav={homeNav}
					partner={homeNav.partnerNavLink}
				/>
			)}

			<Navbar nav={nav} marketplace={nav.resourceBar.mktplcLink} />
		</>
	);
};
