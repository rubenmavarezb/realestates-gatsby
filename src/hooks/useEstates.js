import { graphql, useStaticQuery } from 'gatsby';

const useEstates = () => {
    const data = useStaticQuery(graphql`
        query {
            allStrapiEstates {
            nodes {
              name
              description
              id
              wc
              price
              parkinglot
              rooms
              category {
                name
              }
              agents {
                name
                phone
                email
              }
              image {
                  sharp: childImageSharp {
                      fluid(maxWidth: 600, maxHeight: 400) {
                          ...GatsbyImageSharpFluid_withWebp
                      }
                  }
              }
            }
          }
        }
    `)

    return data.allStrapiEstates.nodes.map(estate => ({
        name: estate.name,
        description: estate.description,
        id: estate.id,
        wc: estate.wc,
        image: estate.image,
        price: estate.price,
        parkinglot: estate.parkinglot,
        rooms: estate.rooms,
        category: estate.category,
        agents: estate.agents
    }))
}
 
export default useEstates;