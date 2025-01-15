import React from 'react';
import S from './LikeLessonStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Paging from '../../_component/Paging';
import { Link } from 'react-router-dom';

const LikeLessonComponent = ({ page, currentList, setPage, totalPost, PAGINATION }) => {

  if (currentList.length === 0) {
    return (
      <S.NoneItem>
        <p>아직 찜한 아이템이 없네요!</p>
        <p>마음에 드는 아이템을 찜해보세요.</p>
        <Link to={"/showu/lesson"}>
          <S.LinkToPath>레슨 보러가기</S.LinkToPath>
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
                <img src={item.lessonThumbnail} alt="레슨1" />
                <p className='name'>{item.category}</p>
                <p className='lessonTitle'>{item.lessonName}</p>
                <FontAwesomeIcon icon={faHeart} className='heart'/>
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

export default LikeLessonComponent;