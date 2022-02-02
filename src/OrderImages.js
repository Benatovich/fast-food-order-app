import React from 'react';

export default function OrderImages({ foodId, drinkId, sideId }) {
  return <div className='order-images'>
    <img className='img' src={`food-${foodId}.png`} />
    <img className='img' src={`drink-${drinkId}.png`} />
    <img className='img' src={`side-${sideId}.png`} />
  </div>;
}
