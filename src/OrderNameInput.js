import React from 'react';

export default function OrderNameInput({ setOrderName }) {
  function handleChange(e) {
    setOrderName(e.target.value);
  }
  return (
    <section className='name-input'>
        Order name:
      <input onChange={handleChange} />
    </section>
  );
}
