import React from 'react';
import Layout from './layout'
import Icons from './Icons';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';


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

const Sidebar = styled.aside `
    .price {
        font-size: 2rem;
        color: #75AB00;
    }
    .agent {
        margin-top: 4rem;
        border-radius: 1rem;
        background-color: #75AB00;
        padding: 3rem;
        color: #fff;

        p{
            margin: 0;
        }
    }
`;


export const query = graphql`
    query($id: String!) {
        allStrapiEstates( filter: { id: { eq: $id } }) {
        nodes {
          name
          description
          wc
          parkinglot
          rooms
          price
          agents {
              name
              phone
              email
          }
          image {
              sharp: childImageSharp {
                  fluid(maxWidth: 1200) {
                      ...GatsbyImageSharpFluid_withWebp
                  }
              }
          }
        }
      }
    }
    
`;

const Estates = ({data: { allStrapiEstates: { nodes }}}) => {

    const { name, description, wc, parkinglot, rooms, agents, image, price} = nodes[0];

    return ( 
        <Layout>
            <h1>{name}</h1>
            <Content>
                <main>
                    <Image
                        fluid={image.sharp.fluid}
                    />
                    <p>{description}</p>
                </main>

                <Sidebar>
                    <p className="price">${price}</p>
                    <Icons
                        wc={wc}
                        parkinglot={parkinglot}
                        rooms={rooms}
                    />
                    <div className="agent">
                        <h2>Agent:</h2>
                        <p>{agents.name}</p>
                        <p>{agents.email}</p>
                        <p>{agents.phone}</p>
                    </div>
                </Sidebar>
            </Content>
        </Layout>
     );
}
 
export default Estates;