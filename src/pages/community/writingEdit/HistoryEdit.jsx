import React, { useState, useEffect } from "react";
import S from "./HistoryEditStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const HistoryEdit = () => {
  const [posts, setPosts] = useState([]); 
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState({ title: "", content: "" }); 

  const fetchPosts = async () => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/community/posts?page=1&limit=10", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPosts(data.posts);
      } else {
        alert("데이터를 가져오는 데 실패했습니다.");
      }
    } catch (error) {
      console.error("서버 오류:", error);
      alert("서버 오류가 발생했습니다.");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleEdit = (post) => {
    setEditingPost(post._id); 
    setFormData({ title: post.title, content: post.content }); 
  };

  const handleDelete = async (postId) => {
    const complete = window.confirm("삭제하시겠습니까?");
    if (complete) {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        alert("로그인이 필요합니다.");
        return;
      }

      try {
        const response = await fetch(`http://localhost:8000/community/posts/${postId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          alert("삭제되었습니다.");
          setPosts(posts.filter((post) => post._id !== postId)); 
        } else {
          alert("삭제에 실패했습니다.");
        }
      } catch (error) {
        console.error("서버 오류:", error);
        alert("서버 오류가 발생했습니다.");
      }
    }
  };

  const handleSubmitEdit = async () => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/community/posts/${editingPost}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("수정되었습니다.");
        fetchPosts(); 
        setEditingPost(null); 
      } else {
        alert("수정에 실패했습니다.");
      }
    } catch (error) {
      console.error("서버 오류:", error);
      alert("서버 오류가 발생했습니다.");
    }
  };

  return (
    <S.Wrapper>
      <S.TopTitle>커뮤니티</S.TopTitle>
      <S.IconWrapper>
        <FontAwesomeIcon icon={faChevronDown} className="icon" />
      </S.IconWrapper>
      <S.SubWrapper>
        <S.TitleContainer>
          <S.Title>
            <p>글쓰기 수정/삭제</p>
          </S.Title>
        </S.TitleContainer>

        <S.TableWrapper>
          <table>
            <thead>
              <tr>
                <th>제목</th>
                <th>내용</th>
                <th>작성 날짜</th>
                <th>수정 / 삭제</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post._id}>
                  <td>
                    {editingPost === post._id ? (
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) =>
                          setFormData({ ...formData, title: e.target.value })
                        }
                      />
                    ) : (
                      post.title
                    )}
                  </td>
                  <td>
                    {editingPost === post._id ? (
                      <textarea
                        value={formData.content}
                        onChange={(e) =>
                          setFormData({ ...formData, content: e.target.value })
                        }
                      ></textarea>
                    ) : (
                      post.content
                    )}
                  </td>
                  <td>{new Date(post.createdAt).toLocaleString()}</td>
                  <td>
                    {editingPost === post._id ? (
                      <>
                        <button onClick={handleSubmitEdit}>저장</button>
                        <button onClick={() => setEditingPost(null)}>취소</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleEdit(post)}>수정</button>
                        <button onClick={() => handleDelete(post._id)}>삭제</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </S.TableWrapper>
      </S.SubWrapper>
    </S.Wrapper>
  );
};

export default HistoryEdit;
