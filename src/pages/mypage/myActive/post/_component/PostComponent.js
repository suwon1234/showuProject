import React, { useEffect, useState } from 'react';
import S from './PostComponentStyle';

const PostComponent = () => {
  const [ posts, setPosts ] = useState([]);
  
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(`http://localhost:4000/post`);
        const datas = await response.json();
        return datas;
      } catch (error) {
        console.log(error)
      }
    }

    getPosts()
      .then((data) => setPosts(data))
      .catch(console.error)
  }, [])
  
  // console.log(posts);

  return (
    <S.Container className='Container'>
      { posts.map((item, i) => (
        <S.Wrapper key={i} className='Wrapper'>
        <S.Wrap className='wrap'>
          <img src={item.postImageUrl} alt='post 이미지' />
          <S.Right className='right'>
            <p className='title'>{item.title}</p>
            <p className='content'>{item.content}</p>
            <S.Writer className='writer'>
              <p className='date'>{item.date}</p>
              <p className='writer'>{item.writer}</p>
              <p className='read'>READ MORE</p>
            </S.Writer>
          </S.Right>
        </S.Wrap>
      </S.Wrapper>
      ))
      }
    </S.Container>
  );
};

export default PostComponent;