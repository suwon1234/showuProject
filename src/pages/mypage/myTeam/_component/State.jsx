import React from 'react';

const State = ({ value, setIsOpen, setStateValue }) => {
  const valueClick = () => {
    setStateValue(value);
    setIsOpen(false);
  }

  return (
    <>
      <li onClick={valueClick}>{value}</li>
    </>
  );
};

export default State;