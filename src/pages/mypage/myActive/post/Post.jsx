import React from 'react';

const Post = () => {
  return (
    <div>
      <div className='Container'>
        <div className='Wrapper'>
          <div className='image'>
            <img src={process.env.PUBLIC_URL + "/images/mypage/myActive/post.png"} alt="글 목록 이미지" />
          </div>
          <div className='Title'>
            <p>커뮤니티에서 작성한 글의 제목</p>
            <p>커뮤니티에서 작성한 글의 작성자</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;