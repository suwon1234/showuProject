import React from 'react';
import LessonList from './_component/LessonList';
import S from '../style';
import SelectSido from '../../team/teamMain/_component/SelectSido';
import { Link } from 'react-router-dom';


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
                        <option value={"music"}>음악</option>
                        <option value={"acting"}>연기</option>
                        <option value={"magic"}>마술</option>
                    </select>
                   <SelectSido/>
                </S.LessonCategoryWrapper>

                <S.LessonButtonWrapper>
                    <Link to={"/showu/lesson/lessonMake"}>
                        <button className='lessonCreate'>레슨 개설하기</button>
                    </Link>
                </S.LessonButtonWrapper>
            </S.LessonMainTop>
            <S.LessonListWrapper> 
                <LessonList />
            </S.LessonListWrapper>
        </S.LessonMainWrapper>
    );
};

export default LessonMain;