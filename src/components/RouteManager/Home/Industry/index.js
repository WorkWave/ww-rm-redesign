import React from 'react';

import { Grid, Container, Typography } from '@material-ui/core';

import { WaveUpSVG } from '../../../WaveSVGs/WaveUpSVG';
import { WaveDownSVG } from '../../../WaveSVGs/WaveDownSVG';
import { IndustryBlurb } from './IndustryBlurb';

export const Industry = ({ title, industriesBlurbs }) => {
	return (
		<>
			<WaveUpSVG fill='#F4F8FE' />
			<div
				style={{
					background: '#F4F8FE',
					marginTop: '-1rem',
					marginBottom: '-8rem',
					paddingBottom: '6rem',
				}}>
				<Container>
					<Typography
						variant='h3'
						style={{
							textAlign: 'center',
							padding: '1rem 0',
							fontWeight: '500',
							color: '#002D5C',
						}}>
						{title}
					</Typography>
					<Grid container direction='row' justifyContent='center'>
						{industriesBlurbs.map((blurb, index) => (
							<Grid key={index} item xs={12} md={6} lg={4}>
								<IndustryBlurb blurb={blurb} />
							</Grid>
						))}
					</Grid>
				</Container>
			</div>
			<WaveUpSVG fill='white' />
		</>
	);
};
