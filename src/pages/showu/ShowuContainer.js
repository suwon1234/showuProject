import React from 'react';
import LessonMain from './lesson/LessonMain/LessonMain';
import { Link } from 'react-router-dom';
import S from './style';

const ShowuContainer = () => {
  return (
    <div>
      <S.ShowuContainerHeadContent>
        <h3>SHOWU</h3>
        <S.ButtonWrapper>
          <Link to='/showu/lesson'>
            <button>레슨</button>
          </Link>
          <Link to='/showu/team'>
            <button>팀 매칭</button>
          </Link>
        </S.ButtonWrapper>
      </S.ShowuContainerHeadContent>
      <LessonMain /> 
    </div>
  );
};

export default ShowuContainer;