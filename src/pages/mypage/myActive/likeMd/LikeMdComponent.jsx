import React from 'react';
import S from './LikeMdStyle';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paging from '../../_component/Paging';
import { useNavigate } from 'react-router-dom';

const LikeMdComponent = ({ page, currentList, setPage, totalPost, PAGINATION }) => {
  const navigate = useNavigate();

  return (
    <>
      <S.Container className='Container'>
        { currentList && currentList.length > 0 ?
        (currentList.map((item, i) => (
          <S.Wrapper key={i} className='Wrapper'>
            <S.Image className='Image'>
              <img src={item.image} alt='md 이미지' />
            </S.Image>
            <S.Content className='Content'>
              <p>{item.mdName}</p>
              <p>{item.price}</p>
              <FontAwesomeIcon icon={faHeart} className='heart'/>
            </S.Content>
          </S.Wrapper>
        ))) : (
          <p>찜한 md가 없습니다</p>
        )
        }
        <Paging 
          page={page}
          setPage={setPage}
          totalPost={totalPost}
          btnRange={PAGINATION.btnRange}
          pageRange={PAGINATION.pageRange}
      />
      </S.Container>
    </>
  );
};

export default LikeMdComponent;