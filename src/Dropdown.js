import React from 'react';

export default function Dropdown({ handleChange, title, options }) {
  return (
    <div>
      Select a {title}
      <select onChange={(e) => handleChange(e.target.value)}>
        {
          options.map((option, i) =>
            <option key={option + i} value={i + 1}>{option}</option>
          )
        }
      </select>
    </div>
  );
}
