require('dotenv').config({
	path: `.env`,
});

module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
		title: 'ww-rm-jamstack',
	},
	plugins: [
		{
			resolve: 'gatsby-source-sanity',
			options: {
				projectId: '6hmfnuhf',
				dataset: 'production',
				token: process.env.MY_SANITY_TOKEN,
				watchMode: true,
				overlayDrafts: true,
			},
		},
		`gatsby-plugin-material-ui`,
		'gatsby-plugin-image',
		`gatsby-plugin-gatsby-cloud`,
		`gatsby-plugin-fontawesome-css`,
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
	],
};
