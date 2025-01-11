import React from 'react';
import { Link } from 'react-router-dom';
import S from './style'


const AdminLeftContainer = () => {

  return (
    <S.Container className='Container'>
      <S.LeftSection className='Wapper'>
        <S.Title className='title'>
          <li>관리자</li>
        </S.Title>
        <S.Ul>
            <Link to={"/admin"}>
              <li>등급업 관리</li>
            </Link>
            <hr />
        </S.Ul>
        <S.Ul>
            <Link to={"#"}>
              <li>제보 관리</li>
            </Link>
            <hr />
        </S.Ul>
        <S.Ul>
            <Link to={"#"}>
              <li>showU 관리</li>
            </Link>
            {/* <hr /> */}
        </S.Ul>
      </S.LeftSection>
      
    </S.Container>
  );
};

export default AdminLeftContainer;