import path, { resolve } from 'path';

async function turnPersonasIntoPages({ graphql, actions }) {
	const personaTemplate = path.resolve('./src/templates/Persona.js');
	const { data } = await graphql(`
		query {
			personas: allSanityRouteManagerPersonas {
				nodes {
					_id
					slug {
						current
					}
				}
			}
		}
	`);

	data.personas.nodes.forEach((persona) => {
		actions.createPage({
			path: `/route-manager/${persona.slug.current}`,
			component: personaTemplate,
			context: {
				slug: persona.slug.current,
			},
		});
	});
}

export async function createPages(params) {
	// Create pages dynamically
	// Wait for all promises to be resolved before finishing this function
	await Promise.all([
		// turnPersonasIntoPages(params),
		// redirects(params),
	]);
}

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
// 	if (stage === 'build-html') {
// 		actions.setWebpackConfig({
// 			module: {
// 				rules: [
// 					{
// 						test: /bad-module/,
// 						use: loaders.null(),
// 					},
// 				],
// 			},
// 		});
// 	}
// };
