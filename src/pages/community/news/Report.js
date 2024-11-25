// 제보하기 페이지

import React from 'react';
import S from './styleReport';

const Report = () => {
  return (
    <S.Wrapper>
      <div>
        <p>showU에서는 여러분의 제보를 기다립니다.</p>
        <p>
          제보자의 신분은 철저히 보호되며, 제공하신 정보는 게시 이외의 목적으로 사용되지 않습니다
        </p>
        <p>
          소중한 제보가 반드시 반영될 수 있도록, 연락 가능한 휴대폰 번호나 이메일 주소를 꼭 남겨주시기 바랍니다.
        </p>
        <p>
          제보 주신 내용은 관리자의 검토 이후 승인 처리가 되면, showU News탭에서 확인하실 수 있습니다.
        </p>
        <p>
          관리자 승인 여부는 개별적으로 연락 드릴 예정이며, 제보 내역에서도 확인하실 수 있습니다.
        </p>
        <p>
          제보 내용은 신뢰성의 이유로 수정 및 삭제가 불가하므로 신중하게 작성해 주시기 바랍니다.
        </p>
        <div>
          <h2>전화 제보 | 02)123-4567</h2>
          <h2>관련 문의 | 02)123-4568</h2>
        </div>
      </div>

      <div>
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
          <input type="text" id="content" placeholder="내용을 입력하세요" />
        </div>

        <div>
          <input placeholder='첨부 파일'></input>
          <button>찾아보기</button>
          <p>첨부 파일은 최대 5M까지 등록할 수 있습니다.</p>
        </div>
      </div>

      <div>
        <p>개인정보 수집 및 이용 동의 안내</p>
        <div>
        <p>개인정보를 제공받는 업체</p>
        <p>(주) 문화방송</p>
        </div>
        <div>
        <p>개인정보를 이용 목적</p>
        <p>제보내용에 관한 확인 및 처리등의 업무 진행</p>
        </div>
      </div>
    </S.Wrapper>
  );
};

export default Report;

