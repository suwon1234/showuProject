import React from 'react';
import MainBanner from './_component/mainBanner/MainBanner';
import MainChat from './_component/mainChat/MainChat';
import MainLesson from './_component/mainLesson/MainLesson';
import MainTeam from './_component/mainTeam/MainTeam';
import MainTalent from './_component/mainTalent/MainTalent';
import MainHot from './_component/mainHot/MainHot';
import MainOpen from './_component/mainOpen/MainOpen';

const MainContainer = () => {
  return (
    <div>
      <MainBanner />
      <MainLesson />
      <MainChat />
      <MainTeam />
      <MainTalent />
      <MainHot />
      <MainOpen />
    </div>
  );
};

export default MainContainer;