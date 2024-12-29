import React, { useEffect, useState } from 'react';
import S from './SubscriptionStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Subscription = () => {
  const [vod, setVod] = useState([]);

  useEffect(() => {
    const getVod = async () => {
      try {
        const response = await fetch(`http://localhost:4000/myVod`);
        if (!response.ok) {
          throw new Error("Failed to fetch VOD data");
        }
        const datas = await response.json();
        return datas;
      } catch (error) {
        console.log("SubscriptionError", error);
        return []; // 오류 발생 시 빈 배열 반환
      }
    };

    getVod()
      .then((data) => setVod(data))
      .catch(console.error);
  }, []);

  const subscriptions = Array.isArray(vod) ? vod.filter((item) => item.state.includes("구독")) : [];

  return (
    <div>
      <S.Container className='Container'>
        {subscriptions.map((item, i) => (
          <S.Wrapper key={i} className='Wrapper'>
            <S.Image className='Image'>
              <img src={item.imageUrl} alt="vod 포스터" />
              <div className='heartBox'>
                <FontAwesomeIcon icon={faHeart} className='heart' />
              </div>
            </S.Image>
            <S.Content className='content'>
              <p>{item.title}</p>
            </S.Content>
          </S.Wrapper>
        ))}
      </S.Container>
    </div>
  );
};

export default Subscription;
