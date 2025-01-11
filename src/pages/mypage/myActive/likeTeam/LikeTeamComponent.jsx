import React from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paging from '../../_component/Paging';
import S from './LikeTeamStyle';
import { Link } from 'react-router-dom';

const LikeTeamComponent = ({ page, currentList, setPage, totalPost, PAGINATION }) => {

  if (currentList.length === 0) {
    return (
      <S.NoneItem>
        <p>아직 찜한 아이템이 없네요!</p>
        <p>마음에 드는 아이템을 찜해보세요.</p>
        <Link to={"/showu/team"}>
          <S.LinkToPath>팀매칭 보러가기</S.LinkToPath>
        </Link>
      </S.NoneItem>
    );
  }

  return (
    <>
      <S.Container>
      <S.Wrapper>
        
        { currentList && currentList.map((item, i) => (
          <S.OuterBox key={i} >
          <S.Box>
            <img src={item.teamThumbnail} alt="팀매칭 이미지" />
            <FontAwesomeIcon icon={faHeart} className='heart'/>
            <div>
              <S.Right>
                <p className='genre'>{item.category}</p>
                <p className='intro'>{item.teamNotice}</p>
                <p className='name'>{item.teamName}</p>
                {/* <p className='date'>{item.period}</p> */}
              </S.Right>
            </div>
          </S.Box>
        </S.OuterBox>
        ))}
        <Paging 
          page={page}
          setPage={setPage}
          totalPost={totalPost}
          btnRange={PAGINATION.btnRange}
          pageRange={PAGINATION.pageRange}
        />  

      </S.Wrapper>
    </S.Container>
    </>
  );
};

export default LikeTeamComponent;