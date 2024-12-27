import React, { useEffect } from 'react';
import S from '../style';
import { useDispatch } from 'react-redux';
import { setUser, setUserStatus } from '../../../../modules/user';

const DeleteAccount = () => {
  const dispatch = useDispatch();

    const removeAccount = async () => {
      if(window.confirm("회원탈퇴를 하시겠습니까?")){
        await fetch(`http://localhost:8000/users/remove`, {
          method : 'DELETE',
        })
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          localStorage.removeItem("jwtToken")
          dispatch(setUser({})) 
          dispatch(setUserStatus(false))
          alert(res.message)
        })
        .catch(console.error)
        return;
      }
      return;
    }

  return (
    <div>
      <S.Button onClick={removeAccount}>
        회원 탈퇴
      </S.Button>
    </div>
  );
};

export default DeleteAccount;