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
			nav: sanityNav {
				title
				promotionBar {
					_type
					_rawContent
				}
				resourceBar {
					mktplcLink
					salesNumber
					serviceNumber
				}
				wwNavLogo {
					asset {
						gatsbyImageData
						url
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
				industryMobileFaIcon
				industryCalloutFaIcon
				industryCalloutTitle
				_rawIndustryCalloutContent
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
				productMobileFaIcon
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
				companyMobileFaIcon
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
				partnerMobileFaIcon
				partnerNavLink {
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
					link={nav.resourceBar.mktplcLink}
					sales={nav.resourceBar.salesNumber}
					service={nav.resourceBar.serviceNumber}
				/>
			)}

			<Navbar nav={nav} marketplace={nav.resourceBar.mktplcLink} />
		</>
	);
};
