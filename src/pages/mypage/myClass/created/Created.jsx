import React, { useEffect, useState } from 'react';
import S from './CreatedStyle';

const Created = () => {
  const [ lesson, setLesson ] = useState([]);

  useEffect(() => {
    const getLesson = async () => {
      try {
        const response = await fetch(`http://localhost:4000/myClass`);
        const datas = await response.json();
        setLesson(datas);
      } catch (error) {
        console.loe("LessonError" , error);
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
          </S.Lesson>
        </S.Wapper>
      </S.Container>
      ))
      }

    </S.Outer>
  );
};

export default Created;