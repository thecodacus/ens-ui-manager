/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	siteMetadata: {
		url: "thecodacus.com",
		title: "ENS Helper",
		subHeader: "The Coding Abacus",
		description: "A Decentralized Blog, powered by Gatsby and IPFS",
		copyright: "Copyright 2021 The Codacus",
	},
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		`gatsby-plugin-sass`,
		// file systems
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`,
			},
		},

		// content parsers
		// Including in your Gatsby plugins will transform any paths in your frontmatter

		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
				],
			},
		},
	],
}
