import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faPhoneAlt,
	faArrowLeft,
	faArrowRight,
	faShoppingCart,
	faQuoteRight,
	faUserTie,
	faUserHeadset,
	faHandHoldingBox,
	faTruckContainer,
	faBoxAlt,
	faBurgerSoda,
	faCannabis,
	faTruckCouch,
	faAmbulance,
	faDollyFlatbed,
	faHandHoldingSeedling,
	faConciergeBell,
	faEnvelopeOpenDollar,
	faStar,
	faDebug,
	faSprinkler,
	faTrees,
	faVacuum,
	faToilet,
	faPlug,
	faVacuumRobot,
	faSortCircleUp,
	faSwimmingPool,
	faOven,
	faAirConditioner,
	faFish,
	faTruckLoading,
	faShippingTimed,
	faAppleCrate,
	faBriefcase,
	faBlog,
	faCogs,
	faCalendarCheck,
	faUsers,
	faNewspaper,
	faRss,
	faEnvelopeOpenText,
	faListAlt,
	faIndustry,
	faCubes,
	faBuilding,
	faHeadset,
	faHandshake,
} from '@fortawesome/pro-duotone-svg-icons';
import {
	faFacebookSquare,
	faTwitterSquare,
	faInstagramSquare,
	faYoutubeSquare,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import theme from '../../theme';

import { Nav } from './Nav';
import { Footer } from './Footer';
import 'typeface-poppins';

library.add(
	faFacebookSquare,
	faTwitterSquare,
	faInstagramSquare,
	faYoutubeSquare,
	faLinkedin,
	faPhoneAlt,
	faArrowLeft,
	faArrowRight,
	faShoppingCart,
	faQuoteRight,
	faHandHoldingSeedling,
	faConciergeBell,
	faEnvelopeOpenDollar,
	faStar,
	faUserTie,
	faUserHeadset,
	faHandHoldingBox,
	faTruckContainer,
	faBoxAlt,
	faBurgerSoda,
	faCannabis,
	faTruckCouch,
	faAmbulance,
	faDollyFlatbed,
	faDebug,
	faSprinkler,
	faTrees,
	faVacuum,
	faToilet,
	faPlug,
	faVacuumRobot,
	faSortCircleUp,
	faSwimmingPool,
	faOven,
	faAirConditioner,
	faFish,
	faTruckLoading,
	faShippingTimed,
	faAppleCrate,
	faBriefcase,
	faBlog,
	faCogs,
	faCalendarCheck,
	faUsers,
	faNewspaper,
	faRss,
	faEnvelopeOpenText,
	faListAlt,
	faIndustry,
	faCubes,
	faBuilding,
	faHeadset,
	faHandshake
);

export const Layout = ({ children }) => {
	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Nav />
			{children}
			<Footer />
		</MuiThemeProvider>
	);
};
