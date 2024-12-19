// 제보하기 페이지  /community/report

import React, { useState } from 'react';
import S from './styleReport';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
// import { faCircleCheck as solidCircleCheck } from '@fortawesome/free-solid-svg-icons';
// import { faCircleCheck as regularCircle } from '@fortawesome/free-regular-svg-icons';

const handleFile = () => {
    alert("파일 크기는 5MB 이하로 업로드해주세요.");
};



const Report = () => {
  
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);



  const handleSubmit = () => {
    const userCheck = window.confirm("제보하시겠습니까?");
      if (userCheck) {
        alert("제보가 완료되었습니다. News 홈 화면으로 이동합니다.")
        navigate('/community/newsMain');
      }
  };

  const CheckIcon = () => {
    setIsChecked((check) => !check);
  };

  const handleBack = () => {
    const userCheck =window.confirm("News 홈 화면으로 이동합니다. 이동하시겠습니까?");
    if (userCheck) {
      navigate('/community/newsMain');
    }
  };

  return (   
    <S.Wrapper>
      <S.TopTitle>News</S.TopTitle>
      <S.SubWrapper>  
      <S.Titles>
        <S.MainTitle>News</S.MainTitle>
        <S.SubTitle>가장 먼저 접하는 showU 소식</S.SubTitle>
      </S.Titles>  
      <S.box>제보하기</S.box>
        <S.border>    
        <S.TitleContainer>
          <div className='textDiv'>
            <S.TitleBig>showU에서는 여러분의 제보를 기다립니다.</S.TitleBig>
            <S.TitleSmall>
              제보자의 신분은 철저히 보호되며, 제공하신 정보는 게시 이외의 목적으로 사용되지 않습니다
            </S.TitleSmall>
            <S.TitleSmall>
              소중한 제보가 반드시 반영될 수 있도록, 연락 가능한 휴대폰 번호나 이메일 주소를 꼭 남겨주시기 바랍니다.
            </S.TitleSmall>
            <S.TitleSmall>
              제보 주신 내용은 관리자의 검토 이후 승인 처리가 되면, showU News탭에서 확인하실 수 있습니다.
            </S.TitleSmall>
            <S.TitleSmall>
              관리자 승인 여부는 개별적으로 연락 드릴 예정이며, 제보 내역에서도 확인하실 수 있습니다.
            </S.TitleSmall>
            <S.TitleSmall>
              제보 내용은 신뢰성의 이유로 수정 및 삭제가 불가하므로 신중하게 작성해 주시기 바랍니다.
            </S.TitleSmall>
            <S.call>
              <h2>전화 제보 | 02)123-4567</h2> 
              <h2>관련 문의 | 02)123-4568</h2>
            </S.call>
          </div>
        </S.TitleContainer>

        <S.Input>
          <div>
            <label>이름</label>
            <input type="text" id="name" placeholder="이름을 입력하세요" />
          </div>
          <div>
            <label>이메일</label>
            <input type="email" id="email" placeholder="이메일을 입력하세요" />
          </div>
          <div>
            <label>제목</label>
            <input type="text" id="title" placeholder="제목을 입력하세요" />
          </div>
          <div>
            <label>내용</label>
            <textarea className='textArea' type="text" id="content" placeholder="내용을 입력하세요" />
          </div>

          <div>
          <label>첨부 파일</label>
            <S.FileInput  type='file' placeholder='찾아보기' onChange={handleFile}></S.FileInput>
            <p>첨부 파일은 최대 5M까지 등록할 수 있습니다.</p>
          </div>
        </S.Input>

        <S.section>
          <div>
            <p>개인정보 수집 및 이용 동의 안내</p>  
          </div>     
          <div>
            <p>개인정보를 제공받는 업체</p>
            <p>(주) 문화방송</p>
          </div>
          <div>
            <p>개인정보를 이용 목적</p>
            <p>제보내용에 관한 확인 및 처리등의 업무 진행</p>
          </div>
          <div>
            <p>수집하는 개인 정보 항목</p>
            <p>이름, 휴대폰번호 , 이메일</p>
          </div>
          <div>
            <p>개인정보의 보유 및 이용 기간</p>
            <p>이용 목적 달성 후 즉시 파기하나, 보유할 필요가 있는 경우에 한하여 3년간 보유 및 이용</p>
          </div>     
        </S.section>

          <S.CheckWrapper>
            <S.CheckIcon onClick={CheckIcon}>
              {/* <FontAwesomeIcon className='checkedIcon' icon={faCircleCheck}  /> */}
                <FontAwesomeIcon className="checkedIcon"
                // icon={isChecked ? solidCircleCheck : faCircleCheck}
                />

            <S.CheckboxWrapper>
              <S.Checkbox>
                  <input type="checkbox" id='check' />
                  <label htmlFor="check">개인정보 수집 및 이용에 동의합니다.</label>
              </S.Checkbox>
            </S.CheckboxWrapper>
            </S.CheckIcon>
          </S.CheckWrapper>

        <S.buttonWrapper>
        {/* <NavLink to="/community/newsMain"> */}
          <button onClick={handleBack}>이전 화면으로</button>
        {/* </NavLink>  */}
          <button onClick={handleSubmit}>참여하기</button>
        </S.buttonWrapper>
        </S.border>
      </S.SubWrapper>
    </S.Wrapper>
  );
};

export default Report;

