import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import useEstates from '../hooks/useEstates';
import EstatePreview from './EstatePreview';
import estatesListCSS from '../css/estateslist.module.css';
import useFilter from '../hooks/useFilter';

const EstatesList = () => {

    const result = useEstates();
    const [estates] = useState(result);
    
    const [filtered, setFiltered] = useState([])

    const { category, filterUI } = useFilter();

    useEffect(() => {
        if(category) {
            const filter = estates.filter(estate => estate.category.name.toLowerCase() === category.toLowerCase())
            setFiltered(filter)
        } else {
            setFiltered(estates);
        }
        console.log('hola')
        
    }, [category, estates])

    return (
        <> 
            <h2
                css={css `
                    margin-top: 5rem;
                `}
            >Our Estates</h2>

            {filterUI()}
            <ul className={estatesListCSS.estates}>
                {filtered.map( estate => (
                    <EstatePreview
                        key={estate.id}
                        estate={estate}
                    />
                ))}
            </ul>
        </>
     );
}
 
export default EstatesList;