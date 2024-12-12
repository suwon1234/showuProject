import React from 'react';
import MdRefundInfo from './_component/MdRefundInfo';

const RefundInfoContainer = () => {

  const refundItems = [
    { id: 1, name: "2024 베르사유의 장미 프로그램북 스페셜 에디션", price: 65000 },
    { id: 2, name: "2024 베르사유의 장미 프로그램북 스페셜 에디션", price: 65000 },
  ];

  return (
    <div>
      <MdRefundInfo items={refundItems} />
    </div>
  );
};

export default RefundInfoContainer;