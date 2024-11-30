import React from 'react';
import MdCart from './_component/MdCart';

const MdCartContainer = () => {
  
  const cartItems = [
    { id: 1, name: "상품 1", price: "65,000" },
    { id: 2, name: "상품 2", price: "65,000" },
  ];

  return (
    <MdCart items={cartItems} />
  );
};

export default MdCartContainer;