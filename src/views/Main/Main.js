import React, { useEffect, useState } from 'react';
import './Main.css';

import Country from '../../components/Country/Country';

import { fetchCountries } from '../../services/fetch';
// import BlogCard from '../../components/BlogCard/BlogCard';

function Main() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchCountries();
        setCountries(resp);
      } catch (e) {
        alert(e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="main">
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.id} {...country} />
        ))}
      </div>
    </section>
  );
}

export default Main;
