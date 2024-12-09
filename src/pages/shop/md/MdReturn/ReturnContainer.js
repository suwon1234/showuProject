import React from 'react';
import MdReturn from './_component/MdReturn';

const ReturnContainer = () => {

  const returnItems = [
    { id: 1, name: "2024 베르사유의 장미 프로그램북 스페셜 에디션", price: 65000 },
    { id: 2, name: "2024 베르사유의 장미 프로그램북 스페셜 에디션", price: 65000 },
  ];

  return (
    <div>
      <MdReturn items={returnItems} />
    </div>
  );
};

export default ReturnContainer;