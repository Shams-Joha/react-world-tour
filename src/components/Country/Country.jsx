import './Country.css'
const Country = ({ country }) => {
    console.log(country);
    const { name, flags, population } = country;
    return (
        <div className="country">
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <h3>Population: {population}</h3>
        </div>
    );
};

export default Country;