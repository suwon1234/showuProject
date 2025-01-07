import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const HistoryEditActive = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: '', content: '', category: '' });

  useEffect(() => {
    const fetchPost = async () => {
      const token = localStorage.getItem('jwtToken');

      if (!token) {
        alert('로그인이 필요합니다.');
        navigate('/login');
        return;
      }

      try {
        const response = await fetch(`http://localhost:8000/community/post/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setPost(data);
        } else {
          alert('게시글을 가져오는 데 실패했습니다.');
        }
      } catch (error) {
        console.error('서버 오류:', error);
        alert('서버 오류가 발생했습니다.');
      }
    };

    fetchPost();
  }, [id, navigate]);

  const handleSubmit = async () => {
    const token = localStorage.getItem('jwtToken');

    if (!token) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/community/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(post),
      });

      if (response.ok) {
        alert('수정되었습니다.');
        navigate('/community/write/history/edit');
      } else {
        alert('수정에 실패했습니다.');
      }
    } catch (error) {
      console.error('서버 오류:', error);
      alert('서버 오류가 발생했습니다.');
    }
  };

  return (
    <div>
      <h1>게시글 수정</h1>
      <input
        type="text"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <textarea
        value={post.content}
        onChange={(e) => setPost({ ...post, content: e.target.value })}
      />
   
      <button onClick={handleSubmit}>수정하기</button>
    </div>
  );
};

export default HistoryEditActive;
