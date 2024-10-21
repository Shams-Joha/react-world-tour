import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountry }) => {

    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }

    const passWithParams = () => {
        handleVisitedCountry(country)
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{ color: visited ? 'Purple' : 'yellow' }}>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <h3>Population: {population}</h3>
            <h3>Area: {area}</h3>
            <p><small>Code: {cca3}</small></p>
            <button onClick={passWithParams}>Mark Visited</button>
            <br></br>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {
                visited ? 'I have visited this country.' : 'I want to visit'
            }

        </div>
    );
};

export default Country;