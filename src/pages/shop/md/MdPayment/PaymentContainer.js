import React from 'react';
import MdPayment from './_component/MdPayment';
import { Outlet } from 'react-router-dom';

const PaymentContainer = () => {

  const payItems = [
    { id: 1, name: "2024 베르사유의 장미 프로그램북 스페셜 에디션", price: 65000 },
    { id: 2, name: "2024 베르사유의 장미 프로그램북 스페셜 에디션", price: 65000 },
    { id: 3, name: "2024 베르사유의 장미 프로그램북 스페셜 에디션", price: 65000 },
  ];

  return (
    <div>
      <MdPayment items={payItems} />
      {/* <Outlet /> */}
      
    </div>
  );
};

export default PaymentContainer;