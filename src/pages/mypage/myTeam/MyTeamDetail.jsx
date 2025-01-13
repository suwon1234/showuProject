import React from 'react';
import S from './MyTeamDetailStyle';
import { Link, useNavigate } from 'react-router-dom';
import Paging from '../_component/Paging';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


const MyTeamDetail = ({ page, currentList, setPage, totalPost, PAGINATION }) => {

  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path)
  }

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  if (currentList.length === 0) {
    return (
      <S.NoneItem>
        <p>아직 팀 매칭을 하지 않았네요!</p>
        <p>새로운 팀을 만나 성장할 기회를 얻으세요.</p>
        <Link to={"/showu/team"}>
          <S.LinkToPath>팀 매칭 보러가기</S.LinkToPath>
        </Link>
      </S.NoneItem>
    );
  }


  return (
    <>
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
      <S.ScrollTop onClick={handleScrollTop}>
        <FontAwesomeIcon icon={faArrowUp} className="upicon" />
      </S.ScrollTop>
    </>
  );
};

export default MyTeamDetail;