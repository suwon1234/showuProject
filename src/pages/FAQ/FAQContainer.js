import React from 'react';
import FAQ1 from './FAQ1';
import FAQ2 from './FAQ2';
import FAQ3 from './FAQ3';
import FAQ8 from './FAQ8';
import FAQ9 from './FAQ9';
import FAQ10 from './FAQ10';
import FAQ7 from './FAQ7';
import FAQ6 from './FAQ6';
import FAQ5 from './FAQ5';
import FAQ4 from './FAQ4';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const FAQContainer = () => {

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const faqDatas = [
    {
      id : 1,
      question1 : "레슨 개설은 어떻게 하나요?",
      answer1 : "전문가 등급만 레슨을 개설할 수 있습니다. 마이페이지 > 등급업 신청에서 정보(자기소개, 경력사항, 전문분야 등)작성하여 승인이 완료되면 전문가로 등급업 후, 레슨을 개설할 수 있습니다."
    },
    {
      id : 2,
      question2 : "팀 매칭은 어떻게 이용하나요?",
      answer2 : "팀 매칭 페이지에서 관심있는 팀에 가입 신청을 하거나 직접 팀원 모집 게시글을 작성할 수 있습니다."
    },
    {
      id : 3,
      question3 : "경매 Shop은 어떻게 참여하나요?",
      answer3 : "경매 페이지에서 참여하려는 상품을 선택하고 입찰 금액을 입력하세요. 경매 종료 시점에 가장 높은 금액을 입찰한 사용자가 낙찰받게 됩니다."
    },
    {
      id : 4,
      question4 : "커뮤니티 News에서 제보는 어떻게 하나요?",
      answer4 : "커뮤니티 > News 우측 상단의 제보하기를 클릭한 뒤 제보하기를 작성할 수 있습니다. 제보 주신 내용은 관리자의 검토 이후 승인 처리가 되면, showU News탭에서 확인하실 수 있습니다."
    },
    {
      id : 5,
      question5 : "회원가입 없이 서비스를 이용할 수 있나요?",
      answer5 : "일부 기능(예: showu, shop, vod, 예약, 커뮤니티 열람)은 비회원으로 이용할 수 있지만, 레슨 예약, 팀 매칭, shop 구매, 공간/티켓 예매 등 주요 기능은 회원가입이 필요합니다."
    },
    {
      id : 6,
      question6 : "공간 대여는 어떻게 신청하나요?",
      answer6 : "공간 대여는 원하는 날짜와 시간을 선택하고, 대여할 공간의 상세 정보를 확인한 후 예약을 진행할 수 있습니다. 결제 후 예약이 확정됩니다."
    },
    {
      id : 7,
      question7 : "티켓을 예매 후 취소할 수 있나요?",
      answer7 : "마이페이지 > 티켓 예매 내역에서 취소하고 싶은 티켓 클릭 후 티켓을 취소할 수 있습니다."
    },
    {
      id : 8,
      question8 : "비밀번호를 잊어버렸어요. 어떻게 변경하나요?",
      answer8 : "로그인 > '비밀번호 변경' 링크 클릭한 후, 성함과 이메일 주소를 입력하면 이메일 인증 절차를 걸쳐, 새 비밀번호로 변경이 가능합니다."
    },
    {
      id : 9,
      question9 : "아이디를 찾을 수 없는 경우 어떻게 하나요?",
      answer9 : "아이디를 찾을 수 없는 경우, '아이디 찾기'에서 성함과 휴대폰 번호로 확인할 수 있습니다."
    },
    {
      id : 10,
      question10 : "로그인 후 회원가입 정보가 잘못된 것 같아요. 어떻게 수정하나요?",
      answer10 : "로그인 후 '회원 정보 관리' 페이지에서 회원가입 시 입력한 정보(비밀번호, 전화번호)를 수정할 수 있습니다. 변경 후 변경 완료을 눌러 업데이트할 수 있습니다."
    }
  ]

  return (
    <>
      <S.Container className='Container'>
        <S.Title className='fqaTitle'>
          <p>자주 묻는 질문(FAQ)</p>
        </S.Title>
        <S.Ul>
          <li>
            <FAQ1
              faqDatas={faqDatas}
            />
          </li>
          <li>
            <FAQ2
              faqDatas={faqDatas}
            />
          </li>
          <li>
            <FAQ3
              faqDatas={faqDatas}
            />
          </li>
          <li>
            <FAQ4
              faqDatas={faqDatas}
            />
          </li>
          <li>
            <FAQ5
              faqDatas={faqDatas}
            />
          </li>
          <li>
            <FAQ6
              faqDatas={faqDatas}
            />
          </li>
          <li>
            <FAQ7
              faqDatas={faqDatas}
            />
          </li>
          <li>
            <FAQ8
              faqDatas={faqDatas}
            />
          </li>
          <li>
            <FAQ9
              faqDatas={faqDatas}
            />
          </li>
          <li>
            <FAQ10
              faqDatas={faqDatas}
            />
          </li>
        </S.Ul>
      </S.Container>
      <S.ScrollTop onClick={handleScrollTop}>
        <FontAwesomeIcon icon={faArrowUp} className="upicon" />
      </S.ScrollTop>
    </>  
  );
};

export default FAQContainer;