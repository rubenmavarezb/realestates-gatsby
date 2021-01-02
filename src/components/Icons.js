import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

const IconsList = styled.ul `
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
    margin: 3rem auto 0 auto;

    li {
        display: flex;

        img {
            margin-right: 1rem;
        }
    }
`;


const Icons = ({wc, parkinglot, rooms}) => {

    const icons = useStaticQuery(graphql`
        query {
            icons: allFile( filter: { relativeDirectory: {eq: "iconos"}}) {
            edges {
              node {
                id
                publicURL
              }
            }
          }
        }
    `)
    const images = icons.icons.edges

    // console.log(images[0])

    return ( 
        <IconsList>
            <li>
                <img src={images[2].node.publicURL} alt="WC icon"/>
                {wc}
            </li>
            <li>
                <img src={images[1].node.publicURL} alt="WC icon"/>
                {parkinglot}
            </li>
            <li>
                <img src={images[0].node.publicURL} alt="WC icon"/>
                {rooms}
            </li>
        </IconsList>
     );
}
 
export default Icons;