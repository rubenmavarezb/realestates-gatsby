import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import heroCSS from '../css/hero.module.css';

const ImageBg = styled(BackgroundImage)`
    height: 300px;
`;

const Banner = () => {

    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "encuentra.jpg"}) {
                sharp: childImageSharp {
                    fluid( maxWidth: 1500 ) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
          }
        }
    `);

    return ( 
        <ImageBg
            tag="section"
            fluid={image.sharp.fluid}
            fadeIn="soft"
        >
            <div className={heroCSS.imagebg}>
                <h3 className={heroCSS.title}>Find your dream house!</h3>
                <p>15 years  of experience</p>
            </div>
        </ImageBg>
     );
}
 
export default Banner;