import React from 'react';
import S from './AdviceStyle';
import Paging from '../../_component/Paging';
import { useSelector } from 'react-redux';

const Advicecomponent = ({ page, currentList, setPage, totalPost, PAGINATION }) => {
  const { currentUser } = useSelector((state) => state.user)

  return (
    <div>
      <S.Table>
          <S.Thead>
            <S.Tr>
              <th scope='col'>상담 번호</th>
              <th scope='col'>성함</th>
              <th scope='col'>전화 번호</th>
              <th scope='col'>이메일</th>
              {/* <th scope='col'>비고</th> */}
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            { currentList && currentList.map((item, i) => (
              <S.RowTr key={i}>
                <th scope='row' className='num'>{item.id}</th>
                <td>{currentUser.name}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.email}</td>
                {/* <td>{item.etc}</td> */}
              </S.RowTr>
            ))}
          </S.Tbody>
        </S.Table>
        <Paging 
          page={page}
          setPage={setPage}
          totalPost={totalPost}
          btnRange={PAGINATION.btnRange}
          pageRange={PAGINATION.pageRange}
        />  
    </div>
  );
};

export default Advicecomponent;