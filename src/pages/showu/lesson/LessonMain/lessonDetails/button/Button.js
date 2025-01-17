import React, { useRef, useState } from 'react';
import S from '../style';
import { Link } from 'react-router-dom';
import LessonReservation from '../../lessonReservate/LessonReservation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const Button = () => {
    const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

    if("user.role.enum" === "user"){
        return (
                 <S.RightButtonWrapper>
                    <S.RightTextWrapper>
                        <p className='lessonTitle'></p>
                        <p className='lessonSummary'>원하는 내용을 상담해 보세요</p>
                    </S.RightTextWrapper> 
                        <>
                            <S.ModalOpenButton onClick={() => setModalOpen(true)}>
                                 상담하기
                            </S.ModalOpenButton>
                        </>
                        {
                        modalOpen &&
                         <S.ModalContainer ref={modalBackground} onClick={e => {
                            if (e.target === modalBackground.current) {
                                setModalOpen(false);
                            }
                            }}>
                            <S.ModalContent>
                                <h3>상담 예약하기</h3>
                                <FontAwesomeIcon className='closeIcon' onClick={() => setModalOpen(false)} icon={faX} 
                                style={{
                               
                                }}/>
                                <LessonReservation />
                            </S.ModalContent>
                        </S.ModalContainer>
                        }
                </S.RightButtonWrapper>
        );
    }else if ("user.role.enum" === "admin"){
        return (
            <S.RightButtonWrapper>
               <S.RightTextWrapper>
                   <p className='lessonTitle'></p>
                   <p className='lessonSummary'>레슨을 승인해 주세요</p>
               </S.RightTextWrapper> 
                   <Link>
                       <button> 승인하기 </button>
                   </Link>
                   
           </S.RightButtonWrapper>
        );
    }else {
        return (
            <S.RightButtonWrapper>
               <S.RightTextWrapper>
                   <p className='lessonTitle'></p>
                   <p className='lessonSummary'>레슨을 수정해 주세요</p>
               </S.RightTextWrapper> 
                   <Link to={'/showu/lesson/details/lessonModify'}>
                       <button> 수정하기 </button>
                   </Link>
                   
           </S.RightButtonWrapper>
        );
    }  
};

export default Button;