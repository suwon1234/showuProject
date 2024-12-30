import React from 'react';
import S from './PostComponentStyle';
import { useNavigate } from 'react-router-dom';
import Paging from '../../../_component/Paging';


const PostComponent = ({ page, currentList, setPage, totalPost, PAGINATION }) => {
  const navigate = useNavigate();

  return (
    <S.Container className='Container'>
      { currentList && currentList.map((item) => (
        <S.Wrapper 
          key={item._id} 
          onClick={() => navigate(`/community/communityInfo/${item._id}`)}>
          <S.Wrap className='wrap'>
            <img src={item.imageUrl} alt='post 이미지' />
            <S.Right className='right'>
              <p className='title'>{item.title}</p>
              <p className='content'>{item.content}</p>
              <S.Writer className='writer'>
                <p className='date'>{item.createdAt}</p>
                <p className='writer'>{item.writer}</p>
              </S.Writer>
            </S.Right>
          </S.Wrap>
        </S.Wrapper>
      ))}
      <Paging 
        page={page}
        setPage={setPage}
        totalPost={totalPost}
        btnRange={PAGINATION.btnRange}
        pageRange={PAGINATION.pageRange}
      />
    </S.Container>
  );
};

export default PostComponent;