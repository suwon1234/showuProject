import React from 'react';
import S from './SpaceStyle';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paging from '../../_component/Paging';

const SpaceComponent = ({ page, currentList, setPage, totalPost, PAGINATION, handleNavigate }) => {
  return (
    <>
      <S.Container className='container'>
        { currentList && currentList.map((item, i) => (
          <S.Warpper key={i} className='warpper'>
            <S.Image className='image'>
              <img src={item.img} alt="공간대여" />
            </S.Image>
            <S.Content className='content'>
              <S.Title className='title'>
                <p className='spaceName'>{item.name}</p>
                {/* <div className='heartBox'>
                  <FontAwesomeIcon icon={faHeart} className='heart'/>
                  <p className='likeCount'>{item.like}</p>
                </div> */}
              </S.Title>
              {/* <p className='type'>{item.type}</p> */}
              <p className='area'>{item.location}</p>
              <p className='price'>{item.price}</p>
            </S.Content>
          </S.Warpper>
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

export default SpaceComponent;