import React from 'react';
import S from './VodStyle';
import Paging from '../_component/Paging';


const MyVodComponent = ({ page, currentList, setPage, totalPost, PAGINATION }) => {
  return (
    <>
      <S.Container className='Container'>
        { currentList && currentList.map((item, i) => (
          <S.Wrapper key={i} className='Wrapper'>
            <S.Image className='Image'>
              <img src={item.themnail} alt="vod 포스터" />
            </S.Image>
            <S.Content className='content'>
              <p>{item.title}</p>
              <p>{item.category}</p>
              {/* <p>{item.date}</p> */}
            </S.Content>
        </S.Wrapper>
        ))
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

export default MyVodComponent;