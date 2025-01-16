import React from 'react';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const UpgradeDetailModal = ({ showModal, selectedUpgrade, closeModal }) => {

  return (
    <div>
      {showModal && selectedUpgrade && (
        <S.ModalOverlay onClick={closeModal}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.ModalHeader>
              <h2>등급업 신청 상세 정보</h2>
              <button onClick={closeModal}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </S.ModalHeader>
            <S.ModalBody>
              <S.ModalContent>
                <div className='ContentWarpper'>
                  <div className='ContentTitle'>전문가 성함</div>
                  <div>{selectedUpgrade.upgrade.exportName.name}</div>
                </div>
              </S.ModalContent>
              <S.ModalContent>
                <div className='ContentWapperIntro'>
                  <div className='ContentTitle'>자기소개</div>
                  <div>{selectedUpgrade.upgrade.intro}</div>
                </div>
              </S.ModalContent>
              <S.ModalContent>
                <div className='ContentWarpper'>
                  <div className='ContentTitle'>전문분야</div> 
                  <div>{selectedUpgrade.upgrade.field}</div>
                </div>
              </S.ModalContent>
              <S.ModalContent>
                <div className='ContentWarpper'>
                  <div className='ContentTitle'>경력사항</div> 
                  <div>{selectedUpgrade.upgrade.career}</div>
                </div>
              </S.ModalContent>
              <S.ModalContent>
                <div className='ContentWarpper'>
                  <div className='ContentTitle'>등급 상태</div> 
                  <div>{selectedUpgrade.upgrade.exportName.role}</div>
                </div>
              </S.ModalContent>

              {selectedUpgrade.file && (
                <S.ModalContent>
                  <div className='ContentWarpper'>
                    <div className='ContentTitle'>포트폴리오</div> 
                    <div>{selectedUpgrade.file.split("/").pop()}</div>
                  </div>{' '}
                  <a
                    href={`http://localhost:8000/admin/upgrade/download-file/${selectedUpgrade.file.split('/').pop()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className='downloadeButton'>포트폴리오 다운로드</span>
                  </a>
                </S.ModalContent>
              )}

              
            </S.ModalBody>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </div>
  );
};

export default UpgradeDetailModal;
