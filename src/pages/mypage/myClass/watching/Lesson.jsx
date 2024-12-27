import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import S from './LessonStyle';

const Lesson = () => {
  const [ lesson, setLesson ] = useState([]);

  useEffect(() => {
    const getLesson = async () => {
      try {
        const response = await fetch(`http://localhost:4000/myClass`);
        const datas = await response.json();
        setLesson(datas);
      } catch (error) {
        console.log("LessonError" , error);
      }
    }

    getLesson()

  }, [])

  // console.log(lesson)

  return (
    <S.Outer className='outer'>

      { lesson && lesson.map((item, i) => (
        <S.Container key={i} className='Container'>
        <S.Wapper className='Wapper'>
          <S.Lesson className='lesson'>
            <img src={item.lessonImageUrl} alt="레슨1" />
            <p className='name'>{item.teacher}</p>
            <p className='lessonTitle'>{item.lesson}</p>
            <FontAwesomeIcon icon={faHeart} className='heart'/>
          </S.Lesson>
        </S.Wapper>
      </S.Container>
      ))
      }

    </S.Outer>
  );
};

export default Lesson;