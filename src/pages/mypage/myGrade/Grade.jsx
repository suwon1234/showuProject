import React, { useState } from 'react';
import S from './GradeStyle';
import Dropdown from './_component/Dropdown';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Grade = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const jwtToken = localStorage.getItem("jwtToken");
  const userId = currentUser ? currentUser._id : '';


  const { 
    register, 
    handleSubmit, 
    setValue,
    formState : { isSubmitting, errors }
  } = useForm({ mode : "onSubmit"});


  return (
    <S.Container className='Container'>
      <S.Fieldset>
        <S.Form onSubmit={ handleSubmit( async (data) => {
          console.log("form 제출")
          console.log("data", data)

          const { exportName, intro, area, field, total, career, portfolio } = data;

          await fetch(`http://localhost:8000/users/upgrade`, {
            method : "POST",
            headers : {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${jwtToken}`
            },
            body : JSON.stringify({
              exportName : userId,
              intro : intro,
              area : area,
              field : field,
              total : total,
              career : career,
              portfolio : portfolio
            })
          })
          .then((res) => res.json())
          .then((res) => {
            if(!res.upgradeSuccess){
              return alert(res.message)
            }
            alert(res.message)
            navigate('/mypage/up-grade/update')
            console.log("등급업 신청 완료")
          })
          .catch((error) => {
            console.error("등급업 신청 중 오류 발생", error)
            alert("등급업 신청 중 오류가 발생했습니다.")
          })
        })}
        >

          <S.Label htmlFor="name">
            <p>전문가 성함</p>
            <span>{currentUser.name}</span>
          </S.Label>

            <S.LabelTextAarea htmlFor="intro">
              <p>자기소개</p>
              <textarea name="intro" id="intro"  placeholder='자기소개를 입력하세요' autoComplete='off'
                {...register("intro", {
                  required : true
                })}
              ></textarea>
            </S.LabelTextAarea>

            {/* 지역, 전문 분야, 총 경력기간 */}
            <Dropdown 
              register={register} 
              setValue={setValue} 
            />

          <S.LabelSelectcareer htmlFor="career">
            <p>경력사항</p>
            <input type="text" name='career' id='career' placeholder='회사명ㆍ부서' autoComplete='off'
              {...register("career", {
                required : true
              })}
            />
          </S.LabelSelectcareer>

          <S.Portfolio className='portfolio'>
            <S.Label htmlFor="file">
              <p>포트폴리오</p>
              <input type="file" id='file' className='file' autoComplete='off'
                {...register("file")}
              />
            </S.Label>
          </S.Portfolio>

          <S.UpdateButton>
            <S.Button
              disabled={isSubmitting}
              // onClick={() => console.log("클릭")}
            >
            작성 완료</S.Button>
          </S.UpdateButton>

        </S.Form>
      </S.Fieldset>
    </S.Container>
  );
};

export default Grade;