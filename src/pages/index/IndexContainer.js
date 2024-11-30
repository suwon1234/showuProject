import React from 'react';
import S from './style';

const IndexContainer = () => {
  return (
    <S.Container>
      <S.Left>
        <S.LeftLamp>
          <img className='lamp' src={process.env.PUBLIC_URL + "/images/index/lamp.png"} alt='램프' />
          <img className='light' src={process.env.PUBLIC_URL + "/images/index/yellowLight.png"} alt='노란색빛' />
        </S.LeftLamp>
        <S.leftChat>
          <p className='guest'>Guest</p>
          <p className='lt'>&lt;</p>
          <S.GuestChat>
            <p>레슨 진행 중! 누구나 참여가능해요!</p>
          </S.GuestChat>
          <span>11:30 AM</span>
        </S.leftChat>
      </S.Left>

      <S.Right className='right'>
        <S.RightLamp className='rightLamp'>
          <img className='lamp' src={process.env.PUBLIC_URL + "/images/index/lamp.png"} alt='램프' />
          <img className='light' src={process.env.PUBLIC_URL + "/images/index/whiteLight.png"} alt='하얀색빛' />
        </S.RightLamp>
        <S.RightChat className='rightChat'>
          <span>18:00 PM</span>
          <S.MemberChat className='memberChat'>
            <p>새로운 팀원을 만나고 성장하세요!</p>
          </S.MemberChat>
          <p className='gt'>&gt;</p>
          <p className='member'>Member</p>
        </S.RightChat>
      </S.Right>
    </S.Container>
  );
};

export default IndexContainer;