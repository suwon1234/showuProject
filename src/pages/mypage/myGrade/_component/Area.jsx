import React from 'react';

const Area = ({ value, setIsOpen, isOpen, setAreaValue }) => {
  const valueClick = () => {
    setAreaValue(value);
    setIsOpen(!isOpen);
  }
  return (
    <li onClick={valueClick}>{value}</li>
  );
};

export default Area;