import React, { useEffect, useState } from 'react';
import S from './CommentComponentStyle';


const CommentComponent = () => {
  const [ comments, setComments ] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await fetch(`http://localhost:4000/comment`);
        const datas = await response.json();
        return datas;
      }catch(error) {
        console.error(error);
      }
    }

    getComments()
      .then((data) => setComments(data))
      .catch(console.error)

  }, [])

  console.log(comments)

  return (
    <S.Container className='Container'>
          { comments.map((item, i) => (
            <S.Wrapper key={i}>
              <S.Write>
                <img src={item.profileImageUrl} alt="프로필 사진" />
                <S.Title className='title'>
                  <p className='writer'>{item.writer}</p>
                  <p className='date'>{item.date}</p>
                </S.Title>
              </S.Write>
                <S.Content className='content'>
                  <p>{item.comment}</p>
                </S.Content>
            </S.Wrapper>
          ))}
    </S.Container>
  );
};

export default CommentComponent;