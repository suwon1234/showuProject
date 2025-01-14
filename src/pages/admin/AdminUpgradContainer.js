import React from 'react';
import Layout from '../mypage/_component/Layout';
import AdminLeftContainer from './AdminLeftContainer';
import UpgreadeAdminComponent from './upgrade/UpgradeAdminComponent';

const AdminUpgradContainer = () => {
  return (
    <div>
      <Layout 
        leftContent={<AdminLeftContainer />}
        rightContent={<UpgreadeAdminComponent />}
      />
    </div>
  );
};

export default AdminUpgradContainer;