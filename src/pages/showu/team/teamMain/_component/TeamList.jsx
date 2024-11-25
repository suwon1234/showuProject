import React from 'react';

const teamList = () => {
    return (
        <li className='teamList'>
            <h3 className='teamTitleWrapper'>
                <span className='teamTitle'>연기연습</span>
                <span className='teamLocation'>분당</span>
            </h3>
            <p className='teamLocationWrapper'>
                <span className='teamLocationSiDo'>경기도 성남시</span>
                <span className='teamLicationAddress'>주소</span>
            </p>
            <p className='teamSummaryWrapper'> 
                <span className='teamGender'>남자</span>
                <span className='teamField'>연기</span>
                <span className='teamAge'>20대</span>
                <span className='teamMeetDate'>토요일 오후</span>
                <span className='teamCategory'>취미연습</span>
            </p>
            <p className='teamEtc'>
                <span className='teamViews'>조회 9,534</span>
                <span className='teamSubscription'>신청 34</span>
            </p>
            <div className='teamThumbnailWrapper'>
                <img className='teamThumbnail'/>
            </div>
        </li>
    );
};

export default teamList;