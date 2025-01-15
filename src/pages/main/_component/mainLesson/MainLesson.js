import React, { useEffect, useState } from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';

const MainLesson = () => {
  const [lessons, setLessons] = useState([]);
  const [randomLessons, setRandomLessons] = useState([]);

  useEffect(() => {
    const getLesson = async () => {
      try {
        const response = await fetch(`http://localhost:8000/my/main/lesson`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const res = await response.json();
        if (!res.mainLessonSuccess) {
          console.log(res.message);
        } else {
          setLessons(res.LessonList); 
        }
      } catch (error) {
        console.error("main getLesson error", error);
      }
    };

    getLesson();
  }, []); 

  // lessons 랜덤으로 4개 설정
  useEffect(() => {
    if (lessons.length > 0) { 
      const getRandomItems = (arr, count) => {
        const result = new Set();
        while (result.size < count) {
          const randomIndex = Math.floor(Math.random() * arr.length);
          result.add(arr[randomIndex]);
        }
        return Array.from(result);
      };

      const randomItems = getRandomItems(lessons, 4);
      setRandomLessons(randomItems);
    }
  }, [lessons]); 

  // console.log("randomLessons", randomLessons)

  useEffect(() => {
    Aos.init({
      duration: 1000, 
      once: true, 
    })
  }, [])

  return (
    <S.Wrapper>
      <p>레슨</p>
      <S.MoreLesson>
        <Link to={"/showu/lesson"} className='more'>더보기</Link>
        <span>&gt;</span>
      </S.MoreLesson>
      <S.LessonWrapper>
        {randomLessons.map((lesson, i) => (
          <S.LessonBox key={i} data-aos="fade-up">
            <ul>
              <S.category>
                <li className='total'>{lesson.userInfo.total}</li>
                <li className='category'>{lesson.category}</li>
              </S.category>
              <S.UserInfo>
                <img src={`http://localhost:8000/${lesson.userName.picture}` || `http://localhost:8000/uploads/profiles/user.png`}></img>
                <div>
                  <li className='userName'>{lesson.userName.name}</li>
                  <S.Address>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <li className='address'>{lesson.lessonAddressDetail}</li>
                  </S.Address>
                </div>
              </S.UserInfo>
              <S.LessonExplantion>
                <li className='lessonName'>{lesson.lessonName}</li>
                <li className='lessonDetail'>{lesson.lessonDetail}</li>
              </S.LessonExplantion>
            </ul>
          </S.LessonBox>
        ))}
      </S.LessonWrapper>
    </S.Wrapper>
  );
};

export default MainLesson;
