import React, { useContext, useRef, useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box, Container } from '@material-ui/core';

import useMarketo from '../../hooks/useMarketo';
import FormModalContext from '../../context/FormModalContext';
import './marketo-styles/styles.css';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
		},
	},
	contact: {
		paddingBottom: '4rem',
		marginTop: '6rem',
	},
	header: {
		fontWeight: 600,
		textAlign: 'center',
	},
	subText: {
		fontSize: '20px',
		textAlign: 'center',
	},
	formContainer: {
		background: theme.white,
		border: `1px solid ${theme.lightGray}`,
		borderRadius: '20px',
		marginTop: '2rem',
	},
	form: {
		maxHeight: '465px',
		overflow: 'hidden',
		[theme.breakpoints.down('lg')]: {
			maxHeight: '465px',
		},
		[theme.breakpoints.down('md')]: {
			maxHeight: '820px',
		},
	},
}));

export const ContactForm = ({
	baseUrl,
	munchkinId,
	formId,
	callback,
	contactForm,
	modal,
	open,
}) => {
	const { email } = useContext(FormModalContext);
	const isLoaded = useMarketo({
		baseUrl,
		munchkinId,
		formId,
		modal,
		email: null,
		callback: () => callback(),
	});

	const { header, body, privacyPolicy } = contactForm;

	const classes = useStyles();
	return (
		<Container>
			<div
				className={classes.contact}
				style={{
					padding: modal ? '1rem' : 0,
					marginTop: modal ? 0 : '6rem',
					marginBottom: !modal ? '2rem' : null,
				}}>
				<>
					<Grid
						container
						direction='column'
						justify='center'
						alignItems='center'
						spacing={2}>
						<Grid item>
							<Typography
								style={{
									fontSize: modal ? '1.9rem' : '2.1rem',
									color: modal ? '#002D5C' : 'white',
								}}
								className={classes.header}>
								{header}
							</Typography>
						</Grid>
						<Grid item className={classes.subText}>
							<Typography
								variant='body1'
								className={classes.subText}
								style={{ color: modal ? '#002D5C' : 'white' }}>
								{body}
							</Typography>
						</Grid>
					</Grid>
				</>
				<Box
					className={classes.formContainer}
					style={{
						padding: '1rem',
					}}>
					<form id={`mktoForm_${formId}`} className={classes.form} />
					<Typography
						variant='body1'
						style={{ marginTop: '1rem', color: '#8394A2' }}>
						{privacyPolicy}
					</Typography>
				</Box>
			</div>
		</Container>
	);
};
