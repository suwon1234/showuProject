import React from 'react';

const Total = ({ value, setIsOpen, isOpen, setTotalValue }) => {
  const valueClick = () => {
    setTotalValue(value);
    setIsOpen(!isOpen);
  }
  return (
    <li onClick={valueClick}>{value}</li>
  );
};

export default Total;