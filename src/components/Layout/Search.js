// import React, { useContext } from 'react';
// import { navigate } from 'gatsby';

// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { fade, makeStyles } from '@material-ui/core/styles';
// import SearchIcon from '@material-ui/icons/Search';
// import { Button, InputBase, Grid } from '@material-ui/core';

// import SearchContext from '../../context/SearchContext';

// const useStyles = makeStyles((theme) => ({
// 	search: {
// 		position: 'relative',
// 		borderRadius: theme.shape.borderRadius,
// 		backgroundColor: fade(theme.borderLightGray, 0.15),
// 		'&:hover': {
// 			backgroundColor: fade(theme.borderLightGray, 0.25),
// 		},
// 		// marginRight: theme.spacing(5),
// 		marginLeft: 0,
// 		marginBottom: 0,
// 	},

// 	inputRoot: {
// 		color: 'inherit',
// 	},
// 	inputInput: {
// 		padding: '14px 16px 13px 16px',
// 		border: '1px solid rgba(0, 0, 0, 0.12)',
// 		borderRadius: '4px 0 0 4px',
// 		// vertical padding + font size from searchIcon
// 		paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
// 		transition: theme.transitions.create('width'),
// 	},

// 	searchButton: {
// 		[theme.breakpoints.down('lg')]: {
// 			position: 'absolute',
// 			top: '0',
// 			right: '0',
// 			borderRadius: '0 4px 4px 0',
// 			boxShadow: 'none !important',
// 		},
// 	},
// }));

// export const Search = () => {
// 	const classes = useStyles();
// 	const { searchTerm, setSearchTerm, setSearchQuery } = useContext(
// 		SearchContext
// 	);

// 	const med = useMediaQuery('(max-width: 960px)');
// 	const sm = useMediaQuery('(max-width: 600px)');
// 	const xs = useMediaQuery('(max-width: 0px)');

// 	const handleChange = (e) => {
// 		const { value } = e.target;

// 		setSearchTerm(value);
// 	};

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		if (searchTerm) {
// 			setSearchQuery(searchTerm);
// 			navigate('/search-results');
// 		}
// 		setSearchTerm('');
// 	};

// 	return (
// 		<Grid
// 			container
// 			item
// 			direction='row'
// 			justify='space-between'
// 			alignItems='center'
// 			className={classes.search}>
// 			<Grid item xs={12} md={10}>
// 				<form onSubmit={handleSubmit}>
// 					<InputBase
// 						placeholder='Find Products'
// 						classes={{
// 							input: classes.inputInput,
// 						}}
// 						fullWidth
// 						value={searchTerm}
// 						onChange={(e) => handleChange(e)}
// 					/>
// 				</form>
// 			</Grid>
// 			{!xs && (
// 				<Grid item md={1}>
// 					<Button
// 						className={classes.searchButton}
// 						variant='contained'
// 						color='primary'
// 						style={{
// 							padding: '.76rem',
// 							marginLeft: '-4.2rem',
// 						}}
// 						onClick={(e) => handleSubmit(e)}>
// 						<SearchIcon />
// 						{
// 							!sm ? 'Search' : null
// 						}
// 					</Button>{' '}
// 				</Grid>
// 			)}
// 		</Grid>
// 	);
// };
