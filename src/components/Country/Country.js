import React from 'react';
import './Country.css';

export default function Country(country) {
  return (
    <div className="country">
      <p>{country.name}</p>
      <img
        src={`https://flagcdn.com/72x54/${country.iso2.toLowerCase()}.png`}
        width={72}
        height={54}
      />
    </div>
  );
}
