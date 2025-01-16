import React from 'react';
import S from './CreatedStyle';
import { useSelector } from 'react-redux'
import Paging from '../../_component/Paging';
import { Link } from 'react-router-dom';

const CreatedComponent = ({ page, currentList, setPage, totalPost, PAGINATION }) => {
  const { currentUser } = useSelector((state) => state.user)

  if (currentList.length === 0) {
    return (
      <S.NoneItem>
        <p>아직 개설한 레슨이 없네요!</p>
        <p>자신있는 전문 분야에서 레슨을 개설해보세요.</p>
        <Link to={"/showu"}>
          <S.LinkToPath>레슨 개설하러 가기</S.LinkToPath>
        </Link>
      </S.NoneItem>
    );
  }

  return (
    <>
      <S.Outer className='outer'>
        { currentList && currentList.map((item, i) => (
          <S.Container key={i} className='Container'>
            <S.Wapper className='Wapper'>
              <S.Lesson className='lesson'>
                <img src={item.lessonThumbnail} alt="레슨 이미지" />
                <p className='name'>{currentUser.name}</p>
                <p className='lessonTitle'>{item.lessonName}</p>
              </S.Lesson>
            </S.Wapper>
          </S.Container>
          ))
        }
        <Paging 
          page={page} 
          setPage={setPage} 
          totalPost={totalPost} 
          btnRange={PAGINATION.btnRange} 
          pageRange={PAGINATION.pageRange} 
        />
      </S.Outer> 
    </>
  );
};

export default CreatedComponent;