import { graphql, useStaticQuery } from 'gatsby';

const useHome = () => {
    const result = useStaticQuery(graphql`
        query {
            allStrapiPages( filter: { name: { eq: "Home"} }) {
            nodes {
              id
              name
              content
              image {
                sharp: childImageSharp {
                    fluid(maxWidth: 1500 duotone: {
                        highlight:"#222222", shadow:"#192550", opacity: 30
                    }) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
              }
            }
          }
        }
    `);

    return result.allStrapiPages.nodes.map( home => ({
        name: home.name,
        content: home.content,
        image: home.image
    }))
}
 
export default useHome;