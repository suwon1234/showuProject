// import React, { useState } from 'react';
// import S from './style';
// import LoginHeader from '../login/_component/LoginHeader';
// import { Link, useNavigate } from 'react-router-dom';
// import {useForm} from 'react-hook-form'
// import Checkbox from '../login/_component/Checkbox';

// const JoinContainer = () => {
//   const [ buttonColor, setButtonColor ] = useState(false);

//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

//   const navigate = useNavigate();
//   const { register, handleSubmit, getValues,
//           formState : { isSubmitting, isSubmitted, errors }
//         } = useForm({ mode : "onChange"});

  

//   return (
//     <S.Container>

//       <LoginHeader />

//       <S.Wapper>
//         <S.JoinBox>
//           <S.title>showU 회원가입</S.title>

//             <S.Form onSubmit={handleSubmit( async (data) => {
//               console.log(data)

//               const { email, password, phone } = data;

//               await fetch(`http://localhost:3000/join`, {
//                 method : "POST",
//                 headers : {
//                   "Content-Type" : "application/json"
//                 },
//                 body : JSON.stringify({
//                   email : email,
//                   password : password,
//                   phone : phone
//                 })
//               })
//               .then((res) => res.json())
//               .catch(console.error)

//             })}>

//               <S.idLabel>
//                 <S.input type="text" id='email' placeholder='이메일' autoComplete="off" 
//                   {...register("email", {
//                     required : true,
//                     pattern : {
//                       value : emailRegex
//                     }
//                   })}
//                 />
//                 {errors?.email?.type === 'required' && (
//                   <p>이메일을 입력해주세요</p>
//                 )}
//                 {errors?.email?.type === 'pattern' && (
//                   <p>이메일 양식에 맞게 입력해주세요</p>
//                 )}
//               </S.idLabel>

//               <S.passwordLabel>
//                 <S.input type="password" id='password' placeholder='비밀번호' autoComplete="off"
//                   {...register("password", {
//                     required : true,
//                     pattern : {
//                       value : passwordRegex
//                     }
//                   })}
//                 />
//                 {errors?.password?.type === 'required' && (
//                   <p>비밀번호를 입력하세요</p>
//                 )}
//                 {errors?.password?.type === 'pattern' && (
//                   <p>소문자, 숫자, 특수문자를 각 하나씩 포함한 8자리 이상이어야 합니다</p>
//                 )}
//                 <S.LockImage src={process.env.PUBLIC_URL + "/images/login/lock.png"} alt="비밀번호 잠금" />
//               </S.passwordLabel>
              
//               <S.idLabel>
//                 <S.input type="password" id='passwordConfirm' placeholder='비밀번호 확인' autoComplete="off"
//                   {...register("passwordConfirm", {
//                     required : true,
//                     validate : {
//                       matchPassword : (value) => {
//                         const { password } = getValues();
//                         console.log(password === value, `password : ${password}, value : ${value}`)
//                         return password === value;
//                       }
//                     }
//                   })}
//                 />
//                 {errors?.passwordConfirm && (
//                   <p>비밀번호를 확인해주세요</p>
//                 )}
//                 <S.LockImage src={process.env.PUBLIC_URL + "/images/login/lock.png"} alt="비밀번호 잠금" />
//               </S.idLabel>
              
//               {/* <S.idLabel>
//                 <S.input type="text" id='email' placeholder='이메일'/>
//               </S.idLabel> */}

//               <S.idLabel>
//                 <S.input type="text" id='phone' placeholder='전화번호(ex.010-1234-5678)'/>
//               </S.idLabel>

//             </S.Form>

//             <Checkbox setButtonColor={setButtonColor}/>
          
            
//             <S.JoinButton
//               disabled={isSubmitting}
//               {...(buttonColor ? { state: "true" } : {})}
//             >가입하기</S.JoinButton>
//             <Link to={'/login'}>
//             <S.LoginButton>로그인으로</S.LoginButton>
//             </Link>
//         </S.JoinBox>

//       </S.Wapper>
//     </S.Container>
//   );
// };

// export default JoinContainer;