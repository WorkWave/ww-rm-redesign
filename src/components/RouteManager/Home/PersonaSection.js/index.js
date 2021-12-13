import React, { useState } from 'react';

import { Grid, Container, Typography } from '@material-ui/core';

import { PersonaCard } from './PersonaCard';
import { PersonaOverview } from './PersonaOverview';

export const PersonSection = ({ personas }) => {
	const [selectedCard, setSelectedCard] = useState('Business Owners');

	const handleSelect = (e) => {
		const name = e.currentTarget.getAttribute('name');

		setSelectedCard(name);
	};
	return (
		<Container>
			<Grid container direction='row' justifyContent='center' spacing={4}>
				<Typography variant='h3' style={{ textAlign: 'center' }}></Typography>
				{personas.map((persona, index) => (
					<PersonaCard
						blurb={persona.node}
						key={index}
						selectedCard={selectedCard}
						handleSelect={handleSelect}
					/>
				))}
			</Grid>
			{personas.map((persona, index) => (
				<PersonaOverview
					selectedCard={selectedCard}
					persona={persona.node}
					key={index}
				/>
			))}
		</Container>
	);
};
