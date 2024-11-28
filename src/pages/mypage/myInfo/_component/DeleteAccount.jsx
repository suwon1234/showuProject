import React, { useState } from 'react';
import S from './DeleteAccountStyle';

const DeleteAccount = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleDelete = () => {
    setIsModelOpen(true);
  }

  const confirmDelete = () => {
    alert("탈퇴되었습니다");
    setIsModelOpen(false);
    console.log("회원 탈퇴되었습니다");
  }

  const cancleDelete = () => {
    setIsModelOpen(false);
    console.log("회원 탈퇴를 취소하였습니다");
  }

  return (
    <div>
      <S.Button onClick={handleDelete}>회원 탈퇴</S.Button>

      { isModelOpen && (
        <S.Model className='model'>
          <p>탈퇴하시겠습니까?</p>
          <button onClick={confirmDelete}>확인</button>
          <button onClick={cancleDelete}>취소</button>
        </S.Model>
      )}
    </div>
  );
};

export default DeleteAccount;