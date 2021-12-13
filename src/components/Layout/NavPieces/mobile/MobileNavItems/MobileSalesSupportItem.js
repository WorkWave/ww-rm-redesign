import React, { useContext } from 'react';
import { Link, navigate } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, MenuItem } from '@material-ui/core';

import FormModalContext from '../../../../../context/FormModalContext';

const useStyles = makeStyles((theme) => ({
	link: {
		textDecoration: 'none',
		color: theme.workwaveBlue,
	},
}));
export const MobileSalesSupportItem = ({ link, closeNav, index }) => {
	const { formModalOpen, handleModalClick, setFormModalOpen } =
		useContext(FormModalContext);

	const handleClick = (e, type) => {
		e.preventDefault();

		type === 'support' ? handleModalClick() : navigate('/it-worked');
	};

	const classes = useStyles();
	return link.slug.current.indexOf('tel') > -1 ? (
		<a
			href={link.slug.current}
			className={classes.link}
			style={{ textDecoration: 'none' }}
			target='_self'>
			<MenuItem key={index} onMouseUp={(e) => closeNav(e)}>
				<FontAwesomeIcon
					icon={['fad', link.faIcon]}
					style={{
						height: '35px',
						width: '35px',
						marginRight: '5px',
						border: `1px solid #F1F2F5`,
						background: '#F1F2F5',
						borderRadius: '5px',
						padding: '5px',
						color:
							index % 2 === 0
								? '#002D5C'
								: index % 3 === 0
								? '#0F95A4'
								: index % 4 === 0
								? '#055291'
								: '#2A7ABC',
					}}
				/>
				<span style={{ fontSize: '1.2rem', fontWeight: 400 }}>
					{link.title}
				</span>
			</MenuItem>
		</a>
	) : (
		<MenuItem
			className={classes.link}
			key={index}
			onClick={(e) => handleClick(e, link.type)}
			onMouseUp={(e) => closeNav(e)}>
			<FontAwesomeIcon
				icon={['fad', link.faIcon]}
				style={{
					height: '35px',
					width: '35px',
					marginRight: '5px',
					border: `1px solid #F1F2F5`,
					background: '#F1F2F5',
					borderRadius: '5px',
					padding: '5px',
					color:
						index % 2 === 0
							? '#002D5C'
							: index % 3 === 0
							? '#0F95A4'
							: index % 4 === 0
							? '#055291'
							: '#2A7ABC',
				}}
			/>{' '}
			<span style={{ fontSize: '1.2rem', fontWeight: 400 }}>{link.title}</span>
		</MenuItem>
	);
};
