import React from 'react';
import DaumPostcode from 'react-daum-postcode';

const Postcode = ({ onComplete }) => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname) {
        extraAddress += data.bname;
      }
      if (data.buildingName) {
        extraAddress += extraAddress ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress ? ` (${extraAddress})` : '';
    }

    onComplete(data.zonecode, fullAddress); 
  };

  return (
    <div style={{ position: 'absolute', zIndex: 100, backgroundColor: '#fff', padding: '10px' }}>
      <DaumPostcode onComplete={handleComplete} />
    </div>
  );
};

export default Postcode;
