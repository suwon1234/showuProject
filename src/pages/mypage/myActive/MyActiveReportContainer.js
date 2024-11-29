import React from 'react';
import Layout from '../_component/Layout';
import ReportContainer from './reports/ReportContainer';
import MypageContainer from '../MypageContainer';


const MyActiveReportContainer = () => {
  
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<ReportContainer />} />
  );
};

export default MyActiveReportContainer;
