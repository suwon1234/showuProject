// 경매 - 구매현황/관심물품 페이지
import React from 'react';
import S from './styleState';
import { faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AuctionState = () => {
  return (
    <S.StateWrapper>
      <S.Title>
        <h1>구매 현황</h1>
      </S.Title>

      <S.Purchase>
        <FontAwesomeIcon className='icon1' icon={faPlus} />
        <p>구매관리 바로가기</p>
      </S.Purchase>

      <S.Table>
        <thead>
          <tr>
            <S.TableHead colSpan="5">주문 / 배송조회</S.TableHead>
            <S.TableHead colSpan="5">취소 / 반품 / 미수령</S.TableHead>
          </tr>
          <tr>
            <S.Head>입금요청</S.Head>
            <S.Head>입금확인중</S.Head>
            <S.Head>결제완료<br />배송준비중</S.Head>
            <S.Head>배송중</S.Head>
            <S.Head>구매결정대기</S.Head>
            <S.Head>구매거부</S.Head>
            <S.Head>반품</S.Head>
            <S.Head>미수령</S.Head>
            <S.Head>미입금</S.Head>
            <S.Head>판매거부</S.Head>
          </tr>
        </thead>
        <tbody>
          <tr>
            <S.Data>2</S.Data>
            <S.Data>1</S.Data>
            <S.Data>3</S.Data>
            <S.Data>4</S.Data>
            <S.Data>2</S.Data>
            <S.Data>0</S.Data>
            <S.Data>1</S.Data>
            <S.Data>0</S.Data>
            <S.Data>0</S.Data>
            <S.Data>0</S.Data>
          </tr>
        </tbody>
      </S.Table>

      <S.Title>
        <h1>관심 물품</h1>
      </S.Title>

      <S.TableWrapper>
        <p className='search'>입금요청에 대해서 모두 2개가 검색되었습니다.</p>
      <S.Table>
        <thead>
          <tr>
            <S.Head2></S.Head2>
            <S.Head2>번호</S.Head2>
            <S.Head2>구분</S.Head2>
            <S.Head2>이미지</S.Head2>
            <S.Head2>물품명</S.Head2>
            <S.Head2>현재가</S.Head2>
            <S.Head2>마감일</S.Head2>
            <S.Head2>관리</S.Head2>
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
            <S.Data>
             
            </S.Data>
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
        <button>전체 삭제</button>
      </S.Button>
      </S.TableWrapper>
      
    </S.StateWrapper>
  );
};

export default AuctionState;