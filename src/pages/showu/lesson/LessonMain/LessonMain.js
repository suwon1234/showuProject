import React from 'react';
import LessonList from './_component/LessonList';
import S from '../style';


const LessonMain = () => {
    return (
        <S.LessonMainWrapper>
            <S.LessonTitle>레슨 받기</S.LessonTitle>
            <S.LessonMainTop>
                <S.LessonCategoryWrapper>
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
                </S.LessonCategoryWrapper>

                <S.LessonButtonWrapper>
                    <button className='lessonCreate'>레슨 개설하기</button>
                </S.LessonButtonWrapper>
            </S.LessonMainTop>
            <S.LessonListWrapper> 
                <LessonList />
            </S.LessonListWrapper>
        </S.LessonMainWrapper>
    );
};

export default LessonMain;