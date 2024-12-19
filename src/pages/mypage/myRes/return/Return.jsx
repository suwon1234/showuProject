import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import S from './RetrunStyle';

const Return = ({ stateValue }) => {
  const [turn, setTurn] = useState([]);

  useEffect(() => {
    const getReturn = async () => {
      try {
        const response = await fetch(`http://localhost:4000/myResProps`);
        const datas = await response.json();
        setTurn(datas);
      } catch (error) {
        console.log("ReturnError", error);
      }
    };

    getReturn();
  }, []);

  const filterReturn = turn.filter((item) =>
    stateValue === "남은 기간"
      ? item.status.includes("남음")
      : item.status.includes("반납 완료")
  );

  return (
    <div>
      <S.Container>
        {filterReturn && filterReturn.map((item, i) => (
          <S.Warpper key={i}>
            <S.Image>
              <img src={item.propsImageUrl} alt={item.product} />
              {/* 반납 완료 시 이미지 배경 비활성화 */}
              { item.status === "반납 완료" && (
                <S.Overlay className='overlay'>
                  <p>반납 완료</p>
                </S.Overlay>
              )}
            </S.Image>
            <S.Content>
              <S.Title>
                <p>{item.product}</p>
                <div className='heartBox'>
                  <FontAwesomeIcon icon={faHeart} className='heart' />
                  <p>{item.like}</p>
                </div>
              </S.Title>
              <p>{item.price}</p>
              <p>{item.status}</p>
            </S.Content>
          </S.Warpper>
        ))}
      </S.Container>
    </div>
  );
};

export default Return;
