import React from 'react';
import S from './LikeMdStyle';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paging from '../../_component/Paging';
import { Link, useNavigate } from 'react-router-dom';

const LikeMdComponent = ({ page, currentList, setPage, totalPost, PAGINATION }) => {
  const navigate = useNavigate();

  if (currentList.length === 0) {
    return (
      <S.NoneItem>
        <p>아직 찜한 아이템이 없네요!</p>
        <p>마음에 드는 아이템을 찜해보세요.</p>
        <Link to={"/shop/md"}>
          <S.LinkToPath>MD 상품보러가기</S.LinkToPath>
        </Link>
      </S.NoneItem>
    );
  }
  

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
          <p>아직 찜한 아이템이 없네요! 마음에 드는 아이템을 찜해보세요.</p>
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