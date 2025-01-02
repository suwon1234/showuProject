import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
    <ul>
      {adminList.map((data, i) => (
        <li key={i}>
          {data.exportName}
          {data.intro}
        </li>
      ))}
    </ul>
  );
};

export default AdminContainer;