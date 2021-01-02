const { createPortal } = require('react-dom');
const urlSlug = require('url-slug');

exports.createPages = async ({actions, graphql, reporter}) => {
    const result = await graphql(`
        query {
            allStrapiEstates {
            nodes {
              name
              id
            }
          }
        }
    `);
    const result2 = await graphql(`
        query {
            allStrapiPages {
                nodes {
                    name
                    id
                }
            }
        }
    `);

    if(result.errors) {
        reporter.panic('No results', result.errors);
    }

    const pages = result2.data.allStrapiPages.nodes;
    const estates = result.data.allStrapiEstates.nodes;

    pages.forEach(page => {
        actions.createPage({
            path: urlSlug(page.name),
            component: require.resolve('./src/components/pages.js'),
            context: {
                id: page.id
            }
        })
    })

    estates.forEach(estate => {
        actions.createPage({
            path: urlSlug(estate.name),
            component: require.resolve('./src/components/estates.js'),
            context: {
                id: estate.id
            }
        })
    })
}
