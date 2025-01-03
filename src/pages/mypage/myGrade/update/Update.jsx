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

  const [userInfo, setUserInfo] = useState({
    intro: '',
    area: '',
    field: '',
    total: '',
    career: '',
    portfolio: ''
  });

  const { 
    register, 
    handleSubmit, 
    setValue,
    formState: { isSubmitting, errors }
  } = useForm({ mode: "onSubmit" });

  useEffect(() => {
    //사용자 등급업 정보 가져오기
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(`http://localhost:8000/users/upgrade/${userId}`, {
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
          setValue("portfolio", data.portfolio || "");
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
    const { intro, area, field, total, career, portfolio } = data;

    try {
      const response = await fetch(`http://localhost:8000/users/upgrade/modify/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({
          exportName: userId,
          intro: intro,
          area: area,
          field: field,
          total: total,
          career: career,
          portfolio: portfolio,
        }),
      });

      const result = await response.json();

      if (!result.modifySuccess) {
        return alert(result.message);
      }

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
              <input type="file" id="file" className="file" autoComplete="off" />
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
