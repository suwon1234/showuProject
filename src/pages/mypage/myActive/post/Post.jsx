import React from 'react';
import S from './PostStyle';

const Post = () => {
  return (
    <div>
      <S.Container className='Container'>
        <S.Wrapper className='Wrapper'>
          <S.Image className='image'>
            <img src={process.env.PUBLIC_URL + "/images/mypage/myActive/post.png"} alt="글 목록 이미지" />
          </S.Image>
          <S.Title className='Title'>
            <p>커뮤니티에서 작성한 글의 제목</p>
            <p>커뮤니티에서 작성한 글의 작성자</p>
          </S.Title>
        </S.Wrapper>
        <S.Wrapper className='Wrapper'>
          <S.Image className='image'>
            <img src={process.env.PUBLIC_URL + "/images/mypage/myActive/post.png"} alt="글 목록 이미지" />
          </S.Image>
          <S.Title className='Title'>
            <p>커뮤니티에서 작성한 글의 제목</p>
            <p>커뮤니티에서 작성한 글의 작성자</p>
          </S.Title>
        </S.Wrapper>
        <S.Wrapper className='Wrapper'>
          <S.Image className='image'>
            <img src={process.env.PUBLIC_URL + "/images/mypage/myActive/post.png"} alt="글 목록 이미지" />
          </S.Image>
          <S.Title className='Title'>
            <p>커뮤니티에서 작성한 글의 제목</p>
            <p>커뮤니티에서 작성한 글의 작성자</p>
          </S.Title>
        </S.Wrapper>
        <S.Wrapper className='Wrapper'>
          <S.Image className='image'>
            <img src={process.env.PUBLIC_URL + "/images/mypage/myActive/post.png"} alt="글 목록 이미지" />
          </S.Image>
          <S.Title className='Title'>
            <p>커뮤니티에서 작성한 글의 제목</p>
            <p>커뮤니티에서 작성한 글의 작성자</p>
          </S.Title>
        </S.Wrapper>
      </S.Container>
    </div>
  );
};

export default Post;