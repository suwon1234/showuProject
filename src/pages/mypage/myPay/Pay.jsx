import React from 'react';
import S from './PayStyle';
import { useNavigate } from 'react-router-dom';

const Pay = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path)
  }

  return (
    <>
      <div>
        <S.Table>
          <S.Thead>
            <S.Tr>
              <th scope='col'>No</th>
              <th scope='col'>날짜</th>
              <th scope='col'>상품명</th>
              <th scope='col'>결제금액</th>
              <th scope='col'>카테고리</th>
              <th scope='col'>결제상태</th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            <S.ContentTr>
              <th scope='row'>202412101234</th>
              <td>2024.11.29 17:00</td>
              <td>베르사유의 장미</td>
              <td>66,000원</td>
              <td>MD</td>
              <td>결제 완료</td>
            </S.ContentTr>
          </S.Tbody>
        </S.Table>
        <S.Image className='image'>
          <img onClick={() => handleNavigate('/shop/md/detail')} src={process.env.PUBLIC_URL + "/images/Mypage/myMd/md.png"} alt="엠디1" />
          <img onClick={() => handleNavigate('/shop/md/detail')} src={process.env.PUBLIC_URL + "/images/Mypage/myMd/md2.png"} alt="엠디1" />
        </S.Image>
        <S.Table>
          <S.Thead>
            <S.Tr>
              <th scope='col'>No</th>
              <th scope='col'>날짜</th>
              <th scope='col'>상품명</th>
              <th scope='col'>결제금액</th>
              <th scope='col'>카테고리</th>
              <th scope='col'>결제상태</th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            <S.ContentTr>
              <th scope='row'>202412101234</th>
              <td>2024.11.29 17:00</td>
              <td>베르사유의 장미</td>
              <td>66,000원</td>
              <td>MD</td>
              <td>결제 완료</td>
            </S.ContentTr>
          </S.Tbody>
        </S.Table>
        <S.Image className='image'>
          <img onClick={() => handleNavigate('/shop/md/detail')} src={process.env.PUBLIC_URL + "/images/Mypage/myMd/md.png"} alt="엠디1" />
          <img onClick={() => handleNavigate('/shop/md/detail')} src={process.env.PUBLIC_URL + "/images/Mypage/myMd/md2.png"} alt="엠디1" />
        </S.Image>
      </div>
    </>
  );
};

export default Pay;