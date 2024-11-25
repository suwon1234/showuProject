import React from 'react';
import LessonList from './_component/LessonList';
import S from '../style';


const LessonMain = () => {
    return (
        <S.lessonMainWrapper>
            <S.title>레슨 받기</S.title>
            <S.lessonMainTop>
                <S.lessonCategoryWrapper>
                    <select className='lessonCategory' name='lessonClass'>
                        <option disabled selected>
                            과목
                        </option>
                    </select>
                    <select className='lessonCategory' name='lessonPlace'>
                        <option disabled selected>
                            지역
                        </option>
                    </select>
                </S.lessonCategoryWrapper>

                <div className='lessonButtonWraper'>
                    <button className='lessonCreate'>레슨 개설</button>
                </div>
            </S.lessonMainTop>
            <ul className='lessonListWrapper'> 
                <LessonList />
            </ul>
        </S.lessonMainWrapper>
    );
};

export default LessonMain;