import React from 'react';
import S from './PostComponentStyle';
import { Link, useNavigate } from 'react-router-dom';
import Paging from '../../../_component/Paging';


const PostComponent = ({ page, currentList, setPage, totalPost, PAGINATION }) => {
  const navigate = useNavigate();

  if (currentList.length === 0) {
    return (
      <S.NoneItem>
        <p>아직 작성한 글이 없네요!</p>
        <p>커뮤니티에서 글을 작성해보세요.</p>
        <Link to={"/community"}>
          <S.LinkToPath>커뮤니티 보러가기</S.LinkToPath>
        </Link>
      </S.NoneItem>
    );
  }

  return (
    <S.Container className='Container'>
      { currentList && currentList.length > 0 ? (currentList.map((item) => (
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
      ))) : (
        <p>작성한 글이 없습니다</p>
      )}
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