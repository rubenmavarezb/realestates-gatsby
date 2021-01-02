import React from 'react';
import Layout from './layout';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';
import EstatesList from './EstatesList';


const Content = styled.div `
    max-width:1200px;
    margin: 0 auto;
    width: 95%;

    @media(min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;

export const query = graphql` 
    query($id: String!){
        allStrapiPages(filter: {id: { eq: $id}}) {
          nodes {
            name
            content
            image {
                sharp: childImageSharp {
                    fluid(maxWidth:1200) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
          }
        }
      }
      
`;

const Estates = ({data: { allStrapiPages: { nodes }}}) => {

    const { name, content, image } = nodes[0];

    return ( 
        <Layout>
            <main className='container'>
                <h1>{name}</h1>
                <Content>
                    <Image
                        fluid={image.sharp.fluid}
                    />
                    <p>{content}</p>
                </Content>
            </main>

            {name === "Estates" && (
                <EstatesList/>
            )}
        </Layout>
     );
}
 
export default Estates;