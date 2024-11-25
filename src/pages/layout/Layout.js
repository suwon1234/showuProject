import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      레이아웃
      <Outlet />
    </div>
  );
};

export default Layout;