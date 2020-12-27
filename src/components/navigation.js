import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav `
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;

    @media(min-width:768px) {
        padding: 0;
        flex-direction: row;
    }
`;

const NavLink = styled(Link)`
    color: #FFF;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    padding: .5rem;
    &:not(:last-child) {
        margin-right: 1rem;
    }
    &.current {
        border-bottom: 2px solid #FFF
    }

`;

const Navigation = () => {
    return ( 
        <Nav>
            <NavLink to={'/'} activeClassName='current'>Home</NavLink>
            <NavLink to={'/about'} activeClassName='current'>About us</NavLink>
            <NavLink to={'/estates'} activeClassName='current'>Estates</NavLink>
        </Nav>
     );
}
 
export default Navigation;