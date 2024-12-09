import React from 'react';
import MdCompleted from './_component/MdCompleted';

const CompletedContainer = () => {

  const payItems = [
    { id: 1, name: "2024 베르사유의 장미 프로그램북 스페셜 에디션", price: 65000 },
    { id: 2, name: "2024 베르사유의 장미 프로그램북 스페셜 에디션", price: 65000 },
    { id: 3, name: "2024 베르사유의 장미 프로그램북 스페셜 에디션", price: 65000 },
  ];

  return (
    <div>
      <MdCompleted items={payItems} />
    </div>
  );
};

export default CompletedContainer;