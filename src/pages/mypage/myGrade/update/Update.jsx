import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dropdown from '../_component/Dropdown';
import S from '../GradeStyle';

const Update = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const jwtToken = localStorage.getItem("jwtToken");
  const userId = currentUser ? currentUser._id : '';
  const [filesPath, setFilesPath] = useState(null);
  const [fileName, setFileName] = useState(''); // 선택한 파일 이름


  const [userInfo, setUserInfo] = useState({
    intro: '',
    area: '',
    field: '',
    total: '',
    career: '',
    file: ''
  });

  const { 
    register, 
    handleSubmit, 
    setValue,
    formState: { isSubmitting, errors }
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

  useEffect(() => {
    //사용자 등급업 정보 가져오기
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(`http://localhost:8000/my/up-grade/create/${userId}`, {
          headers: {
            "Authorization": `Bearer ${jwtToken}`,
          },
        });
        const data = await response.json();
        if (data) {
          setUserInfo(data);

          // 초기값 설정
          setValue("intro", data.intro || "");
          setValue("area", data.area || "");
          setValue("field", data.field || "");
          setValue("total", data.total || "");
          setValue("career", data.career || "");
          setValue("file", data.file || "");
        }
      } catch (error) {
        console.error("등급업 정보 가져오기 실패", error);
        alert("등급업 정보를 불러오는 데 실패했습니다.");
      }
    };

    if (userId) {
      fetchUserInfo();
    }
  }, [userId, jwtToken, setValue]);

  const updateUserInfo = async (data) => {
    const formData = new FormData();

    const { intro, area, field, total, career, portfolio } = data;

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

    try {
      const response = await fetch(`http://localhost:8000/my/up-grade/modify/${userId}`, {
        method: "PUT",
        headers: {
          'Authorization': `Bearer ${jwtToken}`,
        },
        body: formData
      });

      const result = await response.json();

      if (!result.modifySuccess) {
        return alert(result.message);
      }
      
      const updateFilesPath = `http://localhost:8000${result.filePath}`;
      setFilesPath(updateFilesPath);
      alert(result.message);
      console.log("등급업 수정 완료");
      console.log(result.currentUser);

    } catch (error) {
      console.error("등급업 수정 중 오류 발생", error);
      alert("등급업 수정 중 오류가 발생했습니다.");
    }
  };

  return (
    <S.Container className="Container">
      <S.Fieldset>
        <S.Form onSubmit={handleSubmit(updateUserInfo)}>
          <S.Label htmlFor="name">
            <p>전문가 성함</p>
            <span>{currentUser.name}</span>
          </S.Label>

          <S.LabelTextAarea htmlFor="intro">
            <p>자기소개</p>
            <textarea
              name="intro"
              id="intro"
              placeholder={userInfo.intro || '자기소개를 입력하세요'}
              autoComplete="off"
              {...register("intro", { required: true })}
            ></textarea>
          </S.LabelTextAarea>

          {/* 지역, 전문 분야, 총 경력기간 */}
          <Dropdown register={register} setValue={setValue} userInfo={userInfo} />

          <S.LabelSelectcareer htmlFor="career">
            <p>경력사항</p>
            <input
              type="text"
              name="career"
              id="career"
              placeholder={userInfo.career || "회사명ㆍ부서"}
              autoComplete="off"
              {...register("career", { required: true })}
            />
          </S.LabelSelectcareer>

          <S.Portfolio className="portfolio">
            <S.Label htmlFor="file">
              <p>포트폴리오</p>
              <input 
                type="file" id="file" 
                className="file" autoComplete="off"
                onChange={(e) => {
                  handleFileChange(e);
                }}
              />
              <span>{fileName ? fileName : userInfo.file ? userInfo.file : '+자료첨부'}</span>
            </S.Label>
          </S.Portfolio>

            <S.Button 
              disabled={isSubmitting}
              className='update'
            >수정 완료</S.Button>

        </S.Form>

        <S.Button 
          onClick={() => navigate("/mypage")}
          className='back'
        >이전으로</S.Button>

      </S.Fieldset>
    </S.Container>
  );
};

export default Update;
