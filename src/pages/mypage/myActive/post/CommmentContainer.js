import React from 'react';
import Comment from './Comment';
import S from './ComContainerStyle';
import { useNavigate } from 'react-router-dom';


const CommmentContainer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path)
  }

  return (
    <>
      <S.Container className='container'>
        <S.Wapper className='wapper'>
        <S.Title className='title'>
            <p className='activeTitle'>활동 정보</p>
            <p className='like'>작성한 글 관리</p>
            <S.SubTitle className='subTitle'>
              <ul>
                <li onClick={() => handleNavigate('/my-active/posts')}>작성한 글</li>
                <li onClick={() => handleNavigate('/my-active/comments')}>작성한 댓글</li>
              </ul>
            </S.SubTitle>
          </S.Title> 
          
          {/* 작성한 댓글 목록 */}
          <Comment />

        </S.Wapper>
      </S.Container>

    </>
  );
};

export default CommmentContainer;