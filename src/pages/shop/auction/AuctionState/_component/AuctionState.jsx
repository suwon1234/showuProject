// 경매 - 구매현황/관심물품 페이지
import React from 'react';
import S from './styleState';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
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
      
    </S.StateWrapper>
  );
};

export default AuctionState;