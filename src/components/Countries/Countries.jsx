import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountry] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])


    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {
                countries.map(country => {
                    console.log(country)
                    return <Country
                        key={country.cca3}
                        country={country}></Country>
                }
                )
            }


        </div>
    );
};

export default Countries;