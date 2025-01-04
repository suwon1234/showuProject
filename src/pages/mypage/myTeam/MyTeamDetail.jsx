import React from 'react';
import S from './MyTeamDetailStyle';
import { useNavigate } from 'react-router-dom';
import Paging from '../_component/Paging';


const MyTeamDetail = ({ page, currentList, setPage, totalPost, PAGINATION }) => {

  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path)
  }

  return (
    <S.Container>
      <S.Wrapper>
        
        { currentList && currentList.map((item, i) => (
          <S.OuterBox key={i} onClick={() => handleNavigate('/my-team')}>
          <S.Box>
            <img src={item.teamThumbnail} alt="팀매칭 이미지" />
            <S.RightContent>
              <S.Right>
                {/* <p className='genre'>{item.gerne}</p> */}
                <p className='intro'>{item.teamNotice}</p>
                <p className='name'>{item.teamName}</p>
                {/* <p className='date'>{item.period}</p> */}
              </S.Right>
            </S.RightContent>
            <S.Button type='button'>{item.status}</S.Button>
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
  );
};

export default MyTeamDetail;