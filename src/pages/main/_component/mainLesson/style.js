import styled from 'styled-components';

const S = {};

  S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:#000; 
    min-height: 100vh;
    padding: 60px 20px;

    & p{
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 10px;
    }
  `

  S.LessonWrapper = styled.div`
    display: flex;
    gap: 30px;
   
  `

  S.MoreLesson = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    & .more, 
    & span {
      font-size: 20px;
      margin-bottom: 30px;
    }
  `

  S.LessonBox = styled.div`
    width: 290px;
    height: 400px;
    border: 1px solid #444444;
    border-radius: 10px;
    padding: 36px 30px;

    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 50px;
    }
  `

  S.category = styled.div`
    display: flex;
    gap: 10px;

    & .category {
      width: 50px;
      background-color: #ffd400;
      color: #000;
      padding: 5px;
      border-radius: 20px;
      text-align: center;
    }

    & .total {
      width: 50px;
      background-color: #797979;
      color: #fff;
      padding: 5px;
      border-radius: 20px;
      text-align: center;
    }
  `

  S.UserInfo = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    gap: 20px;

    & .userName {
      font-weight: 500;
    }

    & .userName,
    & .address {
      font-size: 16px;
    }
  `

  S.Address = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
  `

  S.LessonExplantion = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 30px;

    & .lessonName {
      font-size: 20px;
      font-weight: 500;
    }

    & .lessonDetail {
      color: #797979;
    }
  `

export default S;