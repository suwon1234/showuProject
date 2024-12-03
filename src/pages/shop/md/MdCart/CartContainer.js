import React from 'react';
import MdCart from './_component/MdCart';

const CartContainer = () => {
  
  const cartItems = [
    { id: 1, name: "2024 베르사유의 장미 프로그램북 스페셜 에디션", price: 65000 },
    { id: 2, name: "2024 베르사유의 장미 프로그램북 스페셜 에디션", price: 65000 },
    { id: 3, name: "2024 베르사유의 장미 프로그램북 스페셜 에디션", price: 65000 },
  ];

  return (
    <MdCart items={cartItems} />
  );
};

export default CartContainer;