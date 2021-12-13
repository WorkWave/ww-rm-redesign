import React, { memo} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Dialog, Backdrop, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { ContactForm } from './index';


const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '4rem',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	closeIcon: {
		color: theme.workwaveBlue,
		fontSize: 50,
		margin: '1rem',
		marginBottom: 0,
		'&:hover': {
			cursor: 'pointer',
		},
	},
}));

//every tab change triggers a rerender of the whole component. memoized this component to avoid rendering  multiple marketo forms on same page
const MemoizedForm = memo(ContactForm);

export const ContactFormModal = memo(
	({
		open,
		toggleOpen,
		baseUrl,
		munchkinId,
		formId,
		contactForm,
		callback,
	}) => {
		const classes = useStyles();
		

		return (
			open && (
				<div>
					<Dialog
						aria-labelledby='spring-modal-title'
						aria-describedby='spring-modal-description'
						className={classes.modal}
						maxWidth='md'
						open={open}
						onClose={(e) => toggleOpen(false)}
						BackdropComponent={Backdrop}>
						<Grid container item direction='row' justify='flex-end'>
							<CloseIcon
								onClick={(e) => toggleOpen(false)}
								className={classes.closeIcon}
							/>
						</Grid>
						<MemoizedForm
							modal={true}
							baseUrl={baseUrl}
							munchkinId={munchkinId}
							formId={formId}
							contactForm={contactForm}
							callback={callback}
						/>
					</Dialog>
				</div>
			)
		);
	}
);
