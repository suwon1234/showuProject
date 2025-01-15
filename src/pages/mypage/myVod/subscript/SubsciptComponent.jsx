import React from 'react';
import S from './SubscriptionStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Paging from '../../_component/Paging';
import { Link } from 'react-router-dom';

const SubsciptComponent = ({ page, currentList, setPage, totalPost, PAGINATION }) => {

  if (currentList.length === 0) {
    return (
      <S.NoneItem>
        <p>아직 구독한 vod가 없네요!</p>
        <p>마음에 드는 콘텐츠를 구독해보세요.</p>
        <Link to={"/vod"}>
          <S.LinkToPath>vod 구독하러 가기</S.LinkToPath>
        </Link>
      </S.NoneItem>
    );
  }

  return (
    <>
      <S.Container className='Container'>
        {currentList.map((item, i) => (
          <S.Wrapper key={i} className='Wrapper'>
            <S.Image className='Image'>
              <img src={item.mainImage} alt="vod 포스터" />
              <div className='heartBox'>
                <FontAwesomeIcon icon={faHeart} className='heart' />
              </div>
            </S.Image>
            <S.Content className='content'>
              <p>{item.title}</p>
            </S.Content>
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
    </>
  );
};

export default SubsciptComponent;