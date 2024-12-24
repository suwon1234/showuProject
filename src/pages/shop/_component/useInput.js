// import { useState } from "react"

// const useInput = (initialValue) => {
//   const [value, setValue] = useState(initialValue)
//   const onChange = (e) => {
//     setValue(e.target.value)
//   }
//   return [value, onChange, setValue]
// }

// export default useInput;

// import { useState } from 'react';

// const useInput = (initialValue) => {
//   const [value, setValue] = useState(initialValue);

//   const onChange = (e) => setValue(e.target.value);

//   return [value, onChange];
// };

// export default useInput;

import { useState } from 'react';

const useInput = (initialValue = '') => {  // 초기 값이 빈 문자열로 설정
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => setValue(e.target.value);

  return [value, onChange];  // value와 onChange를 반환
};

export default useInput;