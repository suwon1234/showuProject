import React from 'react';
import { Link } from 'react-router-dom';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

const TeamDetails = () => {
    return (
        <>
            <S.TeamDetailsWrapper>
                <S.TeamDetailsLeftContentsWrapper>
                    <S.TeamDetails >
                        <S.TeamDetailSummary>
                            <img className='TeamThumbnail'/>
                            <div className='TeamTitleWrapper'>
                                <S.TeamTitle>
                                    연기 연습 (분당) 
                                </S.TeamTitle>
                                <S.TeamInfomation>
                                    <span>남자</span>
                                    <span>연기</span>
                                    <span>20대</span>
                                    <span>토요일 오후</span>
                                    <span>취미 연습</span>
                                </S.TeamInfomation>
                            </div>
                        </S.TeamDetailSummary>

                        <S.TeamCharactersWrapper>
                            <div>
                                <div className='TeamCharacter'>
                                    <FontAwesomeIcon icon={faStar} className='starIcon'/>
                                    <span>남자만</span>
                                </div>
                                <div className='TeamCharacter'>
                                    <FontAwesomeIcon icon={faStar} className='starIcon'/>                    
                                    <span>연기</span>
                                </div>
                            </div>
                            <div>
                                <div className='TeamCharacter'>
                                    <FontAwesomeIcon icon={faStar} className='starIcon'/>  
                                    <span>실력 무관</span>
                                </div>
                                <div className='TeamCharacter'>
                                    <FontAwesomeIcon icon={faStar} className='starIcon'/>  
                                    <span>토요일 오후 연습</span>
                                </div>
                            </div>
                        </S.TeamCharactersWrapper>
                    </S.TeamDetails>
                    <S.ButtonWrapper>
                        <Link to={"/showu/team/teamJoin"}>
                            <S.SubscriptionButton>
                                가입 신청하기
                            </S.SubscriptionButton>

                        </Link>
                        <Link to="/showu/team">
                            <S.ClosedButton>
                                뒤로 가기
                            </S.ClosedButton>
                        </Link>
                    </S.ButtonWrapper>
                </S.TeamDetailsLeftContentsWrapper>
            <S.TeamDetailsRightContentsWrapper>
                <S.TeamIntroduceContents>
                    안녕하십니까, 분당에서 취미로 연기 연습 하고 있습니다. 
                    <br/>
                    현재 5명 정도 모여서 서로 연기 봐주면서 진행하고 있습니다 .
                    <br/>
                    <br/>
                    평일은 고정적인 요일은 없으며, 오후시간대에 연습을 하고 있습니다.
                    <br/> <br/>
                    주말은  고정적으로 오후 2시부터 6시 까지 연습을 진행하고 있습니다.
                    <br/>
                    연기가 좋으신 분들이나 같이 재미있게 연습 하실 분 모집하고 있습니다.
                    <br/> <br/>
                    저희 팀 규칙 입니다, 
                    <br/> <br/>
                    원할한 연습을 위해 많은 양해 부탁 드립니다. 
                    <br/> <br/>
                    1. 월 2회 미 참여시 방출(주말)
                    <br/>
                    2. 회비 미납 시 방출 (월말까지)
                    <br/>
                    3. 기타 소란 및 다툼 발생 시 방출
                    <br/> <br/>
                    원활한 팀 운영 및 유지를 위해 내용 숙지 부탁 드립니다.
                    <br/> <br/>
                    저희 팀에 가입을 희망하시는 분은 010-1234-5678로 성함과 나이를 함께 
                    보내주시면 카카오톡 단체 채팅방에 초대 드리도록 하겠습니다. 
                    <br/> <br/>
                    가임 신청 버튼으로도 가입 받고 있습니다. 
                    <br/> <br/>
                    연기를 좋아하시는 분들은 언제든 연락 주시기 바랍니다.
                </S.TeamIntroduceContents>
                <S.TeamLikeButtonWrapper>
                    <FontAwesomeIcon  icon={faHeart} className='likeButtonIcon'/>
                    <span>100</span>
                </S.TeamLikeButtonWrapper>
                <div>
                    <div className='DetailsETC'>
                        <span>조회 9,534</span>
                        <span>신청 34</span>
                    </div>
                    <div className='Updatetme'>
                        업데이트 15일 전
                    </div>
                </div>
            </S.TeamDetailsRightContentsWrapper>
        </S.TeamDetailsWrapper>
        </>
    );
};

export default TeamDetails;