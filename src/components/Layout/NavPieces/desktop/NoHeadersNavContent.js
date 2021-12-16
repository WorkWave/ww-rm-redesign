import React from 'react';

import { Grid } from '@material-ui/core';
import { NavCallout } from './NavItems/NavCallout';
import { FaNavItems } from './NavItems/FaNavItems';

export const NoHeadersNavContent = ({
	links,
	calloutIcon,
	calloutTitle,
	calloutContent,
}) => {
	return (
		<Grid container direction='row' spacing={1}>
			<Grid container item xs={12} spacing={1} direction='row'>
				<Grid
					container
					direction='row'
					alignItems='flex-start'
					spacing={1}
					justifyContent='flex-start'>
					<FaNavItems rowWidth={3} items={links} />
				</Grid>
			</Grid>

			{calloutTitle && (
				<NavCallout
					calloutIcon={calloutIcon}
					calloutTitle={calloutTitle}
					calloutContent={calloutContent}
				/>
			)}
		</Grid>
	);
};
