import React from 'react';
import Icons from './Icons';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import urlSlug from 'url-slug';

const Button = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #75ab00;
    width: 100%;
    color: #fff;
    display: block;
    text-decoration: none;
    text-align:center;
    font-weight: 700;
    text-transform: uppercase;
`;

const Card = styled.div `
    border: 1px solid #e1e1e1;

    img {
        max-width: 100%;
    }
`;

const Content = styled.div `
    padding: 2rem;

    h3 {
        font-family: 'Lato', sans-serif;
        margin: 0 0 2em 0;
        font-size: 2.4rem;
    }

    .price {
        font-size: 2rem;
        color: #75AB00;
    }
`;

const EstatePreview = ({estate}) => {

    const { name, image, wc, parkinglot, rooms, price } = estate;

    return ( 
        <Card>
            <Image
                fluid={image.sharp.fluid}
            />
            <Content>
                <h3>{name}</h3>
                <p className="price">${price}</p>

                <Icons
                    wc={wc}
                    parkinglot={parkinglot}
                    rooms={rooms}
                />
                <Button to={ urlSlug(name) }>
                    See details
                </Button>
            </Content>
        </Card>
     );
}
 
export default EstatePreview;