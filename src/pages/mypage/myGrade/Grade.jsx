import React, { useEffect, useRef, useState } from 'react';
import S from './GradeStyle';
import Dropdown from './_component/Dropdown';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Grade = () => {
  const navigate = useNavigate();
  const filesRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [filesPath, setFilesPath] = useState(null);
  const { currentUser } = useSelector((state) => state.user);
  const jwtToken = localStorage.getItem("jwtToken");
  const userId = currentUser ? currentUser._id : '';

  console.log("filesPath", filesPath);
  useEffect(() => {
    console.log("filesRef.current:", filesRef.current);
  }, []);

  const { 
    register, 
    handleSubmit, 
    setValue,
    formState: { isSubmitting, errors }
  } = useForm({ mode: "onSubmit" });

  // 파일 선택 시 실행되는 함수
  const handleFileChange = (e) => {
    console.log("파일 선택 이벤트:", e);
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      console.log("파일이 선택되지 않았습니다.");
    }
    console.log("선택된 파일:", file);
  };
  

  const saveFiles = async () => {
    if (filesRef.current && filesRef.current.files.length > 0) {
      const formData = new FormData();
      formData.append("file", filesRef.current.files[0]); // 파일 추가
  
      console.log("파일 선택됨:", filesRef.current.files[0]);
  
      const config = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        body: formData,
      };
  
      await fetch("http://localhost:8000/my/up-grade/files", config)
        .then((res) => res.json())
        .then((res) => {
          console.log("서버 응답:", res);
          const newFilesPath = `http://localhost:8000${res.filePath}`;
          setFilesPath(newFilesPath);
        })
        .catch((error) => {
          console.error("파일 업로드 오류:", error);
        });
    } else {
      console.log("파일이 선택되지 않았습니다.");
    }
  };
  
  

  return (
    <S.Container className='Container'>
      <S.Fieldset>
        <S.Form onSubmit={handleSubmit(async (data) => {
          console.log("form 제출");
          console.log("data", data);

          const { exportName, intro, area, field, total, career, portfolio, file } = data;

          await fetch(`http://localhost:8000/users/upgrade`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${jwtToken}`
            },
            body: JSON.stringify({
              exportName: userId,
              intro: intro,
              area: area,
              field: field,
              total: total,
              career: career,
              portfolio: portfolio,
              file : file
            })
          })
          .then((res) => res.json())
          .then((res) => {
            if (!res.upgradeSuccess) {
              alert(res.message);
              navigate('/mypage/up-grade/update');
              return;
            }
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
                  ref={filesRef}
                  onChange={handleFileChange}
                  {...register("file")}
              />
            </S.Label>
            {fileName && <p>선택된 파일: {fileName}</p>}  {/* 파일 이름 표시 */}
          </S.Portfolio>

          <S.UpdateButton>
            <S.Button
              disabled={isSubmitting}
              onClick={saveFiles}
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
