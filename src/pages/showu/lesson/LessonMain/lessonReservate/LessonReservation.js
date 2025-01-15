import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CalendarComponent from './calender/CalendarComponent';
import S from './style';

const LessonReservation = () => {
    return (
        <>
           
            <S.ContentsWrapper>
                <S.LeftContent>
                    <div className='ContentsWrapper'>
                        <p className='InsertName'>이름</p>
                        <input type='text'/>
                    </div>
                    <div className='ContentsWrapper'>
                        <p className='InsertPhone'>전화번호</p>
                        <input type='text'/>
                    </div>
                    <div className='ContentsWrapper'>
                        <p className='InsertEmail'>이메일</p>
                        <input type='text'/>
                    </div>
                    <div className='NoticeContent'>
                        <p className='InsertNote'>
                            비고
                        </p>
                        <textarea />
                    </div>
                </S.LeftContent>

                <S.RightContent>
                    <p>방문날짜 선택하기</p>
                    <CalendarComponent />
                    <S.SubmitButton type='submit'>예약 하기</S.SubmitButton>
                </S.RightContent>
            </S.ContentsWrapper>
        </>
    );
};

export default LessonReservation;