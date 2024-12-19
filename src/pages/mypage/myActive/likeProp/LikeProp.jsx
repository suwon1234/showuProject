import React, { useEffect, useState } from 'react';
import S from './LikePropStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const LikeProp = () => {
  const [ props, setProps ] = useState([]);

  useEffect(() => {
    const getProps = async () => {
      try {
        const response = await fetch(`http://localhost:4000/myResProps`);
        const datas = await response.json();
        setProps(datas);
      } catch (error) {
        console.log("LikePropError", error)
      }
    }

    getProps()

  }, [])

  return (
    <div>
      <S.Container className='container'>
      { props && props.map((item, i) => (
        <S.Warpper key={i} className='warpper'>
        <S.Image className='image'>
          <img src={item.propsImageUrl} alt="소품대여" />
        </S.Image>
        <S.Content className='content'>
          <S.Title className='title'>
            <p>{item.product}</p>
            <div className='heartBox'>
              <FontAwesomeIcon icon={faHeart} className='heart'/>
            </div>
          </S.Title>
          <p>{item.price}</p>
        </S.Content>
      </S.Warpper>
      ))
      }

    </S.Container>
    </div>
  );
};

export default LikeProp;