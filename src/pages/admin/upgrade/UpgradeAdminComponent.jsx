import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import S from './style';
import UpgradeDetailModal from './UpgradeDetailModal';

const UpgradeAdminComponent = () => {
  const [adminList, setAdminList] = useState([]);
  const [selectedUpgrade, setSelectedUpgrade] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const jwtToken = localStorage.getItem('jwtToken');
  const navigate = useNavigate();

  useEffect(() => {
    // 관리자 권한이 아니거나 토큰이 없을 경우 로그인 페이지로 이동
    if (currentUser.role !== 'admin' && !jwtToken) {
      navigate('/login');
    }
  }, [currentUser, jwtToken, navigate]);

 // 등급업 신청 내역 불러오기
  const getAdmin = async () => {
    try {
      const response = await fetch(`http://localhost:8000/admin/upgrade/all-data`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`Error status: ${response.message}`);
      }
      const datas = await response.json();
      setAdminList(datas.upgrades);  // adminList 업데이트
    } catch (error) {
      console.error('GetAdminError', error);
    }
  };

  // getAdmin을 jwtToken이 있을 때만 호출
  useEffect(() => {
    if (jwtToken) {
      getAdmin();
    }
  }, [jwtToken]);

  const closeModal = () => {
    setShowModal(false); 
    setSelectedUpgrade(null);  // 모달 닫히면서 selectedUpgrade를 초기화
  };

  // 승인/거절 버튼 클릭 시 유저 상태 변경
  const handleUserRoleChange = async (upgradeId, status) => {
    const data = {
      userId: upgradeId,
      upgradeRequestStatus: status,
      isUpgradeRequested: status === '승인',
      role: status === '승인' ? "export" : "user"
    };
  
    try {
      const response = await fetch(`http://localhost:8000/admin/upgrade/request-status/${status === '승인' ? 'export' : 'reject'}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert(result.message);
  
        // 상태 변경된 유저만 업데이트
        setAdminList(prevAdminList => prevAdminList.map((item) =>
        item._id === upgradeId
          ? { ...item, exportName: { ...item.exportName, upgradeRequestStatus: status } }
          : item
      ));

      getAdmin();

      } else {
        console.error('실패:', result.message);
      }
    } catch (error) {
      console.error('서버 오류:', error);
    }
  };
  

  const handleRowClick = async (upgradeId, e) => {
    // 버튼 클릭이 아닌 경우에만 모달을 열도록 처리
    if (e.target.tagName !== 'BUTTON') {
      try {
        const response = await fetch(`http://localhost:8000/admin/upgrade/${upgradeId}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setSelectedUpgrade(data); // 모달을 열 때 선택된 데이터를 저장
        setShowModal(true); 
      } catch (error) {
        console.error('에러 발생:', error);
      }
    }
  };
  
  

  return (
    <div>
      <S.Title>등급업 관리</S.Title>
      <S.SubTitle>
        <ul>
          <li>등급업 신청 내역</li>
        </ul>
      </S.SubTitle>
      <S.Container>
        <S.Table>
          <S.Thead>
            <S.Tr>
              <th scope="col">전문가 성함</th>
              <th scope="col">전문분야</th>
              <th scope="col">경력사항</th>
              <th scope="col">회원 등급</th>
              <th scope="col">등급 상태</th>
              <th scope="col">관리</th> 
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            {adminList.map((item) => (
              <S.RowTr 
                key={item._id} 
                onClick={(e) => handleRowClick(item._id, e)}  // 행 클릭 시 모달 열기
              >
                <th scope="row" className="num">{item.exportName.name}</th>
                <td>{item.field}</td>
                <td>{item.career}</td>
                <td>{item.exportName.role}</td>
                <td>{item.exportName.upgradeRequestStatus}</td>
                <td>
                  <S.RoleChangeButtonWrapper>
                    <button 
                      className='exportButton'
                      onClick={(e) => {
                        e.stopPropagation(); // 클릭 이벤트가 부모 요소로 전달되지 않도록 함
                        handleUserRoleChange(item.exportName._id, '승인');
                      }}
                    >
                      승인
                    </button>
                    <button 
                      className='rejectButton'
                      onClick={(e) => {
                        e.stopPropagation(); 
                        handleUserRoleChange(item.exportName._id, '거절');
                      }}
                    >
                      거절
                    </button>
                  </S.RoleChangeButtonWrapper>
                </td>
              </S.RowTr>
            ))}
          </S.Tbody>
        </S.Table>
      </S.Container>

      {/* 모달창 */}
      <UpgradeDetailModal
        showModal={showModal}
        selectedUpgrade={selectedUpgrade}
        closeModal={closeModal}
      />
    </div>
  );
};

export default UpgradeAdminComponent;
