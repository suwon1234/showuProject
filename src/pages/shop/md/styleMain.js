// styleMain.js
import styled from "styled-components";

const S = {};

  S.MainWrapper = styled.div`
    background-color: #000;
    `

  S.MdTitle = styled.div`
  
    .md-title {
      font-weight: bold;
      font-size: 30px;
      text-align: center;
      margin-top : 50px;
      color: #ffd400; 
    }

    .icon1 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 5px;
      height: 100%;
    }
  `

  S.BestTitle = styled.div`

    .best-title {
      font-size: 30px;
      font-weight: bold;
      color : #fff;
      margin: 10px 0 50px 350px; 
    }
  `



    // .best-title {
    //   font-size: 30px;
    //   font-weight: bold;
    //   color : #fff;
    //   margin: 10px 0 50px 350px;
    // }

    // .best-name{
    //   font-weight: bold;
    // }

    // .best-price{
    //   font-weight: bold;

    // }

    // .md-name{
    //   font-weight: bold;

    // }

    // .md-price{
    //   font-weight: bold;

    // }
  
  

  // S.IconWrapper = styled.div`
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   margin-top: 5px;
  //   height: 100%;

  //   .icon1 {
  //     font-size: 20px;

  //     path {
  //       color : #ffd400;
  //     }
  //   }
  // `

  S.IconWrapper2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    height: 100%;

    .icon1 {
      font-size: 20px;

      path {
        color : #ffd400;
      }
    }
  `

  S.BestWrapper = styled.div`
    margin-top : 50px;
  /* align-items: center; */
    /* display: flex;
    flex-direction: row; */
    .best-title {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 40px;
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;

    }
  `

  S.BestImage = styled.image`

  & img {
    width: 300px;
    height: 300px;
  }
  `


  S.MdWrapper = styled.div`
  margin-top: 30px;
  `

  S.MdList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  `


  S.MdImage = styled.image`

    & img {
    width: 300px;
    height: 300px;
  }
  `


  S.CategoryButton = styled.div` // 상단 버튼들
    /* margin-left: 320px; */
    /* margin-top: 80px; */
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    width: 100%;
    max-width: 1050px;
    margin: 50px auto 0;
    
    div { // 버튼 간격
      display: flex;
      gap: 8px; 
    }

    button { // 버튼 스타일
      border-radius: 30px;
      padding: 10px 15px;
      background-color: black;
      color: ${({ theme }) => theme.PALLETE.white};
      border: 1px solid #ffd400;
      cursor: pointer;
      
      &:hover { // 버튼 호버
        background-color: #ffd400;
        color: ${({ theme }) => theme.PALLETE.black};
      }
    }
  `


S.ButtonWrapper = styled.div `
display: flex;
justify-content: center;
margin-top: 100px;

& button {
  display: flex;
  align-items: center;
  width: 250px;
  height: 55px;
  border: none;
  border-radius: 50px;
  background-color: #fff;
  color: #000;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding-left: 70px;
  position: relative;
  
  &:hover {
    background-color: #ffd400;
  }
}

& .icon2 {
  position: absolute;
  right: 60px;
}

path {
  color : #000;
}

svg {
  width: 16px;
  height: 16px;
}
`
  
S.Best = styled.div`
`

export default S;

