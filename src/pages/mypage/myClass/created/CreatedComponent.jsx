import React from 'react';
import S from './CreatedStyle';
import { useSelector } from 'react-redux'
import Paging from '../../_component/Paging';

const CreatedComponent = ({ page, currentList, setPage, totalPost, PAGINATION }) => {
  const { currentUser } = useSelector((state) => state.user)

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