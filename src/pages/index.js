import React from 'react';
import Layout from '../components/layout';
import useHome from '../hooks/useHome';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import heroCSS from '../css/hero.module.css';
import Banner from '../components/Banner';
import EstatesList from '../components/EstatesList';

const ImageBackground = styled(BackgroundImage)`
    height: 600px;
`;
 
const Index = () => {

    const home = useHome();

    const { name, content, image } = home[0];

    return (
        <Layout>
        <ImageBackground
            tag="section"
            fluid={image.sharp.fluid}
            fadeIn="soft"
        >
            <div className={heroCSS.imagebg}>
                <h1 className={heroCSS.title}>Exclusive estates at the best offer!</h1>
            </div>
        </ImageBackground>
            <main>
              <div
                css={css `
                    max-width: 800px;
                    margin: 0 auto;
                `}
              >
                <h1>{name}</h1>
                <p
                  css={css `
                    text-align: center;
                  `}
                >{content}</p>
              </div>  
            </main>

            <Banner/>

            <EstatesList/>

        </Layout> 
        
     );
}
 
export default Index;