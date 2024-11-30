import React from 'react';
import Paging from '../../_component/Paging';
import Post from './Post';
import S from './PostContainerStyle';
import { useNavigate } from 'react-router-dom';


const PostContainer = () => {
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
            <p className='like'>작성한 글ㆍ댓글 관리</p>
            <S.SubTitle className='subTitle'>
              <ul>
              <li onClick={() => handleNavigate('/my-active/posts')}>작성한 글</li>
                <li onClick={() => handleNavigate('/my-active/comments')}>작성한 댓글</li>
              </ul>
            </S.SubTitle>
          </S.Title> 
          
          {/* 작성한 글 목록 */}
          <Post />

        </S.Wapper>
      </S.Container>

      <Paging />
    </>
  );
};

export default PostContainer;