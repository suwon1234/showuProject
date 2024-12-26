import React from 'react';

const State = ({ value, setIsOpen, isOpen, setStateValue }) => {
  const valueClick = () => {
    setStateValue(value);
    setIsOpen(!isOpen);
  }

  return (
    <>
      <li onClick={valueClick}>{value}</li>
    </>
  );
};

export default State;