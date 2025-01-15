import React from 'react';
import S from './VodStyle';
import Paging from '../_component/Paging';
import { Link } from 'react-router-dom';


const MyVodComponent = ({ page, currentList, setPage, totalPost, PAGINATION }) => {

  if (currentList.length === 0) {
    return (
      <S.NoneItem>
        <p>아직 업로드한 vod가 없네요!</p>
        <p>공유하고 싶은 vod을 업로드해보세요.</p>
        <Link to={"/vod/my-ShowU"}>
          <S.LinkToPath>vod 업로드하러 가기</S.LinkToPath>
        </Link>
      </S.NoneItem>
    );
  }

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