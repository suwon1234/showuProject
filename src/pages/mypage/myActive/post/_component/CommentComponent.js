import React, { useEffect, useState } from 'react';
import S from './CommentComponentStyle';
import { useSelector } from 'react-redux';

const CommentComponent = () => {
  const [ comments, setComments ] = useState([]);
  const { currentUser } = useSelector((state) => state.user)
  console.log(currentUser)

  useEffect(() => {
    const getUserComments = async () => {
      if (!currentUser) {
        console.log("로그인된 사용자 정보가 없습니다.");
        return;
      }

      try {
        const response = await fetch(`http://localhost:8000/community/comments/user`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: currentUser._id }),
        });
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.log("getUserCommentsError: ", error);
      }
    };

    getUserComments();
  }, [currentUser]);

  return (
    <S.Container className='Container'>
    {comments && comments.length > 0 ? (
      comments.map((item) => (
        <S.Wrapper key={item._id}>
          <S.Write>
            <img src={item.profileImageUrl} alt="프로필 사진" />
            <S.Title className='title'>
              <p className='writer'>{item.user}</p>
              <p className='date'>{item.createdAt}</p>
            </S.Title>
          </S.Write>
          <S.Content className='content'>
            <p>{item.content}</p>
          </S.Content>
        </S.Wrapper>
      ))
    ) : (
      <p>댓글이 없습니다.</p>
    )}
  </S.Container>
  );
};

export default CommentComponent;