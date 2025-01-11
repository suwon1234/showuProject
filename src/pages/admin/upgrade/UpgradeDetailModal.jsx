import React from 'react';
import S from './style';

const UpgradeDetailModal = ({ showModal, selectedUpgrade, closeModal }) => {

  return (
    <div>
      {showModal && selectedUpgrade && (
        <S.ModalOverlay onClick={closeModal}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.ModalHeader>
              <h2>등급업 신청 상세 정보</h2>
              <button onClick={closeModal}>X</button>
            </S.ModalHeader>
            <S.ModalBody>
              <p><strong>전문가 성함:</strong> {selectedUpgrade.upgrade.exportName.name}</p>
              <p><strong>전문가 자기소개:</strong> {selectedUpgrade.upgrade.intro}</p>
              <p><strong>전문분야:</strong> {selectedUpgrade.upgrade.field}</p>
              <p><strong>경력사항:</strong> {selectedUpgrade.upgrade.career}</p>
              <p><strong>포트폴리오:</strong> {selectedUpgrade.file}</p>
              <p><strong>등급 상태:</strong> {selectedUpgrade.upgrade.exportName.role}</p>

              {selectedUpgrade.file && (
                <p>
                  <strong>첨부 파일:</strong>{' '}
                  <a
                    href={`http://localhost:8000/admin/upgrade/download-file/${selectedUpgrade.file.split('/').pop()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    파일 다운로드
                  </a>
                </p>
              )}

              
            </S.ModalBody>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </div>
  );
};

export default UpgradeDetailModal;
