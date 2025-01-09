import React from 'react';
import { Outlet } from 'react-router-dom';

const PaymentContainer = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PaymentContainer;