import React from 'react';
import S from './style';

const UpgradeList = ({ currentList, handleRowClick, handleUserRoleChange }) => {
  return (
    <div>
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
            {currentList.map((item) => (
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
    </div>
  );
};

export default UpgradeList;