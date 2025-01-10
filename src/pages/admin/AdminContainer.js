import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import S from './style';


const AdminContainer = () => {
  const [ adminList, setAdminList ] = useState([]);
  const { currentUser } = useSelector((state) => state.user)
  const jwtToken = localStorage.getItem('jwtToken'); 
  console.log(currentUser.role)
  const navigate = useNavigate();

  useEffect(() => {
    // 관리자 권한이 아니거나 토큰이 없을 경우 로그인 페이지로 이동
    if(currentUser.role !== "admin" && !jwtToken){
      navigate("/login")
    }
  }, [jwtToken, navigate])

  useEffect(() => {
    const getAdmin = async () => {
      try {
        const response = await fetch(`http://localhost:8000/users/admin/all-data`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${jwtToken}`, 
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error(`error status: ${response.message}`);
        }
        const datas = await response.json();
        console.log('업그레이드 데이터:', datas);
        setAdminList(datas.upgrades)
      } catch (error) {
        console.error("GetAdminError", error);
      }
    };   
    
    getAdmin()

  }, [])


  console.log(adminList)

  return (
    <S.Container>
      <S.Table>
          <S.Thead>
            <S.Tr>
              <th scope='col'>전문가 ID</th>
              <th scope='col'>전문가 성함</th>
              <th scope='col'>자기소개</th>
              <th scope='col'>전문분야</th>
              <th scope='col'>경력사항</th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            { adminList && adminList.map((item, i) => (
              <S.RowTr key={i}>
                <th scope='row' className='num'>{item._id}</th>
                <td>{item.intro}</td>
                <td>{item.exportName.name}</td>
                <td>{item.field}</td>
                <td>{item.career}</td>
              </S.RowTr>
            ))}
          </S.Tbody>
        </S.Table>
    </S.Container>
  );
};

export default AdminContainer;