import React, { useState } from 'react';
import S from './style';
const LessonModified = () => {
 
        //  const [nameVal, setNameval ] = useState("");
        //     const [lessonNameVal, setLessonNameVal] = useState("");
        //     const [callTimeVal, setCallTimeVal] = useState("");
        //     const [categoryVal , setCategoryval] = useState("");
        //     const [addreesVal, setAddressVal] = useState("");
        //     const [recordVal1, setRecordVal1] = useState({});
        //     const [recordVal2, setRecordVal2] = useState({});
        //     const [recordVal3, setRecordVal3] = useState({});
        //    const record = {
        //     record1 : recordVal1,
        //     record2 : recordVal2,
        //     record3 : recordVal3
        //    }
        
        //     const inputName = (e) =>{
        //         setNameval(e.target.value)
        //         return nameVal
        //     }
        
        //     const inputLessonName = (e) => {
        //         setLessonNameVal(e.target.value)
        //         return lessonNameVal
        //     }
        
        //     const inputCallTime = (e) => {
        //         setCallTimeVal(e.target.value)
        //         return callTimeVal
        //     }
        
        //     const inputAddress = (e)=> {
        //         setAddressVal(e.target.value)
        //         return addreesVal
        //     }
        
        
        //     const changeToactive = (e)=> {
        //             setCategoryval(e.target.value)
        //         return categoryVal
        //     }
        
        //     // const inputRecords = (e)=> {
        //     //     setRecordVal1({
        //     //         recordHistoryTitle : inputRecordHistory,
        //     //         periodDetails : inputRecordsPeriod,
        //     //         recordedSummary : inputRecordSummary
        //     //     })
        //     // }
        
        //     const inputRecordHistory = (e)=> {
        
        //     }
        
        //     console.log(categoryVal)
        
        
            return (
                <S.LessonMakeWrapper>
                    <S.LessonMakeTopBg></S.LessonMakeTopBg>
                    <S.LessonMakeThumbnail/>
                    <S.LessonMakingFormWrapper>
                        <S.LessonMakingTitle>
                            ShowU 레슨 수정하기
                        </S.LessonMakingTitle>
                        <form className='LessonMakingForm'>
                            <div className='LessonProfileWrapper'>
                                <S.MakeTitle>프로필 등록</S.MakeTitle>
                                <S.ProfileRegistration>
                                    <label htmlFor='tumbnailImage'>
                                        <S.ProfileThumbnail alt='프로필 썸네일' src=''/>
                                        <input type='file' id='tumbnailImage'>
                                        </input>
                                    </label>
                                    <S.ProfileInputWrapper>
                                       <h3>홍길동</h3>
                                        <h3>씬앤컷 SCENE & CUT : 설대봉 디렉터</h3>
                                        <input  type='text'  placeholder='연락 가능시간'/>
                                    </S.ProfileInputWrapper>   
                                </S.ProfileRegistration>
                            </div>
        
                            <S.CategoryRegistration>
                                <S.MakeTitle>분야 등록</S.MakeTitle>
                                <S.LessonCategoryWrapper>
                                    <button type='button' value="음악">음악</button>
                                    <button type='button'  value="연기" className='active'>연기</button>
                                    <button type='button'  value="마술">마술</button> 
                                </S.LessonCategoryWrapper>
                            </S.CategoryRegistration>
        
                            <S.LocationRegistation>
                                <S.MakeTitle>위치</S.MakeTitle>
                                <S.LessonLocationWrapper>
                                    <S.LessonLocation   placeholder='주소를 입력해 주세요 ex) 서울시 강남구'/>
                                    <S.LessonLocation placeholder='상세 주소를 입력해 주세요'/>
                                </S.LessonLocationWrapper>
                            </S.LocationRegistation>
        
                            <S.DetailsRegistration>
                                <S.MakeTitle>레슨 상세설명</S.MakeTitle>
                                <S.LessonDetails placeholder='상세설명을 적어주세요'/>
                            </S.DetailsRegistration>
        
                            <S.LessonEtcRegistration>
                                <S.MakeTitle>경력 / 이력 / 학력</S.MakeTitle>
                                <S.EtcWrapper>
                                    <S.EtcDetails placeholder='총 경력을 적어주세요'/>
                                    {/*  recode : {
                                        record1 : {
                                        recordIndex : {type : Number}, 
                                        recordHistoryTitle : { type : String }, 
                                        periodDetails : { type : String }, 
                                        periodMonth : { type : String }, 
                                        recordedSummary :{ type : String }},
        
                                        record2 : {recordIndex : {type : Number}, recordHistoryTitle : { type : String }, periodDetails : { type : String }, periodMonth : { type : String }, recordedSummary :{ type : String }},
                                        record3 : {recordIndex : {type : Number}, recordHistoryTitle : { type : String }, periodDetails : { type : String }, periodMonth : { type : String }, recordedSummary :{ type : String }},
                                    }, */}
                                    <S.LessonRecord>
                                        <input type='text' placeholder='첫번째 이력사항을 적어주세요 ' className='recordHistoryinput' />
                                        <input type='text' placeholder='첫번째 이력기간을 적어주세요 ' className='recordHistoryinput'/>
                                        <input type='text' placeholder='첫번째  이력내용을 적어주세요 ' className='recordHistoryinput'/>
                                    </S.LessonRecord>
        
                                    <S.LessonRecord>
                                        <input type='text' placeholder='두번째 이력사항을 적어주세요 ' className='recordHistoryinput' />
                                        <input type='text' placeholder='두번째 이력기간을 적어주세요 ' className='recordHistoryinput'/>
                                        <input type='text' placeholder='두번째 이력내용을 적어주세요 ' className='recordHistoryinput'/>
                                    </S.LessonRecord>
        
                                    <S.LessonRecord>
                                        <input type='text' placeholder='세번째 이력사항을 적어주세요 ' className='recordHistoryinput' />
                                        <input type='text' placeholder='세번째 이력기간을 적어주세요 ' className='recordHistoryinput'/>
                                        <input type='text' placeholder='세번째 이력내용을 적어주세요 ' className='recordHistoryinput'/>
                                    </S.LessonRecord>
                                    
                                    {/* <S.EtcDetails placeholder='이력 사항을 입력해 주세요'/> */}
                                    {/* education : { educationTitle : { type : String }, educationPeriod : { type : String }, educationSubject : { type : String }} */}
                                    
                                    <S.Educations>
                                        <input type='text' className='educationsInput' placeholder='학력사항을 입력해 주세요 '/>                 
                                        <input type='text' className='educationsInput'placeholder='기간을 입력해 주세요'/>                 
                                        <input type='text' className='educationsInput'placeholder='전공 과목을 입력해 주세요' />                 
                                    </S.Educations>
        
                                    {/* <S.EtcDetails placeholder='학력 사항을 입력해 주세요'/> */}
                                </S.EtcWrapper>
                            </S.LessonEtcRegistration>
        
                            <S.PortfoilosRegistration>
                                <S.MakeTitle>포트폴리오</S.MakeTitle>
                                <S.PortfoilosRegistrationButton >등록하기</S.PortfoilosRegistrationButton>
                                <S.PortfolioThumbnailWrapper>
                                    <S.PortfolioThumbnail/>
                                    <S.PortfolioThumbnail/>
                                </S.PortfolioThumbnailWrapper>
                            </S.PortfoilosRegistration>
        
                            <S.MediasRegistration>
                                <S.MakeTitle>동영상</S.MakeTitle>
                                <S.MediasRegistrationButton>등록하기</S.MediasRegistrationButton>
                                <S.MediasThumbnailWrapper>
                                    <S.MediasThumbnail/>
                                    <S.MediasThumbnail/>
                                </S.MediasThumbnailWrapper>
                            </S.MediasRegistration>
        
                            <S.LessonNoticeRegistration>
                                <S.MakeTitle>기타 공지사항</S.MakeTitle>
                                <S.LessonNotice placeholder='기타 공지사항을 적어주세요'/>
                            </S.LessonNoticeRegistration>
                            <S.ButtonWrapper>
                                <S.CancleButton>취소하기</S.CancleButton>
                                <S.ModiftButton>수정 하기</S.ModiftButton>
        
                            </S.ButtonWrapper>
                        </form>
                        
                    </S.LessonMakingFormWrapper>
                </S.LessonMakeWrapper>
    );
};

export default LessonModified;