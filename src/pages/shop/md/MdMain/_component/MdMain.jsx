// MD - 메인페이지
import React, { useEffect, useState } from 'react';
import S from './styleMain';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

const MdMain = () => {
  const [mdItems, setMdItems] = useState([]);

  useEffect(() => {
    
    const getMd = async () => {
      try {
        const response = await fetch('http://localhost:4000/md');
        const datas = await response.json();
        setMdItems(datas);
      } catch (error) {
        console.error("MdMainError", error);
      }
    };

    getMd();

  }, [])

  const bestItems = mdItems.slice(0, 3); 
  const otherItems = mdItems.slice(3); 

  return (
    <S.MainWrapper>
      <S.MdTitle>
        <h1 className='md-title'>MD</h1>
        <FontAwesomeIcon icon={faChevronDown} className='icon1' />
      </S.MdTitle>

      <S.BestWrapper>
        <S.BestTitle>
          <h1 className='best-title'>BEST</h1>
        </S.BestTitle>
      
        <S.BestItems>
          <S.LeftIconWrapper>
            <FontAwesomeIcon icon={faCircleChevronLeft} />
          </S.LeftIconWrapper>
      
          <S.BestListWrapper>
            {bestItems.map((best) => (
              <S.Best key={best.id}>
                <Link to={'/shop/md/detail'}>
                  <img src={best.images} alt={best.name} className='image' />
                </Link>
                <div className='best-name'>{best.name}</div>
                <div className='best-price'>{best.price.toLocaleString()}원</div>
              </S.Best>
            ))}
          </S.BestListWrapper>
        
          <S.RightIconWrapper>
            <FontAwesomeIcon icon={faCircleChevronRight} />
          </S.RightIconWrapper>
        </S.BestItems>
      </S.BestWrapper>

      <S.CategoryButton>
        <div>
          <button>showU</button>
          <button>공연</button>
          <button>뮤지컬</button>
          <button>영화</button>
          <button>영화</button>
          <button>연극</button>
          <button>밴드</button>
        </div>
      </S.CategoryButton>

      <S.MdWrapper>
        <div className='md-list'>
          {otherItems.map((md) => (
            <S.Md key={md.id}>
              <img src={md.images} alt={md.name} className='image'/>
              <div className='md-name'>{md.name}</div>
              <div className='md-price'>{md.price.toLocaleString()}원</div>
            </S.Md>
          ))}
        </div>
      </S.MdWrapper>

      <S.ButtonWrapper>
        <button>
          <FontAwesomeIcon icon={faChevronRight} className='icon2'/>
          MD 더보기
        </button>
      </S.ButtonWrapper>
    </S.MainWrapper>
  );
};

export default MdMain;
