import React from 'react';
import S from './styleManagement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

const AuctionManagement = () => {
  return (
    <S.ManagementWrapper>
      <S.Title>
        <h1>구매 관리</h1>
      </S.Title>

      {/* <S.SubTitle>거래 진행 중</S.SubTitle> */}

      <S.State>
        <p className='subtitle'>거래 진행 중</p>

        <tbody>
          <tr>
            <th>결제 상태</th>
            <td>결제 전(  ) | 결제 완료(  )</td>
          </tr>
          <tr>
            <th>거래 상태</th>
            <td>입금 요청(  ) → 입금확인중(  ) → 배송준비중(  ) → 배송중(  ) → 구매결정대기(  ) → 거래완료</td>
          </tr>
          </tbody>
      </S.State>

      <S.Notice>
        <S.NoticeTitle>
          <FontAwesomeIcon icon={faVolumeHigh} className='icon' />
          <p className='notice'>꼭 읽어주세요!</p>
        </S.NoticeTitle>
          <p>낙찰(구매)일로부터 7일(주말,공휴일 포함)안에 입금하셔야 합니다.</p>
          <p>7일(주말,공휴일 포함)이 지나도록 구매자의 입금내역이 확인되지 않으면, 미입금 구매거부완료로 자동처리됩니다.</p>
          <p>입금확인이 되지 않아 미입금 2건이 누적되는 경우, 사이트 이용이 자동으로 입찰제한됩니다.</p>
          <p>꼭 입금신청을 하셔야만 입금확인이 됩니다.입금신청 정보가 없을 경우에는 입금확인이 불가합니다.</p>
          <p>입금신청시에는 해당 이미지(사진)앞쪽에 체크박스를 선택하신후 입금신청버튼을 클릭 하시기 바랍니다.</p>
      </S.Notice>


      <S.TableWrapper>
        <p className='search'>입금요청에 대해서 모두 2개가 검색되었습니다.</p>
      <S.Table>
        <thead>
          <tr>
            <S.Head></S.Head>
            <S.Head>번호</S.Head>
            <S.Head>구분</S.Head>
            <S.Head>이미지</S.Head>
            <S.Head>물품명</S.Head>
            <S.Head>구매가격</S.Head>
            <S.Head>구매일</S.Head>
            <S.Head>입금기한</S.Head>
          </tr>
        </thead>
        <tbody>
          <tr>
            <S.Data><FontAwesomeIcon icon={faCheckCircle} className='icon'/></S.Data>
            <S.Data><p>1</p></S.Data>
            <S.Data><p>뮤지컬</p></S.Data>
            <S.Data><S.Image  alt='입금요청'/></S.Data>
            <S.Data><p>2024 베르사유의 장미 프로그램북 스페셜 에디션</p></S.Data>
            <S.Data><p>65,000원</p></S.Data>
            <S.Data></S.Data>
            <S.Data></S.Data>
          </tr>
          <tr>
            <S.Data><FontAwesomeIcon icon={faCheckCircle} className='icon'/></S.Data>
            <S.Data><p>1</p></S.Data>
            <S.Data><p>뮤지컬</p></S.Data>
            <S.Data><S.Image alt='입금요청'/></S.Data>
            <S.Data><p>2024 베르사유의 장미 프로그램북 스페셜 에디션</p></S.Data>
            <S.Data><p>65,000원</p></S.Data>
            <S.Data></S.Data>
            <S.Data></S.Data>
          </tr>
          <tr>
            <S.Data><FontAwesomeIcon icon={faCheckCircle} className='icon'/></S.Data>
            <S.Data><p>1</p></S.Data>
            <S.Data><p>뮤지컬</p></S.Data>
            <S.Data><S.Image  alt='입금요청'/></S.Data>
            <S.Data><p>2024 베르사유의 장미 프로그램북 스페셜 에디션</p></S.Data>
            <S.Data><p>65,000원</p></S.Data>
            <S.Data></S.Data>
            <S.Data></S.Data>
          </tr>
        </tbody>
      </S.Table>

      <S.Button>
        <button>입금 신청</button>
      </S.Button>
      </S.TableWrapper>

      
    </S.ManagementWrapper>
  );
};

export default AuctionManagement;