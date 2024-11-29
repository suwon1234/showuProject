import React, { useState } from 'react';
import Layout from '../_component/Layout';
import MypageContainer from '../MypageContainer';
import MyActiveTeam from './likeTeam/MyActiveTeam';
import MyActiveLesson from './likeLesson/MyActiveLesson';
import MyActiveSpace from './likeSpace/MyActiveSpace';
import MyActiveProp from './likeProp/MyActiveProp';
import MyActiveTicket from './likeTicket/MyActiveTicket';
import MyActiveMd from './likeMd/MyActiveMd';
import MyActiveAction from './likeAction/MyActiveAction';

const MyActiveContainer = () => {
  const [ activeContent, setActiveContent ] = useState('team');

  const renderContent = () => {
    
    switch (activeContent) {
      case 'team' :
        return <MyActiveTeam setActiveContent={setActiveContent} />;
      case 'lesson' :
        return <MyActiveLesson />;
      case 'space' :
        return <MyActiveSpace />;
      case 'prop' :
        return <MyActiveProp />;
      case 'ticket' :
        return <MyActiveTicket />;
      case 'md' :
        return <MyActiveMd />;
      case 'action' :
        return <MyActiveAction />;
      default:
        return <MyActiveTeam setActiveContent={setActiveContent} />
    }
  }

  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={renderContent()}/>
  );
};

export default MyActiveContainer;