import React from 'react';

const teamMain = () => {
    return (
        <div className='teamMainWrapper'>
            <h1 className='title'>팀 매칭하기</h1>
            <div className='teamCategoryWrapper'>
                <select className='teamLocation'>지역</select>
                <select className='teamField'>분야</select>
                <select className='teamGender'>성별</select>
                <select className='teamAge'>나이</select>
                <select className='teamMeetDate'>요일</select>
                <select className='teamMeetTime'>시간대</select>
                <button className='teamMakeButton'>
                    팀 만들기
                </button>
            </div>
            <ul className='teamListWrapper'>
            </ul>
        </div>
    );
};

export default teamMain;