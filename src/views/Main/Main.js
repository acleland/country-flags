import React, { useEffect, useState } from 'react';
import './Main.css';

import Country from '../../components/Country/Country';
import Filter from '../../components/Filter/Filter';

import { fetchCountries } from '../../services/fetch';

// Utility function for getting unique continent values from the data
function getContinentList(countries) {
  let arr = [];
  for (let country of countries) {
    if (country.continent && !arr.includes(country.continent)) {
      arr.push(country.continent);
    }
  }
  return arr;
}

// Filter countries by continent
const noContinent = 'Continent Not Specified';

function filterByContinent(countries, continent) {
  if (continent === noContinent) {
    return countries.filter((country) => !country.continent);
  }
  return countries.filter((country) => country.continent === continent || continent === 'All');
}

function Main() {
  const [continent, setContinent] = useState('All');
  const [countries, setCountries] = useState([]);
  const continents = getContinentList(countries);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchCountries();
        setCountries(resp);
        setLoading(false);
      } catch (e) {
        alert(e.message);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <section className="main">
      <Filter options={['All', ...continents, noContinent]} callback={setContinent} />
      <div className="countries">
        {filterByContinent(countries, continent).map((country) => (
          <Country key={country.id} {...country} />
        ))}
      </div>
    </section>
  );
}

export default Main;
