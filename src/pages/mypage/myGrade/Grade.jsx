import React, { useEffect, useRef, useState } from 'react';
import S from './GradeStyle';
import Dropdown from './_component/Dropdown';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Grade = () => {
  const navigate = useNavigate();
  const [filesPath, setFilesPath] = useState(null);
  const [fileName, setFileName] = useState(''); // 선택한 파일 이름
  const { currentUser } = useSelector((state) => state.user);
  const jwtToken = localStorage.getItem("jwtToken");
  const userId = currentUser ? currentUser._id : '';

  // console.log("filesPath", filesPath)
  // console.log("fileName", fileName)

  const { 
    register, 
    handleSubmit, 
    setValue,
    formState: { isSubmitting }
  } = useForm({ mode: "onSubmit" });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("selectedFile", selectedFile)
    if (selectedFile) {
      setFileName(selectedFile.name); // 선택된 파일 이름을 상태에 저장
    } else {
      setFileName(''); // 파일이 선택되지 않은 경우 상태 초기화
    }
  };
  

  return (
    <S.Container className='Container'>
      <S.Fieldset>
        <S.Form onSubmit={handleSubmit(async (data) => {
          console.log("form 제출");
          console.log("data", data);
          const formData = new FormData();

          const { exportName, intro, area, field, total, career, portfolio, file } = data;

          // 파일 추가
          const fileInput = document.getElementById('file');
          const selectedFile = fileInput.files[0];
          if (selectedFile) {
            formData.append("file", selectedFile); 
          }

          formData.append("intro", data.intro);
          formData.append("area", data.area);
          formData.append("field", data.field);
          formData.append("total", data.total);
          formData.append("career", data.career);
          formData.append("exportName", userId);
          
          await fetch(`http://localhost:8000/my/up-grade/create`, {
            method: "POST",
            headers: {
              'Authorization': `Bearer ${jwtToken}`
            },
            body: formData  
          })
          .then((res) => res.json())
          .then((res) => {
            if (!res.upgradeSuccess) {
              alert(res.message);
              navigate('/mypage/up-grade/update');
              return;
            }
            // console.log("res", res)
            // console.log("res.createUpgrade", res.createUpgrade)
            const newFilesPath = `http://localhost:8000${res.filePath}`;
            setFilesPath(newFilesPath);
            alert(res.message);
            navigate('/mypage/up-grade/update');
            console.log("등급업 신청 완료");
          })
          .catch((error) => {
            console.error("등급업 신청 중 오류 발생", error);
            alert("등급업 신청 중 오류가 발생했습니다.");
          })
        })}
        >

          <S.Label htmlFor="name">
            <p>전문가 성함</p>
            <span>{currentUser.name}</span>
          </S.Label>

          <S.LabelTextAarea htmlFor="intro">
            <p>자기소개</p>
            <textarea name="intro" id="intro" placeholder='자기소개를 입력하세요' autoComplete='off'
              {...register("intro", { required: true })}
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
              {...register("career", { required: true })}
            />
          </S.LabelSelectcareer>

          <S.Portfolio className='portfolio'>
            <S.Label htmlFor="file">
              <p>포트폴리오</p>
              <input 
                  type="file" id='file' name='file'
                  className='file' autoComplete='off'
                  {...register("file")}
                  onChange={(e) => {
                    handleFileChange(e);
                  }}
              />
              <span>{fileName ? `${fileName}` : '+자료첨부'}</span>
            </S.Label>
          </S.Portfolio>

          <S.UpdateButton>
            <S.Button
              disabled={isSubmitting}
            >
              작성 완료
            </S.Button>
          </S.UpdateButton>

        </S.Form>
      </S.Fieldset>
    </S.Container>
  );
};

export default Grade;
