import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountry] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])

    const handleVisitedCountry = country => {
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)

    }

    const handleVisitedFlags = flag => {
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)

    }


    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                {/* Visited Country */}
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag.png}></img>)
                }

            </div>
            {/* Display Countries */}

            <div className="country-container">
                {
                    countries.map(country => {

                        return <Country
                            key={country.cca3}
                            handleVisitedCountry={handleVisitedCountry}
                            handleVisitedFlags={handleVisitedFlags}
                            country={country} ></Country>
                    }
                    )
                }
            </div>


        </div>
    );
};

export default Countries;