import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import S from "./style";


const TeamJoin = () => {

    return (
        <S.TeamjoinWrapper>
            <S.TeamJoinTopContent>
                <h3>가입 신청</h3>
                <Link to={'/showu/team/teamDetails'}>
                    <FontAwesomeIcon  icon={faX} className="closeButtonicon"/>
                </Link>
            </S.TeamJoinTopContent>
            <S.TeamJoinMiddleContent>
                <h3>개인정보 보호를 위해 연락처를 작성하지 마세요.</h3>
                <p>팀에게 내 프로필이 공개되고 , 신청을 수락하면 내 연락처를 볼 수 있어요</p>
                <textarea  placeholder="팀가입 신청합니다."/>

                <S.TeamJoinAdvice>
                    <h4>이런 내용이 포함되면 좋아요</h4>
                    <ul>
                        <li>살고있는 지역</li>
                        <li>나이</li>
                        <li>실력 및 경력</li>
                    </ul>
                </S.TeamJoinAdvice>
            </S.TeamJoinMiddleContent>
            <S.TeamJoinEtcWrapper>
                <p>가입을 신청하면 원할한 소통을 위해 팀 운영진에게 연락처가 제공되요.</p>
                <p>원할한 소통을위한 <span>개인정보 제 3자 제공</span>에 동의 합니다.</p>
            </S.TeamJoinEtcWrapper>

            <S.SubmitButton>가입 신청하기</S.SubmitButton>

        </S.TeamjoinWrapper>
        );
    };
    

export default TeamJoin;