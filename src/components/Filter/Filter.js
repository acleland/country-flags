import React from 'react';

export default function Filter({ options, callback }) {
  return (
    <select onChange={(e) => callback(e.target.value)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
