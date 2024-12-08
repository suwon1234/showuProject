import React from 'react';

const Field = ({ value, setIsOpen, isOpen, setFieldValue }) => {
  const valueClick = () => {
    setFieldValue(value);
    setIsOpen(!isOpen);
  }
  return (
    <li onClick={valueClick}>{value}</li>
  );
};

export default Field;